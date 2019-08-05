const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tab/tabs'
import TabsHead from '../src/tab/tabs-head'
import TabsItem from '../src/tab/tabs-item'
import TabsBody from '../src/tab/tabs-body'
import TabsPane from '../src/tab/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('Tabs存在.', () => {
    expect(Tabs).to.exist
  })
  /* it('子组件只能是 tabs-head 和 tabs-body', () => {

    Vue.component('g-tabs-head', TabsHead)
    Vue.component('g-tabs-item', TabsItem)
    Vue.component('g-tabs-body', TabsBody)
    Vue.component('g-tabs-pane', TabsPane)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <g-tabs>
          <g-tabs-head>
            <g-tabs-item></g-tabs-item>
            <g-tabs-item></g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane></g-tabs-pane>
            <g-tabs-pane></g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
    `
    const vm = new Vue({
      el: div
    })

  }) */
})