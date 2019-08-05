<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>  
  </div>  
</template>
<script>
export default {
  name: 'TabsItem',
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
        active: this.active,
        disabled: this.disabled
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
      if(this.disabled){
        return 
      }
      this.eventBus.$emit('getMessage',this.name,this)
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: blue;
$disable-color: grey;
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  &.active{
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
    color: $disable-color;
  }
  &:hover{
    cursor: pointer;
  }
}
</style>
