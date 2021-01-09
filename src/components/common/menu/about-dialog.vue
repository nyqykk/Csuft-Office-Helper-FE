<template>
  <div>
    <mu-dialog
      title="关于我们"
      width="360"
      :open="dialogVisible"
    >
      <span>作者:</span>
      <ul class="writer-list">
        <li>小牧 (聂焱)</li>
        <li>龙 (李一龙)</li>
      </ul>
      <div v-text="announce"></div>
      <mu-button slot="actions" flat color="primary" @click="onClose">关闭</mu-button>
    </mu-dialog>
</div>
</template>

<script>
export default {
  name: "about-dialog",
  props:{
    dialogVisible:{
      type: Boolean,
      default: false
    },
  },
  data(){
    return{
      announce: `声明:此项目并未收集同学们的教务处账号等个人隐私,有任何问题可联系 QQ:1327719263`,
    }
  },
  methods:{
    onClose(){
      this.$emit('onClose');
    }
  }
}
</script>

<style scoped>
.writer-list{
  list-style: none;
  padding: 0 0 0 10px;
  margin: 0;
}
</style>