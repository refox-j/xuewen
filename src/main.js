import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.min.css'

Vue.use(MintUI)
// axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.baseURL="/api";
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
