<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" v-if="closeButton" ref="line"></div>
    <span class="text" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 500
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    execAutoClose() {
      this.$nextTick(() => {
        console.log(this.$refs.wrapper.getBoundingClientRect().height);
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    log() {
      console.log(
        "callback想调用子组件方法，可以将this传给callback,this就是toast实例"
      );
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: black;
.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0 16px;
  .line {
    color: #666;
    border: 1px solid;
    margin: 0 16px;
    height: 100%;
  }
  .text {
    flex-shrink: 0;
  }
  .message{
    padding: 8px 0;
  }
}
</style>
