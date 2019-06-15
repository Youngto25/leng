<template>
<div>
  <div class="collapse">
    <slot></slot>
  </div>
  <div>
    {{selected}}
  </div>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String
    }
  },
  provide(){
      return {
        eventBus: this.eventBus
      }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected)
    this.eventBus.$on('update:selected',(name)=>{
      this.$emit('update:selected',name)
    })
    this.$children.forEach((vm)=>{
      vm.single = this.single
      console.log(vm)
    })
  }
}
</script>
<style lang="scss" scoped>
$grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
