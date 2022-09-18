import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//state = variable collection
//getters = get read-only variable
//mutation = change variable(s) in the state
//actions (dispatch) = async

export default new Vuex.Store({
  state: {
    someNumber: 111
  },
  getters: {
    GetSomeNumber (state) {
      return state.someNumber;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
