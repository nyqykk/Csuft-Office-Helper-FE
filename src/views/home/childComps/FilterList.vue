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
		}
	}
</script>

<style scoped>
	.mu-input{
		padding-top: 0;
		padding-bottom: 0;
		margin: 0;
		border: 1px black solid;
		border-radius: 1.0625rem;
		background-color: white;
		width: 96vw;
		margin-left: 2vw;
		margin-right: 2vw;
		padding-right: 10vw;
		min-height: 0;
	}
	.mu-input-content{
	}
	.filter-wrap{
		/* background-color: white; */
		padding-bottom: 1vh;
		padding-top: 1vh;
		opacity: 0.8;
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
