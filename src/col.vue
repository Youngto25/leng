<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone } = this;
      let x = (obj,str='')=>{
        let array = []
        if(!obj){
          return ''
        }
        if(obj.span){
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset){
          array.push(`col-${str}${obj.offset}`)
        }
        return array
      }
      return [
        ...x({span,offset}),
        ...x(phone,'phone-')
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
