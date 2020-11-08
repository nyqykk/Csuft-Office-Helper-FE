export function getGradeList(state, data){
	console.log(data)
	if(data.errMsg){
		state.gradeList = data.errMsg
	}else{
		state.gradeList = data.gradeList
	}
}