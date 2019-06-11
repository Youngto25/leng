<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>  
  </div>  
</template>
<script>
export default {
  inject: ['eventBus'],
  data(){
    return {
      active: false
    }
  },
  props:{
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(name)=>{
      if(this.name === name){
        this.active = true
      }else{
        this.active = false
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.tabs-pane{
  &.active{
    background: red;
  }
}
</style>
