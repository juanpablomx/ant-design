webpackJsonp([18,197],{85:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),l=s(4),i=t(l),u=s(6),r=t(u),d=s(5),k=t(d),f=s(1),m=t(f),h=s(157),g=t(h),v=s(3),y=t(v),C=function(n){function a(){return(0,i["default"])(this,a),(0,r["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=void 0===e?"":e,l=(0,y["default"])((n={},(0,c["default"])(n,o,!!o),(0,c["default"])(n,s+"-small","small"===t),n));return m["default"].createElement(g["default"],(0,p["default"])({},this.props,{className:l}))},a}(m["default"].Component);a["default"]=C,C.defaultProps={prefixCls:"ant-switch",size:"default"},C.propTypes={prefixCls:f.PropTypes.string,size:f.PropTypes.oneOf(["small","default"]),className:f.PropTypes.string},n.exports=a["default"]},86:function(n,a,s){"use strict";s(11),s(148)},121:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),o=t(p),c=s(4),l=t(c),i=s(6),u=t(i),r=s(5),d=t(r),k=s(1),f=t(k),m=s(2),h=t(m),g=s(38),v=t(g),y=s(12),C=t(y),b=s(3),x=t(b),N=function(n){function a(s){(0,l["default"])(this,a);var t=(0,u["default"])(this,n.call(this,s));return t.handleClose=function(n){n.preventDefault();var a=h["default"].findDOMNode(t);a.style.height=a.offsetHeight+"px",a.style.height=a.offsetHeight+"px",t.setState({closing:!1}),(t.props.onClose||e)(n)},t.animationEnd=function(){t.setState({closed:!0,closing:!0})},t.state={closing:!0,closed:!1},t}return(0,d["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.closable,t=a.description,e=a.type,p=a.prefixCls,c=void 0===p?"ant-alert":p,l=a.message,i=a.closeText,u=a.showIcon,r=a.banner;u=u||r,e=r?"warning":e;var d="";switch(e){case"success":d="check-circle";break;case"info":d="info-circle";break;case"error":d="cross-circle";break;case"warning":d="exclamation-circle";break;default:d="default"}t&&(d+="-o");var k=(0,x["default"])((n={},(0,o["default"])(n,c,!0),(0,o["default"])(n,c+"-"+e,!0),(0,o["default"])(n,c+"-close",!this.state.closing),(0,o["default"])(n,c+"-with-description",!!t),(0,o["default"])(n,c+"-no-icon",!u),(0,o["default"])(n,c+"-banner",!!r),n));return i&&(s=!0),this.state.closed?null:f["default"].createElement(v["default"],{component:"",showProp:"data-show",transitionName:c+"-slide-up",onEnd:this.animationEnd},f["default"].createElement("div",{"data-show":this.state.closing,className:k},u?f["default"].createElement(C["default"],{className:c+"-icon",type:d}):null,f["default"].createElement("span",{className:c+"-message"},l),f["default"].createElement("span",{className:c+"-description"},t),s?f["default"].createElement("a",{onClick:this.handleClose,className:c+"-close-icon"},i||f["default"].createElement(C["default"],{type:"cross"})):null))},a}(f["default"].Component);a["default"]=N,N.defaultProps={type:"info"},n.exports=a["default"]},122:function(n,a,s){"use strict";s(11),s(493)},140:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),l=s(20),i=t(l),u=s(4),r=t(u),d=s(6),k=t(d),f=s(5),m=t(f),h=s(1),g=t(h),v=s(2),y=s(3),C=t(y),b=s(197),x=t(b),N=s(22),S=t(N),w=s(40),z=t(w),E=function(n){function a(s){(0,r["default"])(this,a);var t=(0,k["default"])(this,n.call(this,s)),e=s.spinning;return t.state={spinning:e},t}return(0,m["default"])(a,n),a.prototype.isNestedPattern=function(){return!(!this.props||!this.props.children)},a.prototype.componentDidMount=function(){(0,x["default"])()||((0,v.findDOMNode)(this).className+=" "+this.props.prefixCls+"-show-text")},a.prototype.componentWillUnmount=function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout)},a.prototype.componentWillReceiveProps=function(n){var a=this,s=this.props.spinning,t=n.spinning;this.debounceTimeout&&clearTimeout(this.debounceTimeout),s&&!t?this.debounceTimeout=setTimeout(function(){return a.setState({spinning:t})},500):this.setState({spinning:t})},a.prototype.render=function(){var n,a=(0,S["default"])(this.props,["className","size","prefixCls","tip"]),s=(0,i["default"])(a,2),t=s[0],e=t.className,o=t.size,l=t.prefixCls,u=t.tip,r=s[1],d=this.state.spinning,k=(0,C["default"])((n={},(0,c["default"])(n,l,!0),(0,c["default"])(n,l+"-sm","small"===o),(0,c["default"])(n,l+"-lg","large"===o),(0,c["default"])(n,l+"-spinning",d),(0,c["default"])(n,l+"-show-text",!!this.props.tip),(0,c["default"])(n,e,!!e),n)),f=(0,z["default"])(r,["spinning"]),m=g["default"].createElement("div",(0,p["default"])({},f,{className:k}),g["default"].createElement("span",{className:l+"-dot"}),u?g["default"].createElement("div",{className:l+"-text"},u):null);return this.isNestedPattern()?g["default"].createElement("div",(0,p["default"])({},f,{className:d?l+"-nested-loading":""}),m,g["default"].createElement("div",{className:l+"-container"},this.props.children)):m},a}(g["default"].Component);a["default"]=E,E.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default"},E.propTypes={prefixCls:h.PropTypes.string,className:h.PropTypes.string,spinning:h.PropTypes.bool,size:h.PropTypes.oneOf(["small","default","large"])},n.exports=a["default"]},141:function(n,a,s){"use strict";s(11),s(294)},148:function(n,a){},156:function(n,a,s){"use strict";function t(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function p(){}var o=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},c=s(1),l=s(3),i=c.createClass({displayName:"Switch",propTypes:{className:c.PropTypes.string,prefixCls:c.PropTypes.string,disabled:c.PropTypes.bool,checkedChildren:c.PropTypes.any,unCheckedChildren:c.PropTypes.any,onChange:c.PropTypes.func,onMouseUp:c.PropTypes.func},getDefaultProps:function(){return{prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:p}},getInitialState:function(){var n=this.props,a=!1;return a="checked"in n?!!n.checked:!!n.defaultChecked,{checked:a}},componentWillReceiveProps:function(n){"checked"in n&&this.setState({checked:!!n.checked})},setChecked:function(n){"checked"in this.props||this.setState({checked:n}),this.props.onChange(n)},toggle:function(){var n=!this.state.checked;this.setChecked(n)},handleKeyDown:function(n){37===n.keyCode&&this.setChecked(!1),39===n.keyCode&&this.setChecked(!0)},handleMouseUp:function(n){this.refs.node&&this.refs.node.blur(),this.props.onMouseUp&&this.props.onMouseUp(n)},render:function(){var n,a=this.props,s=a.className,i=a.prefixCls,u=a.disabled,r=a.checkedChildren,d=a.unCheckedChildren,k=t(a,["className","prefixCls","disabled","checkedChildren","unCheckedChildren"]),f=this.state.checked,m=l((n={},e(n,s,!!s),e(n,i,!0),e(n,i+"-checked",f),e(n,i+"-disabled",u),n));return c.createElement("span",o({},k,{className:m,tabIndex:"0",ref:"node",onKeyDown:this.handleKeyDown,onClick:u?p:this.toggle,onMouseUp:this.handleMouseUp}),c.createElement("span",{className:i+"-inner"},f?r:d))}});n.exports=i},157:function(n,a,s){"use strict";n.exports=s(156)},197:function(n,a){"use strict";function s(){if(void 0!==t)return t;var n="Webkit Moz O ms Khtml".split(" "),a=document.createElement("div");if(void 0!==a.style.animationName&&(t=!0),void 0!==t)for(var s=0;s<n.length;s++)if(void 0!==a.style[n[s]+"AnimationName"]){t=!0;break}return t=t||!1}Object.defineProperty(a,"__esModule",{value:!0});var t=void 0;a["default"]=s,n.exports=a["default"]},294:function(n,a){},493:function(n,a){},995:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(141),s(140)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"]],"en-US":[["p","A simple loading status."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"basic Usage"},filename:"components/spin/demo/basic.md",id:"components-spin-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],null)}}},996:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(141),s(140)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Spin in a container."]]},meta:{order:2,title:{"zh-CN":"\u5bb9\u5668","en-US":"Inside a container"},filename:"components/spin/demo/inside.md",id:"components-spin-demo-inside"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{className:"example"},c["default"].createElement(p["default"],null))},style:".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0</span>,<span class="token number" >0.05</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},997:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(86),s(85)),p=t(e),o=(s(141),s(140)),c=t(o),l=(s(122),s(121)),i=t(l),u=s(1),r=t(u),d=s(2);t(d);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],"en-US":[["p","Embedding content into ",["code","Spin"]," will alter it into loading state."]]},meta:{order:3,title:{"zh-CN":"\u5361\u7247\u52a0\u8f7d\u4e2d","en-US":"Embedded mode"},filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        Loading state\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=r["default"].createElement(i["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return r["default"].createElement("div",null,r["default"].createElement(c["default"],{spinning:this.state.loading},n),"Loading state\uff1a",r["default"].createElement(p["default"],{checked:this.state.loading,onChange:this.toggle}))}});return r["default"].createElement(n,null)}}},998:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(141),s(140)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e",["strong","\u9875\u9762\u7ea7"],"\u52a0\u8f7d\u3002"]],"en-US":[["p","A small ",["code","Spin"]," use in loading text, default ",["code","Spin"]," use in loading card-level block, and large ",["code","Spin"]," use in loading ",["strong","page"],"."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u5927\u5c0f","en-US":"Size"},filename:"components/spin/demo/size.md",id:"components-spin-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{size:"small"}),c["default"].createElement(p["default"],null),c["default"].createElement(p["default"],{size:"large"}))},style:"\n.ant-spin {\n  margin-right: 16px;\n}\n"}},999:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(141),s(140)),p=t(e),o=(s(122),s(121)),c=t(o),l=s(1),i=t(l),u=s(2);t(u);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"]],"en-US":[["p","Customized description content."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","en-US":"Customized description"},filename:"components/spin/demo/tip.md",id:"components-spin-demo-tip"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >tip</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Loading...<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Alert</span> <span class="token attr-name" >message</span> <span class="token attr-name" >title"</span>\n      <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Further</span> <span class="token attr-name" >details</span> <span class="token attr-name" >about</span> <span class="token attr-name" >the</span> <span class="token attr-name" >context</span> <span class="token attr-name" >of</span> <span class="token attr-name" >this</span> <span class="token attr-name" >alert."</span>\n      <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return i["default"].createElement(p["default"],{tip:"Loading..."},i["default"].createElement(c["default"],{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))}}},1252:function(n,a,s){n.exports={basic:s(995),inside:s(996),nested:s(997),size:s(998),tip:s(999)}}});