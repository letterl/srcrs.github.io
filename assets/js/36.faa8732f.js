(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{563:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("最近又在折腾这个博客，虽然快考试了，但是一直也不知道要复习什么，无聊就瞎折腾吧。博客的源文件中的文件中有大量的空白，虽然是一些空格，但是也会占据空间，影响加载速度，本次目的就是为了提高加载速度。")])]),t._v(" "),a("h2",{attrs:{id:"为什么我要去掉评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么我要去掉评论"}},[t._v("#")]),t._v(" 为什么我要去掉评论")]),t._v(" "),a("p",[t._v("第一个方面就是要提高加载速度，因为评论功能使用的是第三方的，当页面加载的时候，评论功能也是要加载的，在"),a("code",[t._v("tools.pingdom.com")]),t._v("中测试网站速度的时候，发现评论占据了大量的时间。第二个方面就是，博客中基本上就是我自己看，也很少有其他的人看，所以评论在那里就非常的尴尬，去掉影响也不是很大。")]),t._v(" "),a("h2",{attrs:{id:"gulp压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp压缩"}},[t._v("#")]),t._v(" gulp压缩")]),t._v(" "),a("p",[a("code",[t._v("gulp")]),t._v("是基于流的自动化构建工具，里面包含了众多的插件，使用哪个只要安装就可以使用，最后只要要创建一定的规则就可以使用这些插件。")]),t._v(" "),a("h3",{attrs:{id:"首先我们要先安装的就是gulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先我们要先安装的就是gulp"}},[t._v("#")]),t._v(" 首先我们要先安装的就是gulp")]),t._v(" "),a("p",[t._v("执行"),a("code",[t._v("npm install gulp")])]),t._v(" "),a("h3",{attrs:{id:"然后依次执行以下命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后依次执行以下命令"}},[t._v("#")]),t._v(" 然后依次执行以下命令")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("npm install gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("htmlclean//在不改变html结构下缩小\nnpm install gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("htmlmin//压缩html\nnpm install gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("clean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("css//压缩css\nnpm install gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("uglify//压缩js\nnpm install gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("imagemin//压缩图片\n")])])]),a("p",[t._v("网上很多用gulp压缩css插件都用的是"),a("code",[t._v("gulp-minify-css")]),t._v(",这在"),a("code",[t._v("gulp4.0")]),t._v("已经被放弃，所以上使用上面的css压缩插件")]),t._v(" "),a("h3",{attrs:{id:"然后再在博客根目录中创建gulpfile-js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后再在博客根目录中创建gulpfile-js文件"}},[t._v("#")]),t._v(" 然后再在博客根目录中创建gulpfile.js文件")]),t._v(" "),a("p",[t._v("这是文件中的内容")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("var gulp = require('gulp');\nvar cleancss = require('gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("clean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("css');\nvar uglify = require('gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("uglify');\nvar htmlmin = require('gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("htmlmin');\nvar htmlclean = require('gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("htmlclean');\nvar imagemin = require('gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("imagemin');\n\n// 压缩 public 目录 html文件\ngulp.task('minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("html'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function() "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return gulp.src('./public/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/*.html')")]),t._v("\n        .pipe(htmlclean())\n        .pipe(htmlmin("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("removeComments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minifyJS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minifyCSS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("minifyURLs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("))\n        .pipe(gulp.dest('./public'))\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n// 压缩 public 目录 css文件\ngulp.task('minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("css'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function() "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return gulp.src('./public/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/*.css')")]),t._v("\n        .pipe(cleancss("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("compatibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ie8'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("))\n        .pipe(gulp.dest('./public'));\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n// 压缩 public/js 目录 js文件\ngulp.task('minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("js'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function() "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return gulp.src('./public/js/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/*.js')")]),t._v("\n        .pipe(uglify())\n        .pipe(gulp.dest('./public/js'));\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n// 压缩图片\ngulp.task('minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("images'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function() "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return gulp.src('./public/images/"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/*.*')")]),t._v("\n        .pipe(imagemin(\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("imagemin.gifsicle("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'optimizationLevel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        imagemin.jpegtran("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'progressive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        imagemin.optipng("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'optimizationLevel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        imagemin.svgo()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'verbose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("))\n        .pipe(gulp.dest('./public/images'))\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(");\n// 默认任务\ngulp.task('default'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gulp.parallel(\n    'minify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("html'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minify-css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minify-js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minify-images'")]),t._v("\n));\n")])])]),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("顺序不能错了")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("hexo clean\nhexo g\ngulp\n")])])]),a("h2",{attrs:{id:"instantclick是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantclick是什么"}},[t._v("#")]),t._v(" InstantClick是什么")]),t._v(" "),a("p",[a("code",[t._v("InstantClick")]),t._v("在网上都被别人叫做神器，可以假装网站运行的速度很快，当你的鼠标移动到你要点的那个按钮，后台就会自动开启预浏览模式，也就是当鼠标浮动在按钮之上时，你要点击的事件在后台就已经开始运行了(也许都已经运行完成了)，当你再点击的时候速度当然会提升很多。\n具体原理是这样，但是我在使用的时候也没真真切切感觉速度有多么质的飞跃，没啥感觉。\n再练习一下流程图吧。")]),t._v(" "),a("p",[a("svg",{staticStyle:{cursor:"pointer","max-width":"100%","max-height":"391px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"191px",viewBox:"-0.5 -0.5 191 391",content:'<mxfile host="www.draw.io" modified="2020-01-29T09:48:43.573Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36" etag="bvGo0qIWNHkTRzYQmLeP" version="12.6.1" type="device"><diagram id="jJ8nvPJ-jUUiLhiCvK4h" name="第 1 页">1VjbjtowEP0aP3ZFYnJ7TCD0oq1UiYftPnoTN0mVxMg4kPTra8fOHSgsZdmVEMocjy8zc+bgAOAiKz9TtIm/kxCnQJ+FJYBLoOtzaPNvAVQSMBxDAhFNQglpHbBO/mAFzhRaJCHeDhwZISlLNkMwIHmOAzbAEKVkP3T7RdLhrhsU4QmwDlA6RZ+SkMUStXWrw7/gJIqbnTXTkSMZapxVJNsYhWTfg6AP4IISwuRTVi5wKnLX5EXOWx0ZbQ9Gcc7OmeB4xrfga5m9VH5uePbT7vF5/klMEMvsUFqoiNcMUaaOzKomD3wtnnKsvDFluDx6Dq2NjrMCkwwzWnEXNcFSBFCEaNKz72VXQXEvsVBhSNUzatftQuYPKuoLMgD1aawhp4AyCWUxiUiOUr9DvaCgOyxW1bhBSZGHtTXjVjfhkZCNcvmNGasUuVHBCIdilqVqFJcJ+ymmPxjKeu6NLEu1cm1UjZGHrqA3N3OSY4msEhF7PS6DEpGcLhMPnBQ0wKc4Ag/Xk+IUsWQ33OBQfdTUHyThW7c80JrKKyJAc1RizsMIMzVrVOX2GK8vvAxrQH3gW8DWgecA3wC2BTxvwo2u2Fqb5avaYZQFzbhzP+jzaVrGSRjQPye9zqiRrgUGaZqQ8d/MU1tLJpxRyzPSfhlreY+hquewEWzcHie1Yz0M5c3Uh6I88jdH1Vc/l10B5QH+L/GNA8Q3gWcA16+J7wLXFg/Oon4wgb0ANu8JBzh67TMHni3cbt4cGnxv3WF+xO4w3kl3aFC/rD006w79AbVJST/YjSBI0XabBINLwQmmvepSYJ1LPudKpl3Xr9YBrXOAqwm5E4K2BK7eiN4M+DbwluLj12LIdY+rn7sCzUvLW2pdK2x30zr7HWmdcS7drLPzfmOtG0uXc5nU6eZbXAWcSYn9PJzK361e/uDtOM7N7t1a5qv7gwL6fwE=</diagram></mxfile>',onclick:"(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&lightbox=1&edit=_blank');}}})(this);"}},[a("defs"),a("g",[a("ellipse",{attrs:{cx:"95",cy:"15",rx:"40",ry:"15",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"94.5",y:"19.5"}},[t._v("Start")])]),a("path",{attrs:{d:"M 40 160 Q 40 250 70 250 Q 100 250 100 340",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"}}),a("rect",{attrs:{x:"0",y:"130",width:"80",height:"30",rx:"4.5",ry:"4.5",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"39.5",y:"149.5"}},[t._v("点击")])]),a("path",{attrs:{d:"M 77.5 28.49 Q 77.5 42 58.75 80 Q 40 118 40 123.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"}}),a("path",{attrs:{d:"M 40 128.88 L 36.5 121.88 L 40 123.63 L 43.5 121.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"}}),a("rect",{attrs:{x:"110",y:"130",width:"80",height:"30",rx:"4.5",ry:"4.5",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"149.5",y:"149.5"}},[t._v("浮动在按钮上")])]),a("path",{attrs:{d:"M 112.5 28.49 Q 112.5 42 131.25 80 Q 150 118 150 123.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"}}),a("path",{attrs:{d:"M 150 128.88 L 146.5 121.88 L 150 123.63 L 153.5 121.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"}}),a("path",{attrs:{d:"M 150 290 Q 150 325 122.5 325 Q 95 325 95 353.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"}}),a("path",{attrs:{d:"M 95 358.88 L 91.5 351.88 L 95 353.63 L 98.5 351.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"}}),a("rect",{attrs:{x:"110",y:"260",width:"80",height:"30",rx:"4.5",ry:"4.5",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"149.5",y:"279.5"}},[t._v("页面加载完毕")])]),a("path",{attrs:{d:"M 150 160 Q 150 172 150 210 Q 150 248 150 253.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"}}),a("path",{attrs:{d:"M 150 258.88 L 146.5 251.88 L 150 253.63 L 153.5 251.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"}}),a("ellipse",{attrs:{cx:"95",cy:"375",rx:"40",ry:"15",fill:"#ffffff",stroke:"#000000","pointer-events":"all"}}),a("g",{attrs:{fill:"#000000","font-family":"Helvetica","text-anchor":"middle","font-size":"12px"}},[a("text",{attrs:{x:"94.5",y:"379.5"}},[t._v("End")])])])])]),t._v(" "),a("h2",{attrs:{id:"instantclick实现方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantclick实现方法"}},[t._v("#")]),t._v(" InstantClick实现方法")]),t._v(" "),a("h3",{attrs:{id:"首先需要下载创建instantclick-min-js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先需要下载创建instantclick-min-js文件"}},[t._v("#")]),t._v(" 首先需要下载创建instantclick.min.js文件")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://instantclick.io/v3.1.0/instantclick.min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("instantclick.min.js"),a("OutboundLink")],1),t._v(",直接点击就可以跳转到文件页面，直接点击右键另存为就可以了，或者创建"),a("code",[t._v("instantclick.min.js")]),t._v("文件，把链接中的内容复制下来放到里面也可以。\n把新创建的文件放在"),a("code",[t._v("themes/next/source/js/src")]),t._v("中。")]),t._v(" "),a("h3",{attrs:{id:"如何使用instantclick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用instantclick"}},[t._v("#")]),t._v(" 如何使用InstantClick")]),t._v(" "),a("p",[t._v("路径"),a("code",[t._v("themes/layout/_layout.swig")]),t._v("，打开"),a("code",[t._v("_layout.swig")]),t._v("在最下面的"),a("code",[t._v("body")]),t._v("(这里怕乱码就不用标签写了)上面，添加以下代码")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v('    <script src="/js/src/instantclick.min.js" data'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("instant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("</script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n    <script data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("instant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("InstantClick.init(true);</script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("//里面是true就是默认所有都不预加载\n    </body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("//不包括\n    </html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("//不包括，只为了好找\n")])])]),a("p",[t._v("这时候，我们就已经完成了，部署到github上，看看效果吧。\nhexo博客似乎不支持，我原先以为成功了，原来一直都没有，true原来是所有都不预加载。\n备方案：\n直接在原位置引用这段就可以了")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v('<script src="//instant.page/1.2.2" type="module" integrity="sha384'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('2xV8M5griQmzyiY3CDqh1dn4z3llDVqZDqzjzcY+jCBCk/a5fXJmuZ/40JJAPeoU"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("</script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);