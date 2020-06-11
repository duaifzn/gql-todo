import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { apolloProvider } from './vue-apollo'


Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
