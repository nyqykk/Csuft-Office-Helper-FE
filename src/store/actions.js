import axios from 'axios'
export async function asyncGradeList(store, userInfo){
  let res = await axios.post('http://119.29.4.93:5000',{
		username: userInfo.username,
		pwd: userInfo.pwd
	})
	let data = {};
	if(res.data.code === 400){
		data.msg = res.data.msg;
	}else{
	  const gradeInfo = res.data.data.data;
		data.gradeList = gradeInfo.lastList;
		data.position = gradeInfo.position;
	}
	store.commit('getGradeList', data);
}