import Vue from 'vue'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(vueScrollto)
Vue.use(i18n)


new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
