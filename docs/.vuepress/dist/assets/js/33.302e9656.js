(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{300:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs","aria-hidden":"true"}},[e._v("#")]),e._v(" Tabs")]),e._v(" "),a("h2",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[e._v("#")]),e._v(" 引入")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { Tabs , TabsBody , TabsHead , TabsItem , TabsPane } from 'lengzi'\n")])])]),a("h2",{attrs:{id:"使用组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用组件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Vue.component('g-tabs',Tabs)\nVue.component('g-tabs-body',TabsBody)\nVue.component('g-tabs-head',TabsHead)\nVue.component('g-tabs-item',TabsItem)\nVue.component('g-tabs-pane',TabsPane)\n")])])]),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),a("h3",{attrs:{id:"简单用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 简单用法")]),e._v(" "),a("ClientOnly",[a("tabs-demo-1")],1),e._v(" "),a("h3",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 思路")]),e._v(" "),a("p",[e._v("Tabs组件上声明一个eventBus，并将其注入到其内部的组件中，监听事件。子组件发生的操作先告知父组件，再由父组件通知子组件该进行的操作。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Tabs组件\ndata(){\n  return {\n    eventBus: new Vue()\n  }\n},\nprovide(){\n  return {\n    eventBus: this.eventBus\n  }\n},\nmounted(){\n  this.eventBus.$on('getMessage',(m,n)=>{\n    this.eventBus.$emit('update:selected',m,n)\n  })\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TabsItem子组件，当被点击时，将组件的信息传递给父组件\nmounted(){\n  this.eventBus.$on('update:selected',(name)=>{\n    if(this.name === name){\n      this.active = true\n    }else{\n      this.active = false\n    }\n  })\n},\nmethods:{\n  xxx(){\n    if(this.disabled){\n      return \n    }\n    this.eventBus.$emit('getMessage',this.name,this)\n  }\n}\n\n")])])])],1)},[],!1,null,null,null);t.default=n.exports}}]);