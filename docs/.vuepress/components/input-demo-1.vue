<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input> 
    <g-input value="中文" readonly></g-input>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/input/input'
  export default {
    components: {
      'g-input': GInput
    },
    data () {
      return {
        content: `
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input value="中文" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>