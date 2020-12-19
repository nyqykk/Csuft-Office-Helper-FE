<template>
  <div>
    <div v-show="gradeList" class="avg-grade">
	  平均分: {{averGrade.toFixed(2)}}
	</div>

	<div class="item-container">
	  <div :class="wrapTransition(index)" v-for="(item, index) in (filterGradeList || gradeList)">
		<ul class="top">
		  <li class="img-div"><img src="../../../assets/img/b.png" /></li>
		  <li class="class-num">课程号:{{item.classNum}}<li/>
		  <li class="top-right">学年学期:{{item.time}}</li>
		</ul>
		<div class="center">
		  <div>课程名:{{item.className}}</div>
		  <div class="center-div">
		    <div>成绩:{{item.grade}}</div>
			  <div class="study-status" :style="[isPass, {'color': calGrade(item.grade)}]">{{item.studyStatus}}</div>
			</div>
		  <div class="credit">学分:{{item.credit}}</div>
		</div>
	  </div>
	</div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: 'List',

  mounted() {
    this.$bus.$on('useFilter', (filterConfig) => {
	  this.filterGradeList = this.filterGrade(filterConfig)
	})
    this.cardTransitionLeft = this.cardTransitionRight = true
  },

  destroyed() {
    this.$bus.$off('useFilter')
  },

  methods:{
    calGrade(grade){
      return grade < 60 ? 'rgb(255, 85, 0)' : 'rgb(130,188,163)'
	},

	isNumber(obj) {
	  return typeof obj === 'number' && !isNaN(obj)
	},

	filterGrade(gradeConfig){
	  let result = this.$store.state.gradeList.filter((gradeItem) => {
	  	return ((gradeItem.className.indexOf(gradeConfig.toLowerCase()) !== -1) || (gradeItem.className.indexOf(gradeConfig.toUpperCase()) !== -1))
	  })
	  return result
	},

    wrapTransition(index){
      let className = {wrap: true}
      if(index & 1){
        className['card-transition-left-before'] = true
        className['card-transition-left'] = this.cardTransitionLeft
      }else{
        className['card-transition-right-before'] = true
        className['card-transition-right'] = this.cardTransitionRight
      }
      return className
    }
  },
  computed:{
    ...mapState(['gradeList']),
    averGrade(){
      if(this.gradeList){
	    let num = 0
	    let total = this.gradeList.reduce((pre, cur) => {
	    if(this.isNumber(Number(cur.grade)) || cur.grade === '及格'){
	      if(cur.grade === ''){
	        return pre
	      }
	      if(cur.grade === '及格'){
	        cur.grade = 60
	      }
	      num++
	      return pre + Number(cur.grade)
	    }
	    }, 0)
	    return total/num
      }
    },
  },

  data(){
    return{
	  isPass:{
	    color: 'rgb(130,188,163)',
	  },
	  filterGradeList: null,
      cardTransitionLeft: false,
      cardTransitionRight: false,
    }
  }
}
</script>

<style scoped>
.avg-grade{
  color: white;
  margin-left: 10px;
}
.item-container{
  padding: 0 10px;
}
.wrap{
  position: relative;
  box-shadow: 0.25rem 0.25rem 0.25rem rgb(205, 205, 206);
  margin-bottom: 2vh;
  margin-top: 1vh;
  background-color: white;
  opacity: 0.88;
  border-radius: 0.375rem;
  transition-duration: .9s;
  transition-property: transform;
}
.card-transition-left-before{
  transform: translateX(-100vw);
}
.card-transition-left{
  transform: translateX(0);
}
.card-transition-right-before{
  transform: translateX(100vw);
}
.card-transition-right{
  transform: translateX(0);
}
.top{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(202,241,254);
  height: 5vh;
  line-height: 5vh;
  font-family: MYingHei W5,Roman-55,Microsoft Yahei,sans-serif;
  border-radius: 0.375rem 0.375rem 0 0;
}
.class-num{
  font-size: 0.88rem;
}
.img-div{
  position: relative;
  top: 1.1vh;
  left: 1vw;
}
img{
  width: 1.625rem;
  height: 1.875rem;
  transform:rotate(-45deg);
}
.top-right{
  font-size: 0.78rem;
  padding-right: 3vw;
  color: rgb(181, 161, 159);
}
.center-div{
  display: flex;
  justify-content: space-between;
}
.study-status{
  margin-right: 6vw;
  font-size: 1.1rem;
}
.center{
  padding-top: 1vh;;
  padding-left: 5vw;
  position: relative;
  font-size: 0.88rem;
  border-left: 0.0625rem gainsboro solid;
}
.center .tail{
  display: flex;
  height: 5vh;
  line-height: 5vh;
}
.credit{
  padding-bottom: 1vh;
}
</style>
