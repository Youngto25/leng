<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>

    <div style="height: 200px;">
      <g-collapse single :selected.sync="selectedTab2">
        <g-collapse-item title="HTML" name="1">
          <div>11</div>
          <div>21</div>
          <div>31</div>
        </g-collapse-item>
        <g-collapse-item title="CSS" name="2">CSS1</g-collapse-item>
        <g-collapse-item title="JavaScript" name="3">JavaScript1</g-collapse-item>
      </g-collapse>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  import Vue from 'vue'

  export default {
    components: {
      'g-collapse': Collapse,
      'g-collapse-item': CollapseItem
    },
    data () {
      return {
        selectedTab2: ['1'],
        content: `
          <g-collapse single :selected.sync="selectedTab2">
            <g-collapse-item title="HTML" name="1">HTML1</g-collapse-item>
            <g-collapse-item title="CSS" name="2">CSS1</g-collapse-item>
            <g-collapse-item title="JavaScript" name="3">JavaScript1</g-collapse-item>
          </g-collapse>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>