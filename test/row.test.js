const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import {
    truncate
} from 'fs';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Row存在.', () => {
        expect(Row).to.be.ok
        expect(Vue).to.be.ok
    })

})