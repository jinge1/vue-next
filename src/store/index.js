import { createStore } from 'vuex'

const mutations = {
  increment(state) {
    state.count++
  }
}

const actions = {
  increment({ commit }) {
    setTimeout(() => commit('increment'), 2000)
  }
}

const store = createStore({
  state: {
    count: 0
  },
  mutations,
  actions
})

export default store
