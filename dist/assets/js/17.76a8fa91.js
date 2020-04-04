(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{371:function(t,s,v){"use strict";v.r(s);var _=v(3),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"问题1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题1"}},[t._v("#")]),t._v(" 问题1")]),t._v(" "),v("ul",[v("li",[t._v("选项内容的末尾是字母时，会导致后一个选项生成失败。\n"),v("ul",[v("li",[t._v("13，14，31，44，54，56，81，107")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("预解决方法：每个选项不都是"),v("code",[t._v("A.")]),t._v("或者"),v("code",[t._v("A、")]),t._v("或者别的什么，那么可以把它们的规则添加到正则公式中，就可以解决这个问题了。对于题目也可以把这样类似的添加上去，不可以中用点就可以代替。"),v("code",[t._v("1.")]),t._v("和\n"),v("code",[t._v("1、")]),t._v("或者其他都应支持。")])]),t._v(" "),v("h2",{attrs:{id:"问题2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题2"}},[t._v("#")]),t._v(" 问题2")]),t._v(" "),v("ul",[v("li",[t._v("最后一个选项末尾时数字时，会导致下一个题目的ID错误，有可能会造成ID重复；会使本选项缺少数字。\n"),v("ul",[v("li",[t._v("30，49，72，84，96，102，103")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("预解决方法：在D选项的末尾添加一个空格。不对，并不知道D选项的具体范围，所以找不到D选项的末尾。\n可以这样，会匹配到一个数字点非数字的表达式，虽然不知道D的范围，但是可以找到点具体的位置，只需要知道上一个题号占几位，判断加一之后是否会增加位数，以此来往前推题号，但是这也遇到了一个问题，就是当题号无序的时候，或者变化的不规则，增长速度不一样就会出问题了，例如一下从88变到了103。其实可以规避这样的问题，就是在他们之间取一个最小值，但是当两种事件同时发生的时候，就又会出问题了。暂时先这样解决吧。\n前提是必须要题目必须要有序。！！！不可缺少9，99，999，9999题号的题，升序就行了。")])]),t._v(" "),v("h2",{attrs:{id:"问题3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题3"}},[t._v("#")]),t._v(" 问题3")]),t._v(" "),v("ul",[v("li",[t._v("当题目中包含"),v("code",[t._v("数字点非数字的时候会出错")]),t._v("，例如"),v("code",[t._v("202.119.2.X")]),t._v("中的"),v("code",[t._v("2.X")]),t._v("是符合我的正则表达式的，很尴尬，现在解决不了这样的问题。\n"),v("ul",[v("li",[t._v("259")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);