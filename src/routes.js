import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from './components/admin/Admin';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dash from './components/dash/Dash';
import NewIdea from './components/dash/NewIdea';
import UserIdeas from './components/dash/UserIdeas';
import Settings from './components/dash/Settings';
import IdeaDetail from './components/dash/IdeaDetail';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
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
        },
        {
          path: 'users/:user_id',
          component: UserIdeas
        },
        {
          path: 'settings',
          component: Settings,
          meta: {requiresAuth: true }
        },
        {
          path: 'idea/detail/:idea_id',
          component: IdeaDetail
        },
        {
          path: 'users/idea/detail/:idea_id',//when user's idea list after click title and redirect
          redirect: 'idea/detail/:idea_id'
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
      // redirect: '/auth/login'
    }
  ]
});

export default router;
