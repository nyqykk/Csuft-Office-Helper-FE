<template>
  <div>
	<div class="item-container">
      <div
        class="wrap"
        v-for="item in (filterGradeList || gradeList)"
        :key="item.key"
      >
        <ul class="top">
          <li class="img-wrap"><img class="img-content" src="@/assets/img/detailLogo.png" /></li>
          <li class="class-num">课程号:{{ item.classNum }}<li/>
          <li class="top-right">学年学期:{{ item.time }}</li>
        </ul>

        <div class="center">
          <div>课程名:{{ item.className }}</div>
            <div class="center-div">
              <div>成绩:{{ item.grade }}</div>
              <div class="study-status" :style="{color: calGrade(item.grade)}">{{ item.studyStatus }}</div>
            </div>
          <div class="credit">学分:{{ item.credit }}</div>
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
    this.$bus.$on('getFilter', (filterConfig) => {
      if(typeof filterConfig === 'string'){
        this.filterConfig.inputContent = filterConfig;
      }else{
        this.filterConfig.courseType = filterConfig['courseType'];
        this.filterConfig.optionList['studyStatus'] = filterConfig['studyStatus'];
        this.filterConfig.optionList['time'] = filterConfig['time'];
      }
      this.filterGradeList = this.filterGrade();
	})
  },

  beforeDestroy() {
    this.$bus.$off('getFilter');
  },

  data(){
    return{
      filterGradeList: null,
      filterConfig:{
        inputContent: '',
        optionList: {
          studyStatus: [],
          time: []
        },
        courseType: [],
      }
    }
  },

  methods:{
    calGrade(grade){
      return grade < 60 ? 'rgb(255, 85, 0)' : 'rgb(130,188,163)';
	},

	filterGrade(){
      const initialList = this.getCourseTypeFilter;
	  const processList = initialList.filter((gradeItem) => this.getInputFilter(gradeItem));
	  const finalList = this.getOptionsFilter(processList);
	  return finalList;
	},

    getInputFilter(gradeItem){
      const { inputContent } = this.filterConfig;
      return (gradeItem.className.toLowerCase().indexOf(inputContent.toLowerCase()) !== -1) || (gradeItem.className.toLowerCase().indexOf(inputContent.toUpperCase()) !== -1);
    },

    getOptionsFilter(initialList){
      const { optionList } = this.filterConfig;
      if(!optionList.studyStatus.length && !optionList.time.length){
        return initialList;
      }
      const keys = ['studyStatus', 'time'];
      return initialList.filter(listItem => keys.every(key => !optionList[key].length ? true : optionList[key].includes(listItem[key])));
    },
  },

  computed:{
    ...mapState(['gradeList', 'optionalCoursePosition']),

    getCourseTypeFilter(){
      const { courseType } = this.filterConfig;
      let initialList = [];
      /* 如果没有课程类型筛选则返回原成绩列表 */
      let flag = 0;
      if(courseType.includes('必修')){
        initialList = initialList.concat(this.gradeList.slice(0, this.optionalCoursePosition));
        flag = 1;
      }
      if(courseType.includes('选修')){
        initialList = initialList.concat(this.gradeList.slice(this.optionalCoursePosition));
        flag = 1;
      }
      if(!flag){
        initialList = this.gradeList;
      }
      flag = 0;
      return initialList;
    }
  },
}
</script>

<style scoped>
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
.img-wrap{
  position: relative;
  top: 0.8vh;
  left: 1vw;
}
.img-content{
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