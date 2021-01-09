<template>
  <div class="filter-wrap">
    <mu-auto-complete color="black" v-model="inputMsg"  icon="search" placeholder="课程名关键字"></mu-auto-complete>
  </div>
</template>

<script>
export default{
  data(){
  	return {
		inputMsg: ''
	}
  },
  watch:{
    inputMsg:{
	  handler(newMsg){
	    this.$bus.$emit('useFilter', newMsg);
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
}
.mu-input{
  display: flex;
  align-items: center;
}
.filter-wrap >>> .mu-input-icon{
  top: 50%;
  transform: translateY(-50%);
}
</style>
