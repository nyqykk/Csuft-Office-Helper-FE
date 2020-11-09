export function getGradeList(state, data){
	if(data.errMsg){
		state.gradeList = data.errMsg
	}else{
		state.gradeList = data.gradeList
	}
}

export function resetGradeList(state){
	state.gradeList = null
}