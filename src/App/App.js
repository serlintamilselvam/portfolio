// Import BootStrap
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from '../components/Header/Header.vue'

export default {
    name: 'App',
    components: {
      Header
    }
  }

  Vue.use(BootstrapVue, VueRouter)