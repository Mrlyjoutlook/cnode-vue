// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Header } from 'mint-ui';
import App from './App';
import router from './router';
import store from './store';
import RequestPlugin from './utlis/request';

Vue.config.productionTip = false;

Vue.use(RequestPlugin, '$axios');

Vue.component(Header.name, Header);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
