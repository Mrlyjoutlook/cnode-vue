import axios from 'axios';

function checkStatus(response) {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  } else {
    throw new Error(statusText).response = response;
  }
}

function request(method, url, params, data) {
  return axios({
    url,
    baseURL: 'https://cnodejs.org/api/v1',
    method,
    params,
    data,
  }).then(checkStatus)
  .then(json => json.data);
}

// const api = {
//   getTopics: '/topics', // 获取首页列表
//   accessToken: '/accessToken',  // 验证 accessToken 的正确性
//   getUserInfo: name => `/user/${name}`,  // 获取用户详情
//   getTopic: id => `/topic/${id}`,  // 获取主题
//   agree: id => `/reply/${id}/ups`, // 点赞
//   comment: id => `/topic/${id}/replies`, // 评论
//   collect: '/topic_collect/collect', // 主题收藏
//   deCollect: '/topic_collect/de_collect', // 取消主题收藏
//   getCollect: name => `/topic_collect/${name}`, // 所收藏的主题
//   getNoReadMessage: '/message/count', // 获取未读消息
//   getMessages: '/messages', // 获取所有消息
// };

/**
 * 获取列表数据
 * @param {Object} params
 */
export const reqList = params => request('get', '/topics', params);

/**
 * default
 */
export default {
  reqList,
};
