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
export default {
  name: 'Home',
  components: {
    List: () => import('./childComps/List'),
    FilterList: () => import('./childComps/FilterList'),
    Menu: () => import('../.././components/common/menu/Menu')
  },
  data(){
    return{
    }
  }
}
</script>
<style scoped>
.home{
  position: relative;
  height: 94vh;
  /*background-image: url(../../assets/img/bd443b8d8060e3f6e55144230bbf4435435dbd97.jpg@1320w_1866h.webp.jpg);*/
  /*background-size: 100vw 100vh;*/
  overflow: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translateZ(0px)
}
</style>
