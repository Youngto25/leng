<template>
  <div>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="xxxx" >上方弹出，5秒后自动关闭，'正常的文字'是红色</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {
      'g-button': Button  
    },
    data () {
      return {
        content: `
          <g-button @click="xxxx">上方弹出，5秒后自动关闭，'正常文字是红色'</g-button>

          methods:{
            xxxx(){
              this.$toast('正常的文字',{
                closeButton: {
                  text:'知道了',
                  callback(toast){
                    console.log(toast)
                  },
                },
                position: 'top',
                enableHtml: true
              })
            }
          }
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods:{
      xxxx(){
        this.$toast('<span style="color: red">正常的文字</span>',{
          closeButton: {
            text:'知道了',
            callback(toast){
              console.log(toast)
            },
          },
          position: 'top',
          enableHtml: true
        })
      }
    }
  }
</script>