(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{604:function(a,n,t){"use strict";t.r(n);var e=t(3),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("在写博客中发现了一个问题，发现很多问题的解决思路都使用都是用文字来表达的，但是文字的缺点就是太抽象，不容易理解，所以就想着用别的方法来改善表达的方式，这时候我想到了流程图，而强大的"),t("code",[a._v("Markdown")]),a._v("也可以做流程图。")])]),a._v(" "),t("p",[a._v("此种方法只针对next主题用户，其他主题没用过，不提供方法。")]),a._v(" "),t("h1",{attrs:{id:"首先需要安装安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先需要安装安装插件"}},[a._v("#")]),a._v(" 首先需要安装安装插件")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("npm install hexo-filter-mermaid-diagrams\n")])])]),t("p",[a._v("在你的博客目录下，用git执行这条命令。\n然后就只需要在"),t("code",[a._v("themes/next/_config.yml")]),a._v("主题的配置文件中将")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mermaid:\n  enable: true\n")])])]),t("p",[t("code",[a._v("mermaid")]),a._v("开启即可")]),a._v(" "),t("h2",{attrs:{id:"在markdown使用mermaid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在markdown使用mermaid"}},[a._v("#")]),a._v(" 在markdown使用mermaid")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n    graph 流程图的方向\n    流程图的内容\n···\n使用的时候，需要将点换成反引号，下面都同理\n")])])]),t("h2",{attrs:{id:"流程图的方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程图的方向"}},[a._v("#")]),a._v(" 流程图的方向")]),a._v(" "),t("ul",[t("li",[a._v("TB和TD 表示从上到下")]),a._v(" "),t("li",[a._v("BT和DT 表示从下到上")]),a._v(" "),t("li",[a._v("RL 表示从右到左")]),a._v(" "),t("li",[a._v("LR 表示从左到右")])]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n   graph LR\n   A --\x3e B\n···\n")])])]),t("p",[t("strong",[a._v("效果")])]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    graph LR\n    A --\x3e B\n")])])]),t("h2",{attrs:{id:"流程图的基本图形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程图的基本图形"}},[a._v("#")]),a._v(" 流程图的基本图形")]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n   graph LR\n   id[带文本的矩形]\n   id4(带文本的不对称的矩形)\n   id3>带文本的不对称的矩形]\n   id1{带文本的菱形}\n   id2((带文本的圆形))\n···\n")])])]),t("p",[t("strong",[a._v("效果")])]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("   graph LR\n   id[带文本的矩形]\n   id4(带文本的不对称的矩形)\n   id3>带文本的不对称的矩形]\n   id1{带文本的菱形}\n   id2((带文本的圆形))\n")])])]),t("h2",{attrs:{id:"节点之间连接线的种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点之间连接线的种类"}},[a._v("#")]),a._v(" 节点之间连接线的种类")]),a._v(" "),t("ul",[t("li",[a._v("A --\x3e B  A带箭头指向B")]),a._v(" "),t("li",[a._v("A --- B  A不带箭头指向B")]),a._v(" "),t("li",[a._v("A -.- B  A用虚线指向B")]),a._v(" "),t("li",[a._v("A -.-> B  A带箭头虚线指向B")]),a._v(" "),t("li",[a._v("A ==> B  A用加粗的箭头指向B")]),a._v(" "),t("li",[a._v("A -- 描述 --- B  A不带箭头指向B并在中间加上文字描述")]),a._v(" "),t("li",[a._v("A -- 描述 --\x3e B  A带箭头指向B并在中间加上文字描述")]),a._v(" "),t("li",[a._v("A -. 描述 .-> B  A用带箭头的虚线指向B并在中间加上文字描述")]),a._v(" "),t("li",[a._v("A == 描述 ==> B  A用加粗的箭头指向B并在中间加上文字描述")])]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n   graph LR\n   A[A] --\x3e B[B] \n    A1[A] --- B1[B] \n    A4[A] -.- B4[B] \n    A5[A] -.-> B5[B] \n    A7[A] ==> B7[B] \n    A2[A] -- 描述 --- B2[B]\n    A3[A] -- 描述 --\x3e B3[B] \n    A6[A] -. 描述 .-> B6[B] \n    A8[A] == 描述 ==> B8[B]\n···\n")])])]),t("p",[t("strong",[a._v("效果")])]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("   graph LR\n   A[A] --\x3e B[B] \n    A1[A] --- B1[B] \n    A4[A] -.- B4[B] \n    A5[A] -.-> B5[B] \n    A7[A] ==> B7[B] \n    A2[A] -- 描述 --- B2[B]\n    A3[A] -- 描述 --\x3e B3[B] \n    A6[A] -. 描述 .-> B6[B] \n    A8[A] == 描述 ==> B8[B]\n")])])]),t("h2",{attrs:{id:"子流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子流程图"}},[a._v("#")]),a._v(" 子流程图")]),a._v(" "),t("p",[t("strong",[a._v("使用规范")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···subgraph title\n     graph 流程图方向\n   end\n···\n")])])]),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n   graph TB\n    c1--\x3ea2\n    subgraph one\n    a1--\x3ea2\n    end\n    subgraph two\n    b1--\x3eb2\n    end\n    subgraph three\n    c1--\x3ec2\n    end\n···\n")])])]),t("p",[t("strong",[a._v("效果")])]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("   graph TB\n    c1--\x3ea2\n    subgraph one\n    a1--\x3ea2\n    end\n    subgraph two\n    b1--\x3eb2\n    end\n    subgraph three\n    c1--\x3ec2\n    end\n")])])]),t("h2",{attrs:{id:"写法实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写法实例"}},[a._v("#")]),a._v(" 写法实例")]),a._v(" "),t("p",[a._v("绘制一个流程图，找出A、B、C三个数中最大的一个数")]),a._v(" "),t("p",[t("strong",[a._v("示例")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("···mermaid\n   graph LR\n    start[开始] --\x3e input[输入A,B,C]\n    input --\x3e conditionA{A是否大于B}\n    conditionA -- YES --\x3e conditionC{A是否大于C}\n    conditionA -- NO --\x3e conditionB{B是否大于C}\n    conditionC -- YES --\x3e printA[输出A]\n    conditionC -- NO --\x3e printC[输出C]\n    conditionB -- YES --\x3e printB[输出B]\n    conditionB -- NO --\x3e printC[输出C]\n    printA --\x3e stop[结束]\n    printC --\x3e stop\n    printB --\x3e stop\n···\n")])])]),t("p",[t("strong",[a._v("效果")])]),a._v(" "),t("div",{staticClass:"language-mermaid extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("   graph LR\n    start[开始] --\x3e input[输入A,B,C]\n    input --\x3e conditionA{A是否大于B}\n    conditionA -- YES --\x3e conditionC{A是否大于C}\n    conditionA -- NO --\x3e conditionB{B是否大于C}\n    conditionC -- YES --\x3e printA[输出A]\n    conditionC -- NO --\x3e printC[输出C]\n    conditionB -- YES --\x3e printB[输出B]\n    conditionB -- NO --\x3e printC[输出C]\n    printA --\x3e stop[结束]\n    printC --\x3e stop\n    printB --\x3e stop\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);