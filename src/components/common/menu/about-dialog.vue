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
        <li>秋屿 (李一龙)</li>
      </ul>
      <mu-button slot="actions" flat color="primary" @click="onClose">关闭</mu-button>
    </mu-dialog>
</div>
</template>

<script>
export default {
  name: "about-dialog",
  data(){
    return{}
  },
  props:{
    dialogVisible:{
      type: Boolean,
      default: false
    },
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