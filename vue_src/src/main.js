import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import mavonEditor from 'mavon-editor'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import animated from 'animate.css'

Vue.config.productionTip = false



Vue.use(mavonEditor);
Vue.use(VueRouter);
Vue.use(animated);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
