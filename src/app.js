import Vue from 'vue'
import router from './router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
 
library.add(faCoffee)

library.add(faTwitter)

library.add(faFacebook)

library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
 
})

