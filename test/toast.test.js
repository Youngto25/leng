const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  /* describe('props', function () {
    it('接受 autoClose', (done) => {
      this.timeout(1500);
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      console.log(vm.$el)
      vm.$on('close',()=>{
          expect(document.body.contains(vm.$el)).to.eq(false)
          done()
      })
    })
    it('接受 closeButton', (done) => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        }
      }).$mount()
      console.log(vm.$el.outerHTML)
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(()=>{
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)
    })
  }) */
})