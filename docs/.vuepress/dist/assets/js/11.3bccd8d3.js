(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{108:function(t,n,e){"use strict";var r=e(54);e.n(r).a},109:function(t,n,e){"use strict";var r=e(55);e.n(r).a},110:function(t,n,e){"use strict";var r=e(56);e.n(r).a},111:function(t,n,e){"use strict";var r=e(57);e.n(r).a},112:function(t,n,e){"use strict";var r=e(58);e.n(r).a},115:function(t,n,e){"use strict";e(51),e(45),e(40);var r={data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(n){"GSider"===n.$options.name&&(t.layoutClass.hasSider=!0)})}},a=(e(108),e(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"8b2d4050",null);n.a=i.exports},116:function(t,n,e){"use strict";var r={},a=(e(109),e(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"a6953b8c",null);n.a=i.exports},117:function(t,n,e){"use strict";var r={},a=(e(110),e(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"3f4a2752",null);n.a=i.exports},118:function(t,n,e){"use strict";var r={},a=(e(111),e(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"25019f32",null);n.a=i.exports},119:function(t,n,e){"use strict";var r={name:"GSider"},a=(e(112),e(1)),i=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"6e880326",null);n.a=i.exports},162:function(t,n,e){},264:function(t,n,e){"use strict";var r=e(162);e.n(r).a},287:function(t,n,e){"use strict";e.r(n);e(26),e(29);var r=e(115),a=e(116),i=e(117),s=e(118),c=e(119),o={components:{"g-layout":r.a,"g-header":a.a,"g-footer":i.a,"g-content":s.a,"g-sider":c.a},data:function(){return{content:'\n        <g-layout>\n          <g-header style="height: 50px; background:lightskyblue;">\n            header\n          </g-header>\n          <g-layout>\n            <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n              sider\n            </g-sider>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n          </g-layout>\n          <g-footer style="height: 50px; background:lightskyblue;">\n            footer\n          </g-footer>\n        </g-layout>\n    '.replace(/^ {8}/gm,"").trim()}}},u=(e(264),e(1)),l=Object(u.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("g-layout",[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("g-layout",[e("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"d59ea792",null);n.default=l.exports},40:function(t,n,e){"use strict";var r=e(11),a=e(43)(0),i=e(28)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},43:function(t,n,e){var r=e(38),a=e(42),i=e(37),s=e(31),c=e(69);t.exports=function(t,n){var e=1==t,o=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f,d=n||c;return function(n,c,v){for(var g,p,_=i(n),y=a(_),b=r(c,v,3),m=s(y.length),x=0,k=e?d(n,m):o?d(n,0):void 0;m>x;x++)if((h||x in y)&&(p=b(g=y[x],x,_),t))if(e)k[x]=p;else if(p)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:k.push(g)}else if(l)return!1;return f?-1:u||l?l:k}}},51:function(t,n,e){var r=e(20).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||e(14)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},54:function(t,n,e){},55:function(t,n,e){},56:function(t,n,e){},57:function(t,n,e){},58:function(t,n,e){},69:function(t,n,e){var r=e(70);t.exports=function(t,n){return new(r(t))(n)}},70:function(t,n,e){var r=e(17),a=e(85),i=e(16)("species");t.exports=function(t){var n;return a(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!a(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}}}]);