import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increase (state) {
      state.counter += 1;
    },
    increment (state, payload) {
      state.counter += payload.amount
    }
  },
  actions: {
  },
  modules: {
  }
})
