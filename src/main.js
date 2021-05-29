import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueObserveVisibility from 'vue-observe-visibility'
import { faBars, faHistory, faLaptop, faMapMarkerAlt, faPalette, faPaperclip, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faGithub, faInstagram, 
  faLinkedin, faUserGraduate, faMapMarkerAlt, faHistory, faLaptop, faPalette, faPaperclip)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueObserveVisibility)
Vue.directive('observe-visibility', VueObserveVisibility.ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
