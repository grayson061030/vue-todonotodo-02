// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './routes';
import VueResource from 'vue-resource';
import Auth from './plugins/Auth';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Auth);

alertify.defaults.notifier.position = 'top-right';
// common http request interceptors
Vue.http.interceptors.push(function (request, next) {
  if(request.url[0] === '/'){
    request.url = process.env.API + request.url;

    var token = Vue.auth.getToken();
    if(token) {
      request.headers.set('authorization', 'Bearer ' + token);
    }
  }
  next(function (response) {
    if(response.status == 400 || response.status == 401 || response.status == 500) {
      alertify.error(response.body.message);
    }
  });
});
// before routing check authentication
Router.beforeEach(function (to, from, next) {
  if(to.matched.some(function (record) {return record.meta.requiresGuest}) && Vue.auth.loggedIn()){
    next({path: '/newidea'});
  } else if(to.matched.some(function (record) {return record.meta.requiresAuth}) && !Vue.auth.loggedIn()){
    next({
      path: '/auth/login',
      query: {redirect: to.fullPath}
    });
  }else{
    next();
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : Router,
  store: store,
  components: { App },
  template: '<App/>'
})
