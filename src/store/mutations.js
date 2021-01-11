export function getGradeList(state, payload){
  if(payload.msg){
    state.msg = payload.msg;
  }else{
    state.gradeList = payload.gradeList;
    state.optionalCoursePosition = payload.position;
  }
}

export function resetGradeList(state){
  state.gradeList = null;
  state.msg = '';
}

export function getBackgroundImg(state, payload) {
  state.backgroundImage = payload;
}