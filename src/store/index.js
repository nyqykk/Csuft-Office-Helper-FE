import Vue from 'vue'
import Vuex from 'vuex'
import {getGradeList} from './mutations.js'
import {asyncGradeList} from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  gradeList: null,
  },
  mutations: {
	  getGradeList
  },
  actions: {
	  asyncGradeList
  },
  modules: {
  }
})
