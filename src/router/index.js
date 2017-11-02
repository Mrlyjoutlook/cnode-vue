import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
// import LoginPage from '@/components/LoginPage';
// import AdminPage from '@/components/AdminPage';
// import MessagePage from '@/components/MessagePage';
// import TopicPage from '@/components/TopicPage';
// import CommentPage from '@/components/CommentPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: LoginPage,
    // },
    // {
    //   path: '/admin',
    //   name: 'Admin',
    //   component: AdminPage,
    // },
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
