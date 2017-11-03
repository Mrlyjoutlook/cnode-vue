import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import LoginPage from '@/components/LoginPage';
import AdminPage from '@/components/AdminPage';
// import MessagePage from '@/components/MessagePage';
// import TopicPage from '@/components/TopicPage';
// import CommentPage from '@/components/CommentPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home/:type',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
    },
    // {
    //   path: '/topic/:id',
    //   name: 'Login',
    //   component: TopicPage,
    // },
    // {
    //   path: '/comment/:id',
    //   name: 'comment',
    //   component: CommentPage,
    // },
    // {
    //   path: '/message',
    //   name: 'message',
    //   component: MessagePage,
    // },
  ],
});
