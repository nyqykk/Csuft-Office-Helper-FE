<template>
  <div>
	<Menu></Menu>
	<div class="home">
	  <filter-list></filter-list>
	  <list></list>
	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  created() {
    if(!this.gradeList){
      this.$router.push('/login')
    }
  },
  components: {
    List: () => import('./childComps/List'),
    FilterList: () => import('./childComps/FilterList'),
    Menu: () => import('../.././components/common/menu/Menu')
  },
  computed:{
    ...mapState(['gradeList'])
  }
}
</script>
<style scoped>
.home{
  position: relative;
  height: 94vh;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0px)
}
</style>
