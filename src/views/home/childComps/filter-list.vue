<template>
  <div class="filter-wrap">
    <mu-auto-complete
      color="black"
      v-model="inputMsg"
      icon=":iconfont icon-search"
      placeholder="课程名关键字"
    >
    </mu-auto-complete>

    <mu-button flat class="filter-button" small @click="onDialogVisible" ref="filterButton" >
      <mu-icon class="filter-icon" value=":iconfont icon-filter1"></mu-icon>
    </mu-button>

    <mu-dialog title="筛选" width="360" scrollable :open.sync="dialogVisible">
      <check-box
        description="按课程结果筛选"
        :options="checkboxOption.studyStatus"
        :originList="statusList"
        @onChange="(optionList) => onOptionChange(optionList, 'statusList')"
      />

      <check-box
        description="按课程类型筛选"
        :options="checkboxOption.courseType"
        :originList="courseList"
        @onChange="(optionList) => onOptionChange(optionList, 'courseList')"
      />

      <check-box
        description="按学年筛选"
        :options="checkboxOption.time"
        :originList="timeList"
        @onChange="(optionList) => onOptionChange(optionList, 'timeList')"
      />

      <mu-button class="reset-button" color="primary" @click="resetOptions">重置</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default{
  mounted() {
    this.GetOptions();
  },

  components:{
    checkBox: () => import('@/components/common/checkbox')
  },

  data(){
  	return {
      inputMsg: '',
      dialogVisible: false,
      checkboxOption: {
        studyStatus: [],
        time: [],
        courseType: ['必修', '选修'],
      },
      statusList: [],
      timeList: [],
      courseList: [],
	}
  },

  computed:{
    ...mapState(['gradeList', 'optionalCoursePosition']),
  },

  methods:{
    GetOptions(){
      const keys = ['studyStatus', 'time'];
      const requiredCourse = this.gradeList.slice(0, this.optionalCoursePosition);
      requiredCourse.map(gradeItem => {
        keys.map(key => {
          this.checkOptions(gradeItem[key], key) ? '' : this.checkboxOption[key].push(gradeItem[key]);
        })
      })
    },

    checkOptions(gradeValue, key){
      return this.checkboxOption[key].includes(gradeValue);
    },

    onDialogVisible(){
      this.dialogVisible = true;
    },

    onOptionChange(optionList, listName){
      this[listName] =  optionList;
      this.emitOptions();
    },

    resetOptions(){
      /* checkbox的originList有引用问题 不能直接赋值为[] */
      this.statusList.splice(0, this.statusList.length);
      this.timeList.splice(0, this.timeList.length);
      this.courseList.splice(0, this.courseList.length);
      this.emitOptions();
      this.dialogVisible = false;
    },

    emitOptions(){
      this.$bus.$emit('getFilter', {
        studyStatus: this.statusList,
        time: this.timeList,
        courseType: this.courseList
      });
    }
  },

  watch:{
    inputMsg:{
	  handler(newMsg){
	    this.$bus.$emit('getFilter', newMsg);
	  }
	}
  }
}
</script>

<style scoped>
.mu-input{
  padding-bottom: 1vh;
  margin: 0;
  border: 1px black solid;
  border-radius: 1.0625rem;
  background-color: white;
  width: 96vw;
  margin-left: 2vw;
  margin-right: 2vw;
  padding-right: 10vw;
  min-height: 0;
  height: 2.5rem;
  font-size: 1rem;
}
.filter-wrap{
  padding-bottom: 1vh;
  padding-top: 1vh;
  opacity: 0.8;
  color: white;
  display: flex;
}
.mu-input{
  display: flex;
  align-items: center;
}
.mu-input >>> .mu-input-icon{
  top: 0;
}
.filter-icon{
  font-size: 1.5rem !important;
  color: white;
}
.mu-input >>> .mu-input-icon{
  font-size: 1.3rem;
  top: 0.2rem;
}
.filter-button{
  min-width: 0;
  width: 10vw;
  height: 10vw;
  position: relative;
  top: 0.05rem;
  right: 0.7vw;
}
.reset-button{
  margin-top: 1.5vh;
}
</style>
