import { reqList } from '../../config/service';

/**
|--------------------------------------------------
| types
|--------------------------------------------------
*/
const SAVE_USER_INFO = 'SAVE_USER_INFO';
// const STORGE_TOKEN = 'STORGE_TOKEN';
/**
|--------------------------------------------------
| state
|--------------------------------------------------
*/
const state = {
  state: {
    accesstoken: '',
    baseInfo: {

    },
  },
};
/**
|--------------------------------------------------
| actions
|--------------------------------------------------
*/
const actions = {
  async getUserInfo({ commit }, params) {
    const { success, data } = await reqList(params);
    if (success) {
      commit(SAVE_USER_INFO, { data, tab: params.tab });
    }
  },
};
/**
|--------------------------------------------------
| mutations
|--------------------------------------------------
*/
const mutations = {
  SAVE_USER_INFO() {

  },
};

export default {
  state,
  actions,
  mutations,
};

