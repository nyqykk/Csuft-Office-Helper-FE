<template>
  <div class="about">
	<mu-avatar size="130">
	  <img src="../assets/img/loginLogo.jpg" />
	</mu-avatar>
    <div class="input-wrap">
  	  <div class="input-div">
	    <mu-auto-complete color="black" v-model="username" icon="person" placeholder="学号"></mu-auto-complete>
		<mu-auto-complete type="password" color="black" v-model="pwd" icon="lock" placeholder="密码"></mu-auto-complete>
	  </div>
	  <mu-button :class="{isClick: isClick}" round color="red" @click="loginClick">
	  <span v-if="!isClick">登录</span>
	  <mu-circular-progress v-else color="white" :stroke-width="2" :size="20"></mu-circular-progress>
	  </mu-button>
	</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default{
  data(){
	return{
	  username: '',
	  pwd: '',
	  isClick: false
	}
  },
  computed:{
    ...mapState(['msg'])
  },
  methods:{
    ...mapMutations(['resetGradeList']),
    ...mapActions(['asyncGradeList']),
	async loginClick(){
	  this.isClick = true
      this.resetGradeList();
      await this.asyncGradeList({
        username : this.username,
        pwd: this.pwd,
      })
      if(!this.msg){
        this.$router.push('/')
      }else{
        this.isClick = false;
        this.$toast.error('账号错误或登录太频繁')
      }
	}
  }
}
</script>

<style scoped>
.about{
  height: 100vh;
  background-size: 100vw 100vh;
}
.mu-input{
  margin: 0;
  width: 75vw;
  font-family: MYingHei W5,Roman-55,Microsoft Yahei,sans-serif;
  /*font-size: 0.92rem;*/
    font-size: 1.1rem;
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
  width: 15%;
}
.mu-button >>> .mu-circular-progress{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
