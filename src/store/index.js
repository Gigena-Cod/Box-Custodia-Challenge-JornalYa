import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false,
    selected:{
      id:'',
      visibility:false
    }
  },
  getters: {
    getShow(state){
        return state.show
    }
  },
  mutations: {
    toogleShow(state){
      state.show=!state.show
    }
  },
  actions: {
  },
  modules: {
  }
})
