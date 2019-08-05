<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <p>
      <strong>注意事项</strong><br>
      g-button-group的子元素应该全是g-button，否则会发出警告
    </p>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  import ButtonGroup from '../../../src/button/button-group'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        loading2: false,
        content: `
          <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
          </g-button-group>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
