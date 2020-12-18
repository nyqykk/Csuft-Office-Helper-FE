<template>
  <mu-appbar :z-depth="0">
    <mu-button icon slot="left" @click="backClick">
      <mu-icon value="chevron_left" color="red"></mu-icon>
    </mu-button>

    <mu-button icon @click="open = !open">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    <mu-drawer :open="open" :docked="false" :right='false'>
      <mu-list>
        <mu-list-item button @click="changeDialogVisible">
          <mu-list-item-title>关于我们</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </mu-appbar>
</template>

<script>
export default {
  name: "menu-drawer",
  data () {
    return {
      docked: false,
      open: false
    }
  },
}
</script>

<style scoped>

</style>