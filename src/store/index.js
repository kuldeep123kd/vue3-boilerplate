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
      state.counter += payload.value
    }
  },
  actions: {
  },
  getters: {
    getCounter (state) {
      return state.counter * 2;
    },
    normalizedCounter (state, getters) {
      // let final_counter = state.counter * 3;
      let final_counter = getters.getCounter;
      if(final_counter < 0) {
        return 0;
      }
      if (final_counter > 100) {
        return 100;
      }
      return final_counter;
    }
  },
  modules: {
  }
})
