const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'
import {
    truncate
} from 'fs';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('Col存在.', () => {
        expect(Col).to.be.ok
        expect(Vue).to.be.ok
    })
/*
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })


        it('接受gutter属性.', () => {
            vm = new Constructor({
                propsData: {
                    value: 'joker'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('joker')
            vm.$destroy()
        })
    })
    */
})