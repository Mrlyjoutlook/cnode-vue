import moment from 'moment';

export default {
  install: function (Vue, name = '$moment') {
    Object.defineProperty(Vue.prototype, name, { value: moment });
  },
};
