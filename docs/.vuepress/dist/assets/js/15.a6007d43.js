(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(t,s,n){"use strict";var o=n(64);n.n(o).a},106:function(t,s,n){"use strict";var o=n(13),a=n(36)(!0);o(o.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},107:function(t,s,n){"use strict";var o=n(13),a=n(108);o(o.P+o.F*n(109)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},108:function(t,s,n){var o=n(124),a=n(15);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},109:function(t,s,n){var o=n(14)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},110:function(t,s,n){"use strict";var o=n(65);n.n(o).a},120:function(t,s,n){"use strict";var o=n(127),a=(n(73),n(106),n(107),n(47),n(43),n(99),function(t){var s=Object.keys(t),n=!0;return s.forEach(function(t){["span","offset"].includes(t)||(n=!1)}),n}),c={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,a=this.narrowPc,c=this.pc,l=this.widePc,i=this.createClasses;return[].concat(Object(o.a)(i({span:t,offset:s})),Object(o.a)(i(n,"ipad-")),Object(o.a)(i(a,"narrow-pc-")),Object(o.a)(i(c,"pc-")),Object(o.a)(i(l,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},l=(n(110),n(1)),i=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"762d069c",null);s.a=i.exports},121:function(t,s,n){"use strict";n(43),n(47),n(32),n(73);var o={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},a=(n(105),n(1)),c=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"57b08083",null);s.a=c.exports},152:function(t,s,n){},253:function(t,s,n){"use strict";var o=n(152);n.n(o).a},283:function(t,s,n){"use strict";n.r(s);n(26),n(27);var o=n(121),a=n(120),c={components:{GRow:o.a,GCol:a.a},data:function(){return{content:'\n        * {\n          box-sizing: border-box;\n        }\n        <g-row class="demoRow">\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n          <g-col span="8">\n            <div class="demoCol">8</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow">\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n          <g-col span="6">\n            <div class="demoCol">6</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow">\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n          <g-col span="4">\n            <div class="demoCol">4</div>\n          </g-col>\n        </g-row>\n        <g-row class="demoRow">\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n          <g-col span="2">\n            <div class="demoCol">2</div>\n          </g-col>\n        </g-row>\n    '.replace(/^ {8}/gm,"").trim()}}},l=(n(253),n(1)),i=Object(l.a)(c,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("24格网格")]),t._v(" "),t._m(0),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("g-row",{staticClass:"demoRow"},[n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("g-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"c768169e",null);s.default=i.exports},47:function(t,s,n){"use strict";var o=n(13),a=n(72)(0),c=n(34)([].forEach,!0);o(o.P+o.F*!c,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},64:function(t,s,n){},65:function(t,s,n){},73:function(t,s,n){"use strict";var o=n(11),a=n(23),c=n(24),l=n(88),i=n(35),e=n(12),r=n(89).f,d=n(84).f,v=n(22).f,g=n(41).trim,u=o.Number,p=u,C=u.prototype,f="Number"==c(n(71)(C)),m="trim"in String.prototype,_=function(t){var s=i(t,!1);if("string"==typeof s&&s.length>2){var n,o,a,c=(s=m?s.trim():g(s,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(s.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+s}for(var l,e=s.slice(2),r=0,d=e.length;r<d;r++)if((l=e.charCodeAt(r))<48||l>a)return NaN;return parseInt(e,o)}}return+s};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof u&&(f?e(function(){C.valueOf.call(n)}):"Number"!=c(n))?l(new p(_(s)),n,u):_(s)};for(var h,w=n(16)?r(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)a(p,h=w[b])&&!a(u,h)&&v(u,h,d(p,h));u.prototype=C,C.constructor=u,n(21)(o,"Number",u)}}}]);