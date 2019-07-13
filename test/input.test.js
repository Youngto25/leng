const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'
import {
    truncate
} from 'fs';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('Input存在.', () => {
        expect(Input).to.be.ok
        expect(Vue).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })


        it('可以设置value.', () => {
            vm = new Constructor({
                propsData: {
                    value: 'joker'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('joker')
            vm.$destroy()
        })
        it('可以设置disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: false
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.disabled).to.equal(false)
            vm.$destroy()
        })
        it('可以设置readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.readOnly).to.equal(true)
            vm.$destroy()
        })

        it('可以设置error.', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
            vm.$destroy()
        })
    })
    describe('event', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(function () {
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                let event = new Event(eventName)
                Object.defineProperty(
                    event,'target',{
                        value: {value:'hi'},enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })


})