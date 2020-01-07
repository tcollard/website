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
import PortfolioResume from './components/PortfolioResume.vue'
import Contact from './components/Contact.vue'

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
  /* background-color: rgb(51, 59, 80); */
  background-color: rgb(80, 90, 125);
  color: white;
}
</style>
