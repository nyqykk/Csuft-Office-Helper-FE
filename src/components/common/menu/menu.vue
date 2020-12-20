<template>
  <div>
    <MenuDrawer
      @onDialogVisible="onDialogVisible"
    />
	<AboutDialog
	  :dialogVisible="dialogVisible"
	  @onClose="onClose"
	/>
</div>
</template>

<script>
export default {
  data () {
	return {
	  dialogVisible: false,
	}
  },
  methods:{
    onClose(){
	  this.dialogVisible = false
    },
    onDialogVisible(){
      this.dialogVisible = true
    }
  },
  components:{
	MenuDrawer: () => import('@/components/common/menu/menu-drawer'),
	AboutDialog: () => import('@/components/common/menu/about-dialog')
  }
}
</script>

<style scoped>

</style>