/**
|--------------------------------------------------
| types
|--------------------------------------------------
*/
const ADD_LIST_DATA = 'ADD_LIST_DATA';
/**
|--------------------------------------------------
| state
|--------------------------------------------------
*/
const state = {
  tab: 'all',
  listData: {
    all: { page: 1, limit: 10, id: [], data: {} },
    good: { page: 1, limit: 10, id: [], data: {} },
    share: { page: 1, limit: 10, id: [], data: {} },
    ask: { page: 1, limit: 10, id: [], data: {} },
    job: { page: 1, limit: 10, id: [], data: {} },
  },
};
/**
|--------------------------------------------------
| actions
|--------------------------------------------------
*/
const actions = {

};
/**
|--------------------------------------------------
| mutations
|--------------------------------------------------
*/
const mutations = {
  ADD_LIST_DATA() {

  },
};

export default {
  state,
  actions,
  mutations,
};
