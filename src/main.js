// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 300ms点击延迟解决方案 npm install fastclick --save
import fastClick from 'fastclick'
// Vue-Awesome-Swiper 解决方案
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 重置项目中的CSS解决方案
import '@/assets/styles/reset.css'
// 1px 边框解决方案
import '@/assets/styles/border.css'
// iconfont 矢量图标库
import '@/assets/styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
