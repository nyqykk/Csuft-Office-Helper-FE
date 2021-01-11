<template>
  <div>
    <div>{{ description }}</div>
    <mu-flex class="select-control-row" :key="option" v-for="option in options">
      <mu-checkbox
        :value="option"
        :label="option"
        v-model="selectList"
        @change="onChange"
      >
      </mu-checkbox>
    </mu-flex>
  </div>

</template>

<script>
export default {
  name: "index",
  data(){
    return{
      selectList: []
    }
  },

  props:{
    description:{
      type: String,
      default: ''
    },
    options:{
      type: Array,
      default: () => []
    },
  },

  methods:{
    onChange(){
      this.$emit('onChange', this.selectList);
    }
  }
}
</script>

<style scoped>
.select-control-row{
  padding: 8px 0;
}
</style>