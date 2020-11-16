import Axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import TsocialPlugin from './plugins/tsocial'
import { constants } from '../config/constants'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(TsocialPlugin)
Vue.use(Notifications)

Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.headers.common['Authorization'] = localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY) || null


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
