<template>
  <div id="app">
    <NavBar></NavBar>
    <Description></Description>
    <Skills></Skills>
    <PortfolioResume></PortfolioResume>
    <Experiences></Experiences>
    <Contact></Contact>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Description from './components/Description.vue'
import Skills from './components/Skills.vue'
import PortfolioResume from './components/ProfolioResume.vue'
import Contact from './components/contact.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Description,
    Skills,
    PortfolioResume,
    Contact,
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

body {
  margin: 0;
}
</style>
