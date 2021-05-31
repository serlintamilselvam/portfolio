import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollTo from 'vue-scrollto'
import VueTypedJs from 'vue-typed-js'
import VueLoaders from 'vue-loaders'
import { faBars, faHeart, faHistory, faLaptop, faMapMarkerAlt, faPalette, faPaperclip, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faGithub, faInstagram, 
  faLinkedin, faUserGraduate, faMapMarkerAlt, 
  faHistory, faLaptop, faPalette, faPaperclip, faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-loaders', VueLoaders.component)
Vue.use(VueObserveVisibility)
Vue.use(VueTypedJs)
Vue.use(VueScrollTo, {
  container: "body", lazy: true, duration: 200, easing: "linear", offset: -100 })

Vue.directive('observe-visibility', VueObserveVisibility.ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
