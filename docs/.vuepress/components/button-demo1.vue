<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
      <g-button>默认按钮</g-button>
      <g-button icon="setting" :loading="loading2" @click="loading2 = !loading2">设置按钮</g-button>
      <g-button icon="setting" icon-position="right">设置按钮</g-button>
      <g-button :loading="true">加载按钮</g-button>
      <g-button disabled>无法使用</g-button>
      <g-button icon="info">消息</g-button>
      <g-button icon="download">下载</g-button>
      <g-button icon="thumbs-up">点赞</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  import ButtonGroup from '../../../src/button/button'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        loading2: false,
        content: `
          <g-button>默认按钮</g-button>
          <g-button icon="setting" :loading="loading2" @click="loading2 = !loading2">设置按钮</g-button>
          <g-button icon="setting" icon-position="right">设置按钮</g-button>
          <g-button :loading="true">加载按钮</g-button>
          <g-button disabled>无法使用</g-button>
          <g-button icon="info">消息</g-button>
          <g-button icon="download">下载</g-button>
          <g-button icon="thumbs-up">点赞</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
button{
  margin: 8px 4px;
}
</style>
