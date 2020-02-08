<template>
  <div id="app">
    <a id="scrollBtn" v-scroll-to="'#navbar'" class="floatingBtn"></a>
    <NavBar class="component" id="navbar" :visibleId="this.selectedId" :allEl="this.allId"></NavBar>
    <JobTitle class="component" id="jobTitle"></JobTitle>
    <Description class="component" id="description"></Description>
    <Skills class="component" id="skills"></Skills>
    <PortfolioResume class="component" id="portfolio"></PortfolioResume>
    <Experience class="component" id="experience"></Experience>
    <Contact class="component" id="contact"></Contact>
    <InfoBottom class="component"></InfoBottom>
    <LanguageSwitcher id="language" class="lang"></LanguageSwitcher>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Description from './components/Description.vue'
import Skills from './components/Skills.vue'
import PortfolioResume from './components/PortfolioResume.vue'
import Contact from './components/Contact.vue'
import Experience from './components/Experience.vue'
import JobTitle from './components/JobTitle.vue'
import LanguageSwitcher from './components/Language.vue'
import InfoBottom from './components/InfoBottom.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Description,
    Skills,
    PortfolioResume,
    Contact,
    Experience,
    JobTitle,
    LanguageSwitcher,
    InfoBottom
  },
  data() {
    return {
      allId: ['description', 'skills', 'portfolio', 'experience', 'contact'],
      selectedId: null,
    }
  },
  created() {
    document.addEventListener('scroll', this.isInView);
  },
  destroyed() {
    document.removeEventListener('scroll', this.isInView);
  },
  methods: {
    isInView() {
      const elContact = document.getElementById('contact');
      const scroll = window.scrollY || window.pageYOffset
      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }

      this.jobTitleChanger(scroll);
      this.langChanger(elContact, viewport);
      this.menuItemChanger(viewport);
      this.scrollTopChanger(elContact, viewport);

    },
    jobTitleChanger(scroll) {
      let elJobTitle = document.getElementById('jobTitle');
      let elDescription = document.getElementById('description');
      let ratio = 0;
      
      if (window.innerWidth > 480) {
          ratio = ((scroll + elJobTitle.offsetHeight) *.75 - elDescription.offsetTop *.9) / 100;
      } else {
          ratio = (scroll + elJobTitle.offsetHeight - elDescription.offsetTop) / 100;
      }
      if (1 - ratio + 0.1 > 0.1) {
        elJobTitle.style.opacity = (1 - ratio + 0.1 >= 1) ? 1 : 1 - ratio + 0.1;
        document.getElementsByClassName('post')[0].style.opacity = (1 - ratio + 0.1 >= 1) ? 1 : 1 - ratio + 0.1;
      } else {
        elJobTitle.style.opacity = 0.1;
        document.getElementsByClassName('post')[0].style.opacity = (1 - ratio + 0.1 <= 0) ? 0 : 1 - ratio + 0.1;
      }
    },
    langChanger(elContact, viewport) {
      let elLang = document.getElementById('language');
      
      if (elContact.offsetTop <= viewport.top + elLang.offsetTop) {
        elLang.classList.add('langDarkColor');
      } else if (elLang.classList.contains('langDarkColor')) {
        elLang.classList.remove('langDarkColor');
      }
    },
    menuItemChanger(viewport) {
      for (let index = 0; index < this.allId.length; index++) {
          let el = document.getElementById(this.allId[index]);
        if (el.offsetTop >= viewport.top && el.offsetTop <= viewport.bottom) {
            this.selectedId = this.allId[index];
          return ;
        }
      }
    },
    scrollTopChanger(elContact, viewport){
      let elScroll = document.getElementById('scrollBtn');
      
      if (elContact.offsetTop <= viewport.top + elScroll.offsetTop) {
        elScroll.classList.add('darkColorBtn');
      } else if (elScroll.classList.contains('darkColorBtn')) {
        elScroll.classList.remove('darkColorBtn');
      }
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,bold');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,bold,400');
html{
  scroll-behavior: smooth;
}

h1 {
  font-size: 3.2em;
  font-weight: 400;
  margin-bottom: 10%;
}

#app {
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: column;
  width: 100%;
}

body {
  margin: 0;
  background-color: #39394C;
  color: white;
  width: 100%;
}

.fixe {
  display: block;
}

.floatingBtn {
  color:orange;
  cursor: pointer;
	position:fixed;
  bottom: 70px;
  right: 65px;
	border-color:orange;
	text-decoration:none;
	transition:all .3s ease-out;
  z-index: 2;
}

.floatingBtn:before {
  content:'▲';
  text-align: center;
	font-size:1.9em;
	position: inherit;
	border:solid 3px orange;
	border-radius:10em;
	width:1.5em;
	height:1.5em;
	line-height:1.3em;
	border-color:inherit;
	transition:transform .5s ease-in;
}

.floatingBtn:hover:before{
  transform: rotate(360deg);
}

.darkColorBtn {
  color: #39394C;
  border-color: #39394C;

}

#navbar {
  position: fixed;
  width: 100%;
  background-color: #39394C;
  opacity: 1;
  top: 0;
  z-index: 100;
}

.text {
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    white-space: pre-line;
}

.component {
  z-index: 1;
}

.lang {
  position: fixed;
  bottom: 15px;
  left: 10px;
  color: orange;
  z-index: 1;
}

.langDarkColor {
  color: #39394C;
}
</style>
