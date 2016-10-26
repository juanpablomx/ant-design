webpackJsonp([45,197],{1065:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(274),a(273)),p=t(e),o=a(1),l=t(o),c=a(2);t(c);n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u7684\u65f6\u95f4\u8f74\u3002"]],"en-US":[["p","Basic timeline."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"Basic"},filename:"components/timeline/demo/basic.md",id:"components-timeline-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Create a services site <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Technical testing <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Network problems being solved <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(p["default"],null,l["default"].createElement(p["default"].Item,null,"Create a services site 2015-09-01"),l["default"].createElement(p["default"].Item,null,"Solve initial network problems 2015-09-01"),l["default"].createElement(p["default"].Item,null,"Technical testing 2015-09-01"),l["default"].createElement(p["default"].Item,null,"Network problems being solved 2015-09-01"))}}},1066:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(274),a(273)),p=t(e),o=a(1),l=t(o),c=a(2);t(c);n.exports={content:{"zh-CN":[["p","\u5706\u5708\u989c\u8272\uff0c\u7eff\u8272\u7528\u4e8e\u5df2\u5b8c\u6210\u3001\u6210\u529f\u72b6\u6001\uff0c\u7ea2\u8272\u8868\u793a\u544a\u8b66\u6216\u9519\u8bef\u72b6\u6001\uff0c\u84dd\u8272\u53ef\u8868\u793a\u6b63\u5728\u8fdb\u884c\u6216\u5176\u4ed6\u9ed8\u8ba4\u72b6\u6001\u3002"]],"en-US":[["p","Set the color of circles. ",["code","green"]," means completed or success status, ",["code","red"]," means warning or error, and ",["code","blue"]," means ongoing or other default status."]]},meta:{order:1,title:{"zh-CN":"\u5706\u5708\u989c\u8272","en-US":"Color"},filename:"components/timeline/demo/color.md",id:"components-timeline-demo-color"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Create a services site <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Create a services site <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>red<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Technical testing <span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Technical testing <span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Technical testing <span class="token number" >3</span> <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(p["default"],null,l["default"].createElement(p["default"].Item,{color:"green"},"Create a services site 2015-09-01"),l["default"].createElement(p["default"].Item,{color:"green"},"Create a services site 2015-09-01"),l["default"].createElement(p["default"].Item,{color:"red"},l["default"].createElement("p",null,"Solve initial network problems 1"),l["default"].createElement("p",null,"Solve initial network problems 2"),l["default"].createElement("p",null,"Solve initial network problems 3 2015-09-01")),l["default"].createElement(p["default"].Item,null,l["default"].createElement("p",null,"Technical testing 1"),l["default"].createElement("p",null,"Technical testing 2"),l["default"].createElement("p",null,"Technical testing 3 2015-09-01")))}}},1067:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(17),a(12)),p=t(e),o=(a(274),a(273)),l=t(o),c=a(1),u=t(c),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u56fe\u6807\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u5143\u7d20\u3002"]],"en-US":[["p","Set a node as an icon or other custom element."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u65f6\u95f4\u8f74\u70b9","en-US":"Custom"},filename:"components/timeline/demo/custom.md",id:"components-timeline-demo-custom"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Create a services site <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span> <span class="token attr-name" >dot</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Icon type<span class="token operator" >=</span><span class="token string" >"clock-circle-o"</span> style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span> color<span class="token operator" >=</span><span class="token string" >"red"</span><span class="token operator" >></span>Technical testing <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Network problems being solved <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(l["default"],null,u["default"].createElement(l["default"].Item,null,"Create a services site 2015-09-01"),u["default"].createElement(l["default"].Item,null,"Solve initial network problems 2015-09-01"),u["default"].createElement(l["default"].Item,{dot:u["default"].createElement(p["default"],{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),u["default"].createElement(l["default"].Item,null,"Network problems being solved 2015-09-01"))}}},1068:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(274),a(273)),p=t(e),o=a(1),l=t(o),c=a(2);t(c);n.exports={content:{"zh-CN":[["p","\u5728\u6700\u540e\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u5e7d\u7075\u8282\u70b9\uff0c\u8868\u793a\u65f6\u95f4\u8f74\u672a\u5b8c\u6210\uff0c\u8fd8\u5728\u8bb0\u5f55\u8fc7\u7a0b\u4e2d\u3002\u53ef\u4ee5\u6307\u5b9a ",["code","pending={true}"]," \u6216\u8005 ",["code","pending={\u4e00\u4e2a React \u5143\u7d20}"],"\u3002"]],"en-US":[["p","When the timeline is incomplete and ongoing, put a ghost node at last. set ",["code","pending={true}"]," or ",["code","pending={a React Element}"],"\u3002"]]},meta:{order:2,title:{"zh-CN":"\u6700\u540e\u4e00\u4e2a","en-US":"Last node"},filename:"components/timeline/demo/pending.md",id:"components-timeline-demo-pending"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Timeline <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline</span> <span class="token attr-name" >pending={&lt;a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>See more<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Create a services site <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Solve initial network problems <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Timeline.Item</span><span class="token punctuation" >></span></span>Technical testing <span class="token number" >2015</span><span class="token operator" >-</span><span class="token number" >09</span><span class="token operator" >-</span><span class="token number" >01</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Timeline</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(p["default"],{pending:l["default"].createElement("a",{href:"#"},"See more")},l["default"].createElement(p["default"].Item,null,"Create a services site 2015-09-01"),l["default"].createElement(p["default"].Item,null,"Solve initial network problems 2015-09-01"),l["default"].createElement(p["default"].Item,null,"Technical testing 2015-09-01"))}}},1259:function(n,s,a){n.exports={basic:a(1065),color:a(1066),custom:a(1067),pending:a(1068)}}});