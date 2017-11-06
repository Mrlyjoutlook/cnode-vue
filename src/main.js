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
  Lazyload,
  Field,
  Radio,
} from 'mint-ui';
import 'normalize.css';
import './styles.css';
import App from './App';
import router from './router';
import store from './store';
import MonentPlugin from './utlis/moment';

Vue.config.productionTip = false;

Vue.use(InfiniteScroll);
Vue.use(MonentPlugin);

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.component(Button.name, Button);
Vue.component(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
