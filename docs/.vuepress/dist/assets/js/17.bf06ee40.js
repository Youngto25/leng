(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(t,s,n){"use strict";var o=n(64);n.n(o).a},106:function(t,s,n){"use strict";var o=n(13),e=n(36)(!0);o(o.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},107:function(t,s,n){"use strict";var o=n(13),e=n(108);o(o.P+o.F*n(109)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},108:function(t,s,n){var o=n(124),e=n(15);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(e(t))}},109:function(t,s,n){var o=n(14)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},110:function(t,s,n){"use strict";var o=n(65);n.n(o).a},120:function(t,s,n){"use strict";var o=n(127),e=(n(73),n(106),n(107),n(47),n(43),n(99),function(t){var s=Object.keys(t),n=!0;return s.forEach(function(t){["span","offset"].includes(t)||(n=!1)}),n}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,e=this.narrowPc,a=this.pc,r=this.widePc,c=this.createClasses;return[].concat(Object(o.a)(c({span:t,offset:s})),Object(o.a)(c(n,"ipad-")),Object(o.a)(c(e,"narrow-pc-")),Object(o.a)(c(a,"pc-")),Object(o.a)(c(r,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},r=(n(110),n(1)),c=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"762d069c",null);s.a=c.exports},121:function(t,s,n){"use strict";n(43),n(47),n(32),n(73);var o={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},e=(n(105),n(1)),a=Object(e.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"57b08083",null);s.a=a.exports},154:function(t,s,n){},255:function(t,s,n){"use strict";var o=n(154);n.n(o).a},285:function(t,s,n){"use strict";n.r(s);n(26),n(27);var o=n(121),e=n(120),a={components:{GRow:o.a,GCol:e.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n        <g-row class="demoRow" gutter="10">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8" offset="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4" offset="8">\n            <div class="demoCol">4</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow" gutter="10">\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},r=(n(255),n(1)),c=Object(r.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"d2ff6d16",null);s.default=c.exports},47:function(t,s,n){"use strict";var o=n(13),e=n(72)(0),a=n(34)([].forEach,!0);o(o.P+o.F*!a,"Array",{forEach:function(t){return e(this,t,arguments[1])}})},64:function(t,s,n){},65:function(t,s,n){},73:function(t,s,n){"use strict";var o=n(11),e=n(23),a=n(24),r=n(88),c=n(35),i=n(12),l=n(89).f,d=n(84).f,f=n(22).f,u=n(41).trim,v=o.Number,g=v,p=v.prototype,m="Number"==a(n(71)(p)),h="trim"in String.prototype,C=function(t){var s=c(t,!1);if("string"==typeof s&&s.length>2){var n,o,e,a=(s=h?s.trim():u(s,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(s.charCodeAt(1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+s}for(var r,i=s.slice(2),l=0,d=i.length;l<d;l++)if((r=i.charCodeAt(l))<48||r>e)return NaN;return parseInt(i,o)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof v&&(m?i(function(){p.valueOf.call(n)}):"Number"!=a(n))?r(new g(C(s)),n,v):C(s)};for(var _,w=n(16)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)e(g,_=w[b])&&!e(v,_)&&f(v,_,d(g,_));v.prototype=p,p.constructor=v,n(21)(o,"Number",v)}}}]);