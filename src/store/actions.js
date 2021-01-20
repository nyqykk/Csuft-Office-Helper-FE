import axios from 'axios'
export async function asyncGradeList(store, userInfo){
  let res = await axios.post('http://119.29.4.93:5000',{
		username: userInfo.username,
		pwd: userInfo.pwd
	}, { timeout: 8000 })
	let data = {};
  switch (res.data.code) {
		case 200:
			const gradeInfo = res.data.data.data;
			data.gradeList = gradeInfo.lastList;
			data.position = gradeInfo.position;
			break;
		default:
			data.msg = res.data.msg;
			data.code = res.data.code;
	}
	store.commit('getGradeList', data);
}