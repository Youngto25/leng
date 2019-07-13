import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Sider from './layout/sider'
import Content from './layout/content'
import Header from './layout/header'
import Footer from './layout/footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsItem from './tab/tabs-item'
import TabsBody from './tab/tabs-body'
import TabsPane from './tab/tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-layout',Layout)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '',
    selectedTab: 'woman',
    selectedTab2: ['2','1']
  },
  created(){
    
  },
  methods: {
    inputChange(e){
      console.log(e.target.value)
    },
    showToastMiddle(){
      this.$toast('我是<strong>加粗文字</strong><p>我是<strong>加粗文字</strong><p>我是<strong>加粗文字</strong><p>我是<strong>加粗文字</strong>',{
        closeButton: {
          text:'知道了',
          callback(toast){
            toast.log()
            console.log('用户说他知道了')
          },
        },
        position: 'middle',
        enableHtml: true,
        autoClose: 10
      })
    },
    showToastTop(){
      this.$toast('正常的文字',{
        closeButton: {
          text:'知道了',
          callback(toast){
            toast.log()
            console.log('用户说他知道了')
          },
        },
        position: 'top',
        enableHtml: true,
        autoClose: 10
      })
    },
    showToastBottom(){
      this.$toast('正常的文字',{
        closeButton: {
          text:'知道了',
          callback(toast){
            toast.log()
            console.log('用户说他知道了')
          },
        },
        position: 'bottom',
        enableHtml: true,
        autoClose: 10
      })
    }
  }
})


