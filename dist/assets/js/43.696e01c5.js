(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{349:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("gitHub Actions以前只是知道可以做持续集成，可以部署静态网站。我就突发奇想，既然是服务器，那么有没有可能，连接到这个服务器，比如可以免费撸一个服务器玩，没想到还真可以。")])]),t._v(" "),a("h2",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mxschmitt/action-tmate",target:"_blank",rel:"noopener noreferrer"}},[t._v("mxschmitt/action-tmate"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("会导致不能进行到下一个步骤，但是没有尝试。打不开正在构建的流程，看不到操作日志，所以查不到ssh连接。")]),t._v(" "),a("p",[t._v("For example")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CI\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v1   //这段应该没什么用，拷贝代码，但是代码库是空的。\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup tmate session\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mxschmitt/action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tmate@v1\n")])])]),a("h2",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mxschmitt/action-tmate",target:"_blank",rel:"noopener noreferrer"}},[t._v("mxschmitt/action-tmate"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("也是通过tmate连接，解决了方案一突出连接后不能进行下一步骤。默认添加了我15分钟自动断开，但是可通过"),a("code",[t._v("touch /tmp/keepalive")]),t._v("命令解除。")]),t._v(" "),a("p",[t._v("但是这个会有一个问题，连接成功之后，大概几分钟不进行操作，将会失去控制。这个正在构建的操作日志，很多时候也会打不开，难道是今天太多了？")]),t._v(" "),a("p",[t._v("For example")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ubuntu\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Ubuntu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup Debug Session\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" csexton/debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n")])])]),a("h2",{attrs:{id:"方案三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/P3TERX/debugger-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("P3TERX/debugger-action"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这个是基于方案二改进的，超时事件设置为30分钟，同时也修改了操作日志大部分时间不能显示的问题。")]),t._v(" "),a("p",[t._v("For example")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ubuntu\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Ubuntu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSH connection to Actions\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" p3terx/debugger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建一个工作流")])]),t._v(" "),a("li",[a("p",[t._v("然后把例子代码复制到"),a("code",[t._v(".github/workflows/main.yml")]),t._v("中")])]),t._v(" "),a("li",[a("p",[t._v("Start commit提交更改")])]),t._v(" "),a("li",[a("p",[t._v("查看操作日志，提取ssh并连接")])])]),t._v(" "),a("p",[t._v("此时应可以看到,实际上又两个这段代码，找到")]),t._v(" "),a("p",[a("code",[t._v("ssh DG62jMpSsns6MNDszJUkzFzLG@sfo2.tmate.io")]),t._v("复制到终端就可以连接上了。我用git终端连接上了。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("win10 cmd终端我测试是不可以的")])]),t._v(" "),a("li",[a("p",[t._v("Xshell 6 终端我测试也是不可以的")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("To connect to this session copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("paste the following into a terminal or browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\nssh DG62jMpSsns6MNDszJUkzFzLG@sfo2.tmate.io\n\nhttps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//tmate.io/t/DG62jMpSsns6MNDszJUkzFzLG\n\nAfter connecting you can run 'touch /tmp/keepalive' to disable the 30m timeout\n")])])]),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("好像进来了也没啥能干的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);