<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>  
  </div>  
</template>
<script>
export default {
  data(){
    return {
      active: false
    }
  },
  props:{
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
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
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active{
    background: red;
  }
  &:hover{
    cursor: pointer;
  }
}
</style>
