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
        description="按学年筛选"
        :options="checkboxOption.time"
        :originList="timeList"
        @onChange="(optionList) => onOptionChange(optionList, 'timeList')"
      />
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
      },
      statusList: [],
      timeList: [],
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
      this.$bus.$emit('getFilter', {
        studyStatus: this.statusList,
        time: this.timeList
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
  height: 5.2vh;
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
.filter-icon{
  font-size: 1.3rem;
  color: white;
}
.filter-button{
  min-width: 0;
  width: 10vw;
  height: 10vw;
  position: relative;
  top: 0.3vh;
  right: 0.7vw;
}
</style>
