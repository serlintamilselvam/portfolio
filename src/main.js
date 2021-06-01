import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollTo from 'vue-scrollto'
import VueTypedJs from 'vue-typed-js'
import VueLoaders from 'vue-loaders'
import { faBars, faCloud, faDatabase, faHeart, faHistory, faLaptop, faLeaf, faMapMarkerAlt, faPalette, faPaperclip, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faAngular, faCss3Alt, faDocker, faGit, faGithub, faHtml5, faInstagram, faJava, faJira, faJsSquare, faLaravel, faLinkedin, faMagento, faNode, faNpm, faPhp, faPython, faReact, faSass, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faGithub, faInstagram, 
  faLinkedin, faUserGraduate, faMapMarkerAlt, 
  faHistory, faLaptop, faPalette, faPaperclip, faHeart,
  faHtml5, faCss3Alt, faJsSquare, faReact, faVuejs, faAngular ,faNode, faPhp, faJava, faJira, faDocker,
  faSass, faGit, faLaravel, faMagento, faDatabase, faLeaf, faCloud, faWordpress, faNpm, faPython)

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
