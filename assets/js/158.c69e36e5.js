(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{681:function(t,s,a){"use strict";a.r(s);var n=a(3),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题意简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题意简述"}},[t._v("#")]),t._v(" 题意简述")]),t._v(" "),a("p",[t._v("青蛙过河，是一道很好的动态规划题，刚开始看的时候，发现有点读不清题意，看了好久才明白这道题是要干什么，怎么做。")]),t._v(" "),a("p",[t._v("有一条河将石墩A和石墩B隔开，河上有C区和D区，C区里有k个荷叶，D区里有h个石墩，有编号1至n的青蛙在石墩A上，按照一定的规则跳到石墩B上，问最多有多少只青蛙过河。\n规则如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("石墩可以承受任意多只青蛙，荷叶只能承受一只青蛙；")])]),t._v(" "),a("li",[a("p",[t._v("青蛙可以：A→B(表示可以从A跳到B，下同)，A→C，A→D，C→B，D→B，D→C，C→D；")])]),t._v(" "),a("li",[a("p",[t._v("当一个石墩上有多只青蛙时，则上面的青蛙只能跳到比它大1号的青蛙上面。")])])]),t._v(" "),a("h2",{attrs:{id:"分析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析过程"}},[t._v("#")]),t._v(" 分析过程")]),t._v(" "),a("p",[t._v("开始忘了A也是石墩，就不知道青蛙是按照什么样的顺序过河，最后看到了A也是个石墩，所以青蛙也必须的按照由1到n的顺序过河，即按照编号从小到大。然后我就按照规则"),a("code",[t._v("2")]),t._v("画了一个他们之间可以转移的关系图，试着一步步去走。")]),t._v(" "),a("p",[t._v("用一个二维数组"),a("code",[t._v("f[h][k]")]),t._v("表示在不同的k和h下最多可以过河的青蛙数目，做如下假设分析：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("假设"),a("code",[t._v("h=0,k=0")]),t._v("，那么此时只有"),a("code",[t._v("A→B")]),t._v("这条路径可以走，所以f[0][0]=1;")])]),t._v(" "),a("li",[a("p",[t._v("假设"),a("code",[t._v("h=0,k=1")]),t._v("，那么此时1号青蛙可以站到荷叶上，然后2号到B上，这样就有两个青蛙可以过河，所以f[0][1]=2;")])]),t._v(" "),a("li",[a("p",[t._v("假设"),a("code",[t._v("h=1,k=0")]),t._v("，那么这种和只有一个荷叶的情况是一样的，所以f[1][0]=2;")])]),t._v(" "),a("li",[a("p",[t._v("假设"),a("code",[t._v("h=1，k=1")]),t._v("，那么1号青蛙可以到C的第1个荷叶上，2号可以到D区的第一个石墩上，然后第一个荷叶上的1号青蛙可以到达第一个石墩上，然后三号青蛙就可以到达第一个荷叶上，这样4号青蛙就可以到达B石墩上，所以最后就有四个青蛙可以过河，f[1][1]=4;")])])]),t._v(" "),a("p",[t._v("然后依次的可以假设，但是要注意一个问题，同一个区域的石墩或者荷叶，是默认可以相互跳的，只有知道了这个后面才能够用手算的方式模拟出来。")]),t._v(" "),a("p",[t._v("什么时候可以让青蛙过的最多，那就是尽可能让第一个跳到石墩B上的青蛙编号达到最大。")]),t._v(" "),a("p",[t._v("但是，我也是够笨的，就是这样的列举，也找不到下一步与上一步之间的关系，最后看到了这样的一句话，每次都尽可能大的将第一个石墩上的青蛙数装到最多，然后再将剩余的石墩一个个都尽量装到最多。就是这"),a("code",[t._v("一个个")]),t._v("三个字让我明白了，假如说上一步是"),a("code",[t._v("2")]),t._v("个石墩，那么下一步是"),a("code",[t._v("3")]),t._v("个石墩，当剩余两个石墩上的青蛙数达到最大，可以将这些青蛙都放到这个空的石墩上。然后就又变成两个石墩的问题，可以一步步迭代下去。为什么？当最后一个青蛙只能够往石墩B上走时，这个时候，多出来一个石墩，最后一个青蛙是可以跳到这个石墩上的。")]),t._v(" "),a("p",[t._v("还有一个问题那时候，我没有考虑到，就是当没有石墩时，只有荷叶，那么"),a("code",[t._v("f[0][k]=k+1")]),t._v("。因为最后一个青蛙直接去石墩B上了。")]),t._v(" "),a("p",[t._v("这样这道题就基本已经出来了，最后其实还是可以用一个公式表示出来的，因为下一步都是等于上一步结果的"),a("code",[t._v("2")]),t._v("倍，但是，我用的是dp的方式写的。")]),t._v(" "),a("h2",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//h代表石墩，k代表荷叶")]),t._v("\n    cin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pause"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);