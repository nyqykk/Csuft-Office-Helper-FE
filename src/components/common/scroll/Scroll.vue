<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default{
    name: 'Scroll',
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper,{
        click: true
      })
	},
    data(){
      return{
        scroll: null,
      }
    },
    methods:{
      /* 回到顶部*/
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        /* console.log('-----') */
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    }
}
</script>

<style>
</style>
