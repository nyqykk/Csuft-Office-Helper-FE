import axios from 'axios'
export function asyncGradeList(store, gradeList){
	axios.post('http://118.249.51.137:5000/test',{
				  username: gradeList.username,
				  pwd0: gradeList.pwd0
				},
	).then((res) => {
		  let data = {}
		  if(res.data.errMsg){
		  	data.errMsg = res.data.errMsg
		  }else{
			  data.gradeList = res.data.lastList
			  data.position = res.data.position
		  }
		  store.commit('getGradeList', data)
	})
}