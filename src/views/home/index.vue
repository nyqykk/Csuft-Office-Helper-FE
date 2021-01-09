<template>
  <div>
	<Menu></Menu>
	<div class="home">
	  <filter-list></filter-list>
	  <list></list>
	</div>
    <div :class="getClass"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  created() {
    if(!this.gradeList){
      this.$router.push('/login');
    }
    this.$nextTick(() => {
	  this.homeTransitionEnd = true;
	})
  },
  data(){
  	return{
	  homeTransitionEnd: false,
	}
  },
  components: {
    List: () => import('@/views/home/childComps/list'),
    FilterList: () => import('@/views/home/childComps/filter-list'),
    Menu: () => import('@/components/common/menu/menu')
  },
  computed:{
    ...mapState(['gradeList']),
    getClass(){
	  return{
	    ['home-transition-start']: true,
	    ['home-transition-end']: this.homeTransitionEnd
	  }
	}
  }
}
</script>
<style scoped>
.home{
  position: relative;
  height: 94vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0px)
}
.home-transition-start{
  width: 100vw;
  height: 100vh;
  background-color: red;
  position: absolute;
  top: 0;
  transition: transform .7s;
}
.home-transition-end{
  border-radius: 50%;
  transform-origin: 53% 85%;
  transform: scale(0);
}
</style>
