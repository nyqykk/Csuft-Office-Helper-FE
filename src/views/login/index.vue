<template>
  <div class="login-wrap">
	<mu-avatar size="130">
	  <img src="@/assets/img/loginLogo.jpg" />
	</mu-avatar>
    <div class="input-wrap">
  	  <div class="input-div">
	    <mu-auto-complete color="black" v-model="username" icon=":iconfont icon-person" placeholder="学号"></mu-auto-complete>
		<mu-auto-complete type="password" color="black" v-model="pwd" icon=":iconfont icon-lock" placeholder="密码"></mu-auto-complete>
	  </div>
      <mu-button ref="loginRef" :class="loginClass" round color="red" @click="loginClick">
        <span v-if="!isClick">登录</span>
        <mu-circular-progress v-else-if="isClick==1" color="white" :stroke-width="2" :size="20"></mu-circular-progress>
      </mu-button>
      <!--Hacker 提升动画帧数-->
      <mu-button v-show="showHacker" ref="hackRef" :class="loginHackClass" round color="red"></mu-button>
	</div>
    <div class="alert-icon">
      <mu-button @click="onAlert" icon>
        <mu-icon class="icon" value=":iconfont icon-send"></mu-icon>
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
	  isClick: 0,
      loginSuccess: false,
      transitionFlag: true,
      showHacker: false,
      tips: '如有任何问题可联系QQ1327719263',
	}
  },

  computed:{
    ...mapState(['msg']),
    loginClass(){
      let classNames = {
        ['is-click']: !!this.isClick,
        ['login-btn']: true
      }
      return classNames;
    },
    loginHackClass(){
      let classNames = {
        ['is-click']: true,
        ['login-hack']: true,
        ['login-success']: this.loginSuccess
      }
      return classNames;
    }
  },

  methods:{
    ...mapMutations(['resetGradeList']),
    ...mapActions(['asyncGradeList']),

	async loginClick(){
      if(this.isClick !== 1){
        this.isClick = 1;
        this.resetGradeList();
        try{
          await this.asyncGradeList({
            username : this.username,
            pwd: this.pwd,
          })
          if(!this.msg){
            this.showHacker = true;
            new Promise((resolve) => {
            this.$refs.hackRef.$el.addEventListener('transitionend', this.moveTo(event));
            resolve();
            }).then(() => {
              this.isClick = 2;
              this.loginSuccess = true;
            })
            }else{
              this.isClick = 0;
              this.$toast.error('账号错误或登录太频繁');
            }
          }catch(e){
            this.$toast.error('网路有波动成绩溜走了');
            this.isClick = 0;
          }
      }
	},

    moveTo(e){
      return (e) => {
        if(e.target === e.currentTarget && this.transitionFlag) {
          this.$router.push('/home');
          this.transitionFlag = false;
        }
      }
    },

    onAlert(){
      this.$toast.warning(this.tips)
    }
  },

  beforeDestroy() {
    this.$refs.hackRef.$el.removeEventListener('transitionend', this.moveTo(event));
  }
}
</script>

<style scoped>
.login-wrap{
  height: 100vh;
  background-size: 100vw 100vh;
  overflow: hidden;
}
.mu-input{
  margin: 0;
  width: 75vw;
  font-family: MYingHei W5,Roman-55,Microsoft Yahei,sans-serif;
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
.login-btn{
  position: absolute;
  margin-top: 3vh;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  min-width: 0;
  height: 5vh;
  transition-property: width;
  transition-duration: .9s;
}
.login-hack{
  position: absolute;
  margin-top: 3vh;
  left: 45%;
  width: 85%;
  min-width: 0;
  height: 5vh;
  transform: translateZ(0);
  transition-property: transform, border-radius;
  transition-duration: .9s;
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
.is-click{
  width: 11%;
}
.mu-button >>> .mu-circular-progress{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}
.login-success{
  transform: translateZ(0) translate(-10vw, -40vh) scale(20,27);
  border-radius: 50%;
  z-index: 2;
}
.alert-icon{
  position: relative;
  top: 13%;
  left: 44%;
}
.icon{
  font-size: 1.7rem;
  color: white;
}
.has-icon >>> .mu-icon{
  font-size: 1.7rem;
  margin-top: -0.6vh;
}
</style>
