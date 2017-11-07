import { reqUserInfo, checkToken } from '../../config/service';

/**
|--------------------------------------------------
| types
|--------------------------------------------------
*/
const SAVE_USER_INFO = 'SAVE_USER_INFO';
const REMEMBER_TOKEN = 'REMEMBER_TOKEN';
const UNREMEMBER_TOKEN = 'UNREMEMBER_TOKEN';
/**
|--------------------------------------------------
| state
|--------------------------------------------------
*/
const state = {
  rememberToken: false,
  accesstoken: '',
  baseInfo: {},
};
/**
|--------------------------------------------------
| actions
|--------------------------------------------------
*/
const actions = {
  async checkToken({ commit }, { token, saveToken, callback }) {
    const { success, loginname, id, avatar_url } = await checkToken({ accesstoken: token });
    if (success) {
      commit(SAVE_USER_INFO, { accesstoken: token, baseInfo: { id, loginname, avatar_url } });
      callback();
    }
    if (!saveToken) {
      commit(UNREMEMBER_TOKEN);
    } else {
      commit(REMEMBER_TOKEN);
    }
  },
  async reqUserInfo({ commit }, loginname) {
    const { success, data } = await reqUserInfo(loginname);
    if (success) {
      commit(SAVE_USER_INFO, { baseInfo: data });
    }
  },
};
/**
|--------------------------------------------------
| mutations
|--------------------------------------------------
*/
const mutations = {
  SAVE_USER_INFO(state, data) {
    state = Object.assign(state, data);
  },
  REMEMBER_TOKEN(state) {
    state.rememberToken = true;
  },
  UNREMEMBER_TOKEN() {
    state.rememberToken = false;
  },
};

export default {
  state,
  actions,
  mutations,
};

