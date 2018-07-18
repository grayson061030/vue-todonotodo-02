import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from './components/admin/Admin';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dash from './components/dash/Dash';
import NewIdea from './components/dash/NewIdea';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path:'/',
      component: Dash,
      redirect: '/newidea',
      children: [
        {
          path: 'newidea',
          component: NewIdea,
          meta: {requiresAuth: true}
        }
      ]
    },
    {
      path: '/auth',
      component: Auth,
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          component: Login,
          meta: {requiresGuest: true}
        },
        {
          path: 'register',
          component: Register,
          meta: {requiresGuest: true}
        }
      ]
    },
    {
      path: '/admin',
      component: Admin,
      redirect: '/auth/login'
    }
  ]
});

export default router;
