import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Content from './content'
import Header from './header'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'



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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '',
    selectedTab: 'woman'
  },
  created(){
    
  },
  methods: {
    inputChange(e){
      console.log(e.target.value)
    },
    showToast(){
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
    }
  }
})


