<template>
	<mu-appbar :z-depth="0">
		<mu-button icon slot="left" @click="backClick">
			<mu-icon value="chevron_left" color="red"></mu-icon>
		</mu-button>
		
		<mu-button icon @click="open = !open">
				  <mu-icon value="menu"></mu-icon>
		</mu-button>
		<mu-drawer :open.sync="open" :docked="false" :right='false'>
				<mu-list>
				  <mu-list-item button>
					<mu-list-item-title>Menu Item 1</mu-list-item-title>
				  </mu-list-item>
				  <mu-list-item button>
					<mu-list-item-title>Menu Item 2</mu-list-item-title>
				  </mu-list-item>
				  <mu-list-item  @click="open = false" button>
					<mu-list-item-title>Close</mu-list-item-title>
				  </mu-list-item>
				</mu-list>
		</mu-drawer>
	</mu-appbar>
</template>

<script>
	export default {
	  data () {
	    return {
	      docked: false,
	      open: false
	    }
	  },
	  methods:{
		  backClick(){
			  this.$router.back()
		  }
	  }
	}
</script>

<style scoped>
	.mu-appbar, .mu-appbar >>> .mu-appbar-title, .mu-appbar >>> .mu-button{
		padding: 0;
	}
	.mu-appbar >>> .mu-appbar-title{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100%;
	}
	.mu-appbar{
		height: 6vh;
	}
	.mu-appbar >>> .mu-button{
		height: 6vh;
		width: 6vh;
	}
</style>