<template>
  <div id="app">
    <a id="scrollBtn" v-scroll-to="'#navbar'" class="floatingBtn"></a>
    <NavBar id="navbar" :visibleId="this.selectedId" :allEl="this.allId"></NavBar>
    <JobTitle id="jobTitle"></JobTitle>
    <Description id="description"></Description>
    <Skills id="skills"></Skills>
    <PortfolioResume id="portfolio"></PortfolioResume>
    <Experience id="experience"></Experience>
    <Contact id="contact"></Contact>
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
      const scroll = window.scrollY || window.pageYOffset
        const viewport = {
          top: scroll,
            bottom: scroll + window.innerHeight,
        }
      let elJobTitle = document.getElementById('jobTitle');
      let elContact = document.getElementById('contact');
      let elScroll = document.getElementById('scrollBtn');

      // console.log('Scroll: ', elScroll); /*eslint-disable-line*/
      // console.log('Contact: ', elContact.offsetTop); /*eslint-disable-line*/
      // console.log('Viewport: ', viewport); /*eslint-disable-line*/
      if (elContact.offsetTop <= viewport.top + elScroll.offsetTop) {
        elScroll.classList.add('darkColorBtn');
      } else if (elScroll.classList.contains('darkColorBtn')) {
        elScroll.classList.remove('darkColorBtn');
      }

      if (scroll >= 100) {
        elJobTitle.style.opacity = 0.1;
        document.getElementsByClassName('post')[0].style.display = 'none';
      } else {
        if (document.getElementsByClassName('post')[0].style.display === 'none') {
          document.getElementsByClassName('post')[0].style.display = '';
        }
        elJobTitle.style.opacity = 1 - scroll / 100 + 0.15;
      }

      for (let index = 0; index < this.allId.length; index++) {
        let el = document.getElementById(this.allId[index]);
        if (el.offsetTop >= viewport.top && el.offsetTop <= viewport.bottom) {
          this.selectedId = this.allId[index];
          return ;
        }
      }
    }
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
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

body {
  margin: 0;
  background-color: #39394C;
  color: white;
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
}
</style>
