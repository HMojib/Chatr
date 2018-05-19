// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jquery'
import io from 'socket.io-client'
import VueSocketio from 'vue-socket.io';
import { store } from './store/store';
import { routes } from './router/index';

Vue.use(VueSocketio, 'http://localhost:3000/');
global.jQuery = jQuery
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
/*
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }

});
*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  components: { App },
  template: '<App/>'
});
