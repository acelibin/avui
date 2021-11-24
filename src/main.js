import Vue from 'vue'
import App from './App.vue'

import Toast from './package/toast/index'
Vue.use(Toast)

import npmComAlert from './package/npmComAlert/index'
Vue.use(npmComAlert)

new Vue({
  el: '#app',
  render: h => h(App)
})
