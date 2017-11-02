import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
// import list from './modules/list';
import action from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    // list,
  },
  action,
  mutations,
});

export default store;
