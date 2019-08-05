<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" style="border: 1px solid #cccccc">
      <g-tabs-head>
        <g-tabs-item name="1" ref="mark">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body style="padding-bottom: 200px;">
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GTabs from '../../../src/tab/tabs'
  import GTabsBody from '../../../src/tab/tabs-body'
  import GTabsHead from '../../../src/tab/tabs-head'
  import GTabsItem from '../../../src/tab/tabs-item'
  import GTabsPane from '../../../src/tab/tabs-pane'

  export default {
    components: {
      'g-tabs': GTabs,
      'g-tabs-body': GTabsBody,
      'g-tabs-head': GTabsHead,
      'g-tabs-item': GTabsItem,
      'g-tabs-pane': GTabsPane
    },
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }
          
          <g-tabs :selected="selected" style="border: 1px solid #cccccc">
            <g-tabs-head>
              <g-tabs-item name="1" ref="mark">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body style="padding-bottom: 200px;">
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    mounted(){
      
    }
  }
</script>