<template>
  <div id="app">
    <NavBar
      id="navbar"
      :visibleId="this.selectedId"
      :allEl="this.allId"
    ></NavBar>
    <JobTitle class="component" id="jobTitle"></JobTitle>
    <Description class="component" id="description"></Description>
    <Skills class="component" id="skills"></Skills>
    <PortfolioResume class="component" id="portfolio"></PortfolioResume>
    <Experience class="component" id="experience"></Experience>
    <Contact class="component" id="contact"></Contact>
    <InfoBottom class="component"></InfoBottom>
    <div
      class="component bottomBtn"
      id="bottomBtn"
      :class="deviceWidth > 700 ? 'bottomBtnWeb' : 'bottomBtnPhone'"
    >
      <LanguageSwitcher
        v-if="deviceWidth > 700"
        id="language"
        class="lang"
      ></LanguageSwitcher>
      <a id="scrollBtn" v-scroll-to="'#navbar'" class="floatingBtn"></a>
    </div>
  </div>
</template>

<script>
import Contact from "./components/views/contact/Contact.vue";
import Description from "./components/views/description/Description.vue";
import Experience from "./components/views/experience/_Experience.vue";
import InfoBottom from "./components/utils/InfoBottom.vue";
import JobTitle from "./components/utils/JobTitle.vue";
import LanguageSwitcher from "./components/utils/Language.vue";
import NavBar from "./components/utils/NavBar.vue";
import PortfolioResume from "./components/views/portfolio/PortfolioResume.vue";
import Skills from "./components/views/skills/_Skills.vue";

export default {
  name: "app",
  components: {
    Contact,
    Description,
    Experience,
    InfoBottom,
    JobTitle,
    LanguageSwitcher,
    NavBar,
    PortfolioResume,
    Skills,
  },
  data() {
    return {
      allId: ["description", "skills", "portfolio", "experience", "contact"],
      selectedId: null,
      deviceWidth: window.innerWidth,
    };
  },
  created() {
    document.addEventListener("scroll", this.isInView);
  },
  destroyed() {
    document.removeEventListener("scroll", this.isInView);
  },
  methods: {
    isInView() {
      const elContact = document.getElementById("contact");
      const scroll = window.scrollY || window.pageYOffset;
      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };

      this.jobTitleChanger(scroll);
      this.menuItemChanger(viewport);
      this.changeColor(elContact, viewport);
    },
    jobTitleChanger(scroll) {
      let elJobTitle = document.getElementById("jobTitle");
      let elDescription = document.getElementById("description");
      let ratio = 0;

      if (window.innerWidth > 480) {
        ratio =
          ((scroll + elJobTitle.offsetHeight) * 0.75 -
            elDescription.offsetTop * 0.9) /
          100;
      } else {
        ratio =
          (scroll + elJobTitle.offsetHeight - elDescription.offsetTop) / 100;
      }
      if (1 - ratio + 0.1 > 0.1) {
        elJobTitle.style.opacity = 1 - ratio + 0.1 >= 1 ? 1 : 1 - ratio + 0.1;
        document.getElementsByClassName("post")[0].style.opacity =
          1 - ratio + 0.1 >= 1 ? 1 : 1 - ratio + 0.1;
      } else {
        elJobTitle.style.opacity = 0.1;
        document.getElementsByClassName("post")[0].style.opacity =
          1 - ratio + 0.1 <= 0 ? 0 : 1 - ratio + 0.1;
      }
    },
    menuItemChanger(viewport) {
      for (let index = 0; index < this.allId.length; index++) {
        let el = document.getElementById(this.allId[index]);
        if (el.offsetTop >= viewport.top && el.offsetTop <= viewport.bottom) {
          this.selectedId = this.allId[index];
          return;
        }
      }
    },
    changeColor(elContact, viewport) {
      let elScroll = document.getElementById("scrollBtn");
      let elBottomBtn = document.getElementById("bottomBtn");
      let elLang = null;
      if (this.deviceWidth > 700) {
        elLang = document.getElementById("language");
      }

      if (elContact.offsetTop <= viewport.top + elBottomBtn.offsetTop) {
        if (elLang) elLang.classList.add("langDarkColor");
        elScroll.classList.add("darkColorBtn");
      } else if (elScroll.classList.contains("darkColorBtn")) {
        if (elLang) elLang.classList.remove("langDarkColor");
        elScroll.classList.remove("darkColorBtn");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,bold");
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,bold,400");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: #39394c;
  color: white;
  width: 100vw;
  overflow-x: hidden;
}

h1 {
  font-family: "Roboto Slab";
  font-weight: bold;
  color: white;
}

h2 {
  font-size: 3.2em;
  font-weight: 400;
  margin-bottom: 10%;
  text-align: center;
}

h3 {
  font-size: 2em;
  font-weight: 400;
  padding-bottom: 5%;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 0;
}

p {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  white-space: pre-line;
}

#app {
  font-family: "Roboto Slab", serif;
  display: flex;
  flex-direction: column;
}

#navbar {
  position: fixed;
  width: 100%;
  background-color: #39394c;
  opacity: 1;
  top: 0;
  z-index: 100;
}

.bottomBtn {
  position: fixed;
  width: 100%;
  height: 6vh;
  bottom: 0;
  padding-bottom: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  pointer-events: none;
}

.bottomBtnPhone {
  justify-content: flex-end;
  padding-bottom: 25px;
}

.bottomBtnWeb {
  justify-content: space-between;
}

.component {
  z-index: 1;
}

.floatingBtn {
  color: orange;
  cursor: pointer;
  text-decoration: none;
  border: solid 3px orange;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  z-index: 2;
  margin-right: 2%;
  pointer-events: all;
}

.floatingBtn:before {
  content: "▲";
  text-align: center;
  font-size: 1.9em;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.3em;
}

.darkColorBtn {
  color: #39394c;
  border-color: #39394c;
}

.lang {
  color: orange;
  z-index: 2;
  pointer-events: all;
}

.langDarkColor {
  color: #39394c;
}

.text {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  white-space: pre-line;
}

@media only screen and (min-width: 1024px) {
  .floatingBtn:before {
    transition: transform 0.5s ease-in;
  }

  .floatingBtn:hover:before {
    transform: rotate(360deg);
  }
}
</style>
