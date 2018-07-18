// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './routes';
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource);


alertify.defaults.notifier.position = 'top-right';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : Router,
  components: { App },
  template: '<App/>'
})
