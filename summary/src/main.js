// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './globalFilter'
import VueResource from 'vue-resource'
import animated from 'animate.css'
Vue.config.productionTip = false;
// VueResource往实例上面挂载了$http
Vue.use(VueResource);
Vue.use(animated)

/* eslint-disable no-new */
var vm =  new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})