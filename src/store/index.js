import Vue from 'vue'
import Vuex from 'vuex'
import {getGradeList, resetGradeList, getBackgroundImg} from './mutations.js'
import {asyncGradeList} from './actions.js'
import backgroundImage from "../assets/img/bd443b8d8060e3f6e55144230bbf4435435dbd97.jpg@1320w_1866h.webp.jpg";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  gradeList: null,
    backgroundImage,
    msg: ''
  },
  mutations: {
	  getGradeList,
	  resetGradeList,
    getBackgroundImg
  },
  actions: {
	  asyncGradeList
  },
  modules: {
  }
})
