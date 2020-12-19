<template>
  <div>
    <mu-appbar :z-depth="0">
	  <mu-button icon slot="left" @click="backClick" ref="btn">
		<mu-icon value="chevron_left" color="red"></mu-icon>
	  </mu-button>

	  <mu-button icon @click="open=!open">
		<mu-icon value="menu"></mu-icon>
	  </mu-button>
	  <mu-drawer :open.sync="open" :docked="false" :right='false'>
		<mu-list>
		  <mu-list-item button @click="changeDialogVisible">
		    <mu-list-item-title>关于我们</mu-list-item-title>
		  </mu-list-item>
		  <mu-list-item button @click="editBackGround">
	  		<mu-list-item-title>
				自定义背景
				<input @change="getFile" class="upload" type="file" ref="upload" />
			</mu-list-item-title>
		  </mu-list-item>
		</mu-list>
	  </mu-drawer>
	</mu-appbar>
	<AboutDialog
	  :dialogVisible="dialogVisible"
	  @onClose="onClose"
	/>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
	return {
	  docked: false,
	  open: false,
	  dialogVisible: false,
	}
  },
  methods:{
    ...mapMutations(['getBackgroundImg']),
    backClick(){
      this.$router.push('/login')
    },
    changeDialogVisible(){
	  this.dialogVisible = true;
    },
    onClose(){
	  this.dialogVisible = false;
    },
    editBackGround(){
	  this.$refs.upload.click()
	},
    getFile(){
      const file = this.$refs.upload.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', () => {
        localStorage.setItem('backgroundImage', reader.result)
        this.getBackgroundImg(reader.result)
        this.open = false
      })
    }
  },
  components:{
	MenuDrawer: () => import('./menu-drawer'),
	AboutDialog: () => import('./about-dialog')
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
.upload{
  display: none;
}
</style>