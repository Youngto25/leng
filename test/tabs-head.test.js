const expect = chai.expect;
import Vue from 'vue'
import TabsHead from '../src/tab/tabs-head'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsHead', () => {

  it('TabsHead存在.', () => {
    expect(TabsHead).to.exist
  })

})