const expect = chai.expect;
import Vue from 'vue'
import TabsBody from '../src/tab/tabs-body'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsBody', () => {

  it('TabsBody存在.', () => {
    expect(TabsBody).to.exist
  })

})