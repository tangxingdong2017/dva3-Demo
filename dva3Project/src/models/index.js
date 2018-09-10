import {
  query
} from '../services/index';
export default {

  namespace: 'home',

  state: {
    count: 0,
    userId: 1992,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log(1111)
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const testData = yield call(query);
      console.log('testData', testData)
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
