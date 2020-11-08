<template>
  <div class="about">
    <div class="input-wrap">
		<div class="input-div">
			<mu-auto-complete color="white" v-model="username" icon="person" placeholder="学号"></mu-auto-complete>
			<mu-auto-complete color="white" v-model="pwd0" icon="lock" placeholder="密码"></mu-auto-complete>
		</div>
		<mu-button round color="red" @click="loginClick">
		  登录
		</mu-button>
	</div>
	
  </div>
</template>

<script>
	export default{
		data(){
			return{
				username: '',
				pwd0: ''
			}
		},
		methods:{
			loginClick(){
				this.$store.dispatch('asyncGradeList', {
					username : this.username,
					pwd0: this.pwd0,
				})
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
	.about{
		height: 100vh;
		background-image: url(../assets/img/bd443b8d8060e3f6e55144230bbf4435435dbd97.jpg@1320w_1866h.webp.jpg);
		background-size: 100vw 100vh;
	}
	.mu-input >>> .mu-text-field-input{
		color: white;
	}
	.mu-input{
		margin: 0;
		width: 75vw;
		font-family: MYingHei W5,Roman-55,Microsoft Yahei,sans-serif;
		font-size: 0.92rem;
		/* border-bottom: 1px rgb(125,136,148) solid; */
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 1.5vh;
		padding-left: 2vw;
	}
	.input-wrap{
		position: relative;
		top: 65%;
	}
	.mu-button{
		margin-top: 3vh;
		left: 50%;
		transform: translateX(-50%);
		width: 85%;
		height: 5vh;
	}
	.mu-input >>> .mu-input-icon{
		left: -7vw;
		top: 1.5vh;
	}
</style>
