<template>
  <div class="popover" @click.stop="xxx">
    <div v-if="visible" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    
  },
  data(){
    return {
      visible: false
    }
  },
  methods: {
    xxx(){
      this.visible = !this.visible
      if(this.visible === true){
        this.$nextTick(()=>{
          let y = ()=>{
            console.log(this.visible)
            this.visible = false
            document.removeEventListener('click',y)
          } 
          document.addEventListener('click', y)
        })
      }
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
