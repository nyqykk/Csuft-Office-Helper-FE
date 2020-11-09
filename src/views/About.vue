<template>
  <div class="about">
	<mu-avatar size="130">
	      <img src="../assets/img/loginLogo.jpg" />
	</mu-avatar>
    <div class="input-wrap">
		<div class="input-div">
			<mu-auto-complete color="white" v-model="username" icon="person" placeholder="学号"></mu-auto-complete>
			<mu-auto-complete type="password" color="white" v-model="pwd0" icon="lock" placeholder="密码"></mu-auto-complete>
		</div>
		<mu-button :class="{isClick: isClick}" round color="red" @click="loginClick">
			<span v-if="!isClick">登录</span>
			<mu-circular-progress v-else color="white" :stroke-width="2" :size="20"></mu-circular-progress>
		</mu-button>
	</div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				username: '',
				pwd0: '',
				isClick: false
			}
		},
		methods:{
			loginClick(){
				this.$store.commit('resetGradeList')
				this.$store.dispatch('asyncGradeList', {
					username : this.username,
					pwd0: this.pwd0,
				})
				this.isClick = true
				/* this.$router.push('/') */
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
		transition: width .9s;
		min-width: 0
	}
	.mu-input >>> .mu-input-icon{
		left: -7vw;
		top: 1.5vh;
	}
	.mu-avatar{
		position: absolute;
		left: 50%;
		top: 10%;
		transform: translateX(-50%);
		opacity: 0.9;
	}
	.mu-avatar >>> .mu-avatar-inner{
		font-size: 1.3125rem;
	}
	.isClick{
		width: 12%;
	}
	.mu-button >>> .mu-circular-progress{
		min-width: 0;
/* 		width: 100%;
		height: 100%; */
	}
	.mu-button >>> .mu-circle-wrapper{
		left: -10%;
	}
</style>
