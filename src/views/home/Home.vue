<template>
  <div class="home">
	  <scroll ref="scroll" class="scroll">
		  <filter-list></filter-list>
		  <input class="username" v-model="username"/>
		  <input class="password" v-model="pwd0"/>
		  <button @click="btnClick">submit</button>
		  <list @refresh="refresh" :gradeList="gradeList"></list>
	  </scroll>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  components: {
	  List: () => import('./childComps/List'),
	  Scroll: () => import('../.././components/common/scroll/Scroll'),
	  FilterList: () => import('./childComps/FilterList')
  },
  data(){
	  return{
		  username: '20182762',
		  pwd0: '12365478a',
		  gradeList: null,
		  position: 0,
		  activeKey: 0
	  }
  },
  methods:{
	  btnClick(){
		  console.log('aaa')
		  axios.post('http://localhost:5000/test',{
			  username: this.username,
			  pwd0: this.pwd0
			},
		  ).then((res) => {
			  this.gradeList = res.data.lastList
			  this.position = res.data.position
		  })
	  },
	  refresh(){
		  this.$refs.scroll.refresh()
	  }
  }
}
</script>
<style scoped>
	.home{
		position: relative;
		height: 93vh;
	}
	.scroll{
	   position: absolute;
	   top: 0;
	   bottom: 0;
	   left: 0;
	   right: 0;
	   overflow: hidden;
	}
</style>
