import Vue from 'vue'
import Vuex from 'vuex'
import { getGradeList, resetGradeList, getBackgroundImg } from '@/store/mutations.js'
import { asyncGradeList } from '@/store/actions.js'
import backgroundImage from "@/assets/img/backgroundImg.jpg";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gradeList: null,
    optionalCoursePosition: 0,
    backgroundImage,
    originBackGround: backgroundImage,
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
})
