const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

  it('TabsItem存在.', () => {
    expect(TabsItem).to.exist
  })

})