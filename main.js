import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import axios from 'axios'
import toast from 'component/toast/main.js'

import clHeader from 'component/header/clHeader.vue'
import clButtonBottom from './component/button/bottom/button.vue'
import clCellItem from './component/cell/cellItem/cellItem'
import clCellGroup from './component/cell/cellGroup/cellGroup'

import uView from 'uview-ui'

Vue.config.productionTip = false
Vue.use(uView)
/**
 * 封装操作
 */
Vue.prototype.axios = axios
Vue.prototype.$toast = toast
/**
 * 全局注册组件
 */
Vue.component('cl-header', clHeader)
Vue.component('cl-button-bottom', clButtonBottom)
Vue.component('cl-cell-group', clCellGroup)
Vue.component('cl-cell-item', clCellItem)
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif