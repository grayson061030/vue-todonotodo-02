import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './components/HelloWorld';
Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/hello',
      component: Hello
    }
  ]
});

export default router;
