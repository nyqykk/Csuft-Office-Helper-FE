import axios from 'axios'
export function asyncGradeList(store, gradeList){
	axios.post('http://localhost:5000/test',{
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