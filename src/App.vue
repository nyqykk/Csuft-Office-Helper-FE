<template>
  <div id="app" :style="{backgroundImage: `url(${backgroundImage})`}">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name: "app",
  mounted() {
    let backgroundImage = localStorage.getItem('backgroundImage');
    if(backgroundImage){
      this.$store.commit('getBackgroundImg', backgroundImage);
    }
  },

  computed:{
    ...mapState(['backgroundImage'])
  }
}
</script>

<style>
#app{
  height: 100vh;
  background-size: 100vw 100vh;
}
</style>
