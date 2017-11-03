// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Header,
  Button,
  InfiniteScroll,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Tabbar,
} from 'mint-ui';
import 'normalize.css';
import './styles.css';
import App from './App';
import router from './router';
import store from './store';
import RequestPlugin from './utlis/request';

Vue.config.productionTip = false;

Vue.use(RequestPlugin, '$axios');

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(InfiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
