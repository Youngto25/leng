<template>
  <div class="popover" @click="xxx">
    <div v-if="visible" class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    visible: false
  },
  methods: {
    xxx(){
      this.visible = !this.visible
    }
  }
}
</script>
<style lang="scss" scoped>
.popover{
  display: inline-block;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>
