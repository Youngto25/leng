const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tab/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane', () => {

  it('TabsPane存在.', () => {
    expect(TabsPane).to.exist
  })

})