<template>
  <div id="app">
    <a v-scroll-to="'#navbar'" class="floatingBtn"></a>
    <NavBar id="navbar"></NavBar>
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

export default {
  name: 'app',
  components: {
    NavBar,
    Description,
    Skills,
    PortfolioResume,
    Contact,
    Experience,
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  background-color: rgb(80, 90, 125);
  color: white;
}

.floatingBtn {
  color:orange;
  cursor: pointer;
	position:fixed;
  bottom: 8%;
  right: 7%;
	border-color:orange;
	text-decoration:none;
	transition:all .3s ease-out;
}

.floatingBtn:before {
  content:'▲';
  text-align: center;
	font-size:1.9em;
	position: inherit;;
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

#navbar {
  position: fixed;
  width: 100%;
  background-color: rgb(80, 90, 125);
  top: 0;
  z-index: 100;
}

#description, #skills, #experience, #portfolio, #contact{
  padding-top: 8%;
}
</style>
