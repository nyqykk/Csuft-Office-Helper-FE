<template>
  <div id="app">
	<Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
	export default{
		name: "app",
		components:{
			Menu: () => import('./components/common/menu/Menu')
		}
	}
</script>

<style>
	body{
		background-image: url(assets/img/bodyImg.jpg);
	}
</style>
