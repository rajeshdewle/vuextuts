import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Chetna',
    nameList: [],
  },
  mutations: {
    setName(state, a) {
      state.name = a;
    },
    setNameList(state, n) {
      state.nameList = n;
    }
  },
  actions: {
    changeName({ commit }, newValue) {
      commit('setName', newValue);
    },
    addName({ commit }, newName) {
      commit('setNameList', newName);
    }
  },
  getters: {
    nameCount: state => state.nameList.length,
  }
})
