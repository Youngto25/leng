
<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from '../icon/icon'
  export default{
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {
        type: String,
        vilidator (value){
          return 
            ['setting','loading','info','error','left','right','download','thumbs-up'].indexOf(value) >= 0 
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value){
          if(value !== 'left' && value !== 'right'){
            return false
          }else{
            return true
          }   
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.g-button{
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover{
    border-color: $border-color-hover;
}
  &:active{
    background-color: $button-active-bg;
}
  &:focus{
    outline: none;
  }
  .icon{
    order: 1;
    margin-right: 0.3em;
  }
  .content{
    order: 2;
  }

  &.icon-right{
    .icon{
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    .content{
      order: 1;
    }
  }
}
.loading{
  animation: spin 2s infinite linear;
}  
@keyframes spin{
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}  
</style>