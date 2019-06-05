<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "GInput",
  components: {
    icon: Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$disalbed-color: #bbb;
$red: #f1453d;

.wrapper {
  display: inline-flex;
  align-items: center;
  :not(:last-child){
    margin-right: .5em;
  }
  input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 9px 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: $disalbed-color;
      color: $disalbed-color;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: $disalbed-color;
      color: $disalbed-color;
    }
  }
  &.error {
    input {
      border-color: $red;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMessage{
    color: $red;
  }
}
</style>
