<template>
	<div class="filter-wrap">
		<mu-button round small class="mu-botton" color="error" @click="open = !open">
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
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      docked: false,
	      open: false,
	      position: 'left'
	    }
	  }
	}
</script>

<style scoped>
	.mu-appbar-title{
		padding: 0;
	}
	.mu-botton{
		height: 4vh;
	}
	.filter-wrap{
		height: 8vh;
		line-height: 8vh;
	}
</style>
