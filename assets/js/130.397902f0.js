(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{653:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("贪心这个词在我们的生活中随处可见，贪心像是大自然万物特有的，而人将这发展到了极致。得到了想要的东西，还想要更好的东西，永无止境，所以又有一个词：知足常乐。只不过现在所有你想要的都摆在了你的面前，你要怎么选择呢？")])]),t._v(" "),a("h2",{attrs:{id:"什么是贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是贪心算法"}},[t._v("#")]),t._v(" 什么是贪心算法")]),t._v(" "),a("p",[t._v("贪心算法顾名思义，就是一个字“贪”，就像小时候吃饭一样，满桌子的菜，总是先吃你最爱吃的，然后爱吃的吃完了怎么办呢，在吃你第二爱吃的······直到肚子里吃饱。这个是一个生活中很有意思的一个场景。简单的说，贪心算法，对于一个特定的问题，选择一定的策略，按照这个策略一步步的执行下去，直到得到结果。这个策略一定是最优的，但是得到的结果却不一定是最优的，所以贪心算法有它的局限性。")]),t._v(" "),a("h2",{attrs:{id:"贪心算法适用的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法适用的范围"}},[t._v("#")]),t._v(" 贪心算法适用的范围")]),t._v(" "),a("p",[t._v("适用范围我就用举例子的方式说吧，有一个小偷，背着一个背包去商店抢东西，每个物品都包括两部分，价值和重量，问这个这个小偷在背包不破的情况下最多可以拿几件物品。这个是背包问题的一个转化，以前让求最大的价值，现在让求最多可以装多少个物品。那么我现在就把所有的物品按照重量的顺序从小到大排序，每次都选择一个重量最轻的，然后判断这个物品的重量是否大于我背包剩余的容量，如果不大于，那么我就可以放进去，直到放不进去为止，很显然，这样下来我求的结果一定是最优的。\n还有就是买东西给钱的问题，首先就假设不管要给多少钱，我的钱数一定都是够的，要不然就会出现所有的钱数加起来也不够给的情况。现在去超时买东西，花了"),a("code",[t._v("123")]),t._v("块钱，现在你的身上有"),a("code",[t._v("100")]),t._v("、"),a("code",[t._v("50")]),t._v("、"),a("code",[t._v("20")]),t._v("、"),a("code",[t._v("10")]),t._v("、"),a("code",[t._v("5")]),t._v("、"),a("code",[t._v("2")]),t._v("、"),a("code",[t._v("1")]),t._v("这几种纸币，假设每种纸币个数都无限，现在你想要用最少的纸币数来给钱，那么该怎么给呢？肯定是每次从身上掏出一样小于所付钱数的最大面值，按照这样的策略，每次也会得到最优的结果，就算是纸币数有限也是可以的，因为我每次选择的都是最优的啊。")]),t._v(" "),a("h2",{attrs:{id:"数据结构中的贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构中的贪心算法"}},[t._v("#")]),t._v(" 数据结构中的贪心算法")]),t._v(" "),a("p",[t._v("数据结构中的最优前缀码、最小生成树和单源最短路径等问题都是贪心算法的典型应用")]),t._v(" "),a("h3",{attrs:{id:"最优前缀码就是哈夫曼编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最优前缀码就是哈夫曼编码"}},[t._v("#")]),t._v(" 最优前缀码就是哈夫曼编码")]),t._v(" "),a("p",[t._v("这个算法我也是在电脑上自己动手实现过，整段代码也是将近有两百行，实现了可以将一篇文章按照每个字符出现的频率编码，而且有了这个编码结果也可以实现解码的。为了方便我是以英文做的，貌似汉语弄得意义不大，英文总共就有26，加上一些标点符号也没有几个。下面就把大致框架放在下面吧")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存每个节点的内容，存储")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lchild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" rchild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" car"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectMin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每次都选择两个最小的")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Huffmantree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包括了这棵树的初始化，以及中间值的一些转化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//哈夫曼编码的核心过程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HuffmanCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个是解码的过程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将所建立的哈弗慢树它的字符用01来表示,用递归寻找树的叶子节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//x的下标代表26个英文字母")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//t是代表有多少种不同的字符")]),t._v("\n    Node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("huffmantree"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Huffmantree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//哈夫曼建树过程")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//深度遍历算出他们的路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HuffmanCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("huffmantree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);