import { createStore } from 'hacksaw';

const store = createStore({
  tables: {
    repos: {},
    users: {}
  }
});

export default store;
