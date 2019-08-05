const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tab/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('TabsItem存在.', () => {
    expect(TabsItem).to.exist
  })

})