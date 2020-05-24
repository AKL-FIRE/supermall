import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 1.初始化事件总线
// Vue.prototype.$bus = new Vue()
// 2.某组件发出事件
// this.$bus.$emit('事件名称', 参数)
// 3.任意组件接受并处理事件
// this.$bus.$on('事件名称', 参数)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
