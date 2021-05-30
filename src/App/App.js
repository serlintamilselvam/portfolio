// Import BootStrap
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from '../components/Header/Header.vue'
import Leftnav from '../components/Leftnav/Leftnav.vue'
import About from '../components/Sections/About/About.vue'
import Skills from '../components/Sections/Skills/Skills.vue'
import Contact from '../components/Sections/Contact/Contact.vue'
import Footer from '../components/Footer/Footer.vue'

export default {
    name: 'App',
    components: {
      Header,
      Leftnav,
      About,
      Skills,
      Contact,
      Footer
    }
  }

  Vue.use(BootstrapVue, VueRouter)