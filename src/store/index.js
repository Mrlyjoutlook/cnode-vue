import Vuex from 'vuex';
import user from './modules/user';
import list from './modules/list';

const store = new Vuex.Store({
  modules: {
    user,
    list,
  },
});

export default store;
