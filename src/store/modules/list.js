import { normalize, schema } from 'normalizr';
import { reqList } from '../../config/service';

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
  async getList({ commit }, params) {
    const { success, data } = await reqList(params);
    if (success) {
      commit(ADD_LIST_DATA, { data, tab: params.tab });
    }
  },
};
/**
|--------------------------------------------------
| mutations
|--------------------------------------------------
*/
const mutations = {
  ADD_LIST_DATA(stat, { data, tab }) {
    const id = new schema.Entity('id');
    const listSchema = [id];
    const normalizedData = normalize(data, listSchema);
    state.listData[tab].id.push(...normalizedData.result);
    state.listData[tab].data = Object.assign(state.listData[tab].data, normalizedData.entities.id);
    state.listData[tab].page += 1;
  },
};

export default {
  state,
  actions,
  mutations,
};
