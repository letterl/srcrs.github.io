(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{631:function(t,e,i){"use strict";i.r(e);var s=i(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("流水线执行方式对比的是串行执行方式，串行执行方式比较简单，一个指令执行完下一个指令才可以执行，流水线执行方式有点颠覆我以前的想法。")])]),t._v(" "),i("p",[t._v("首先先来看一道题吧。")]),t._v(" "),i("h2",{attrs:{id:"例题1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#例题1"}},[t._v("#")]),t._v(" 例题1")]),t._v(" "),i("p",[t._v("若每一条指令都可以分解为取指、分析和执行三步。已知取指时间t"),i("sub",[t._v("取指")]),t._v("=4Δt，分析时间t"),i("sub",[t._v("分析")]),t._v("=3Δt，执行时间t"),i("sub",[t._v("执行")]),t._v("=5Δt。如果按串行方式执行，执行完100条指令需要___Δt。如果按照流水方式执行，执行完100条指令需要___Δt。")]),t._v(" "),i("p",[t._v("串行执行方式都不需要多说，执行一条指令需要花12Δt，那么执行100条则需要1200Δt。")]),t._v(" "),i("p",[t._v("那么流水线方式呢？我以前做法就是，第一条指令完成取指，就可以运行第二条指令的取指······，直到运行到第100条指令，取指所需要花的时间为4Δt，每条指令只需要完成取指就行了，只要最后一条指令完成，其他指令一定也会完成的，所以所需要花的时间就是400Δt+3Δt+5Δt=408Δt，但是一看答案却不是这样的，而是507Δt，百思不得其解。")]),t._v(" "),i("p",[t._v("再来好好理一理思路。")]),t._v(" "),i("p",[i("svg",{staticStyle:{cursor:"pointer","max-width":"100%","max-height":"181px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"561px",viewBox:"-0.5 -0.5 561 181",content:'<mxfile host="app.diagrams.net" modified="2020-04-27T14:17:44.477Z" agent="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36" etag="q1IA44bM1bSMJDi5p4dh" version="12.9.12"><diagram id="PQsuAjaLIpzGLL3Y-lxF" name="第 1 页">7V1db6M6EP01fowUvsljk8121VWfutJ9vCLgEGsBZw1pk/vrr51AUoyzYVetTMxUVUsGT0wOPsOZsQnIWeT7RxZtN880wRmyp8keOV+QbVuubSPxO00OJ0sQ1IaUkaRudDG8kP9wbZzW1h1JcNlqWFGaVWTbNsa0KHBctWwRY/St3WxNs3av2yjFHcNLHGVd6z8kqTYna2gHF/s3TNJN07Plz0578qhpXH+SchMl9O2dyVkiZ8EorU5b+X6BMwFeg8vJ7+uVvecDY7io+jgsng5F4cSzX0/fXx7/zZ6flj82k6A+uNco29WfGNl+xt9wXm6jQhx2daix8H/txLHO17SoJusoJxk/pw9IdLs4/vWjfMv3181WGSl+5lFcHsoK58JJbnHVtcQpxdy+I71dGF3RivZuTveHFBe9m+9Wu6La9W4eR0XFz4uAv6fHmrBIgB0VZW+fhFF+bv/QaYOzV1yRWPRWYH7O+zuSioje4v4u/EOlpKDnY5ymq97OOYkZLemaj5rpIeK998cFF+meRP3Pbknycne9uTj2SYkZWQvTcceRAuUxWAkCWP52f+EH30rF/wp5cwt5XxpCcWqeOHXafebZbqWk2YruRRekSE+drChLMJtwc/swgInAxBEyUWYbWnoo/IpmPlr6KFygMHjPO8GxhnZ2i252lJG04Jsxv45iJsCq8oy/tvhmFq1wNj8Sb0Ezyo4ezvT4cxwrWfbOnng4TFzxMSpGf+J3e0J75fj+ufdXzCq8v3odt87qgMsqTHNcsQNvUjs0eqIWVF798u2iTpqL+uadMHFqW1TrofT8vhfJwDdq1fAnCsJSKAizIA51Q2wbD7Fl6cbYMR9jVzfGrvkYB7ox9ozH2J5qxthpiARZM2h10OqQNQMTgYn3wURl1hyi8Jg1z5ZoNjU0a54NK2t2XFXaDBICAhcErg+REDZICGAiMBEK758mIXRXhR3XwLKwhLH2srDjGlgXlkHWXRd2XAMLwzLIugvDjmtgZVgCeQCVYR/SOhCTICahMgxMBCbeExO7aR3P5mboIUDLED1YIrMzM62z/LaI0F8aDj5eQ3DMHPf3oatpct1ZEbxuO0nh67aDFMBuO0gh7LZDN4jd9lGFsdteykB22+1qKOvj2glmPZx+F85uu18PaD0QkkNaj2HYDmodh/stGwNLgaVjZOloZ6Vl7aG/phyC9oCoBlFNh/ZwQHsAS4GlQ9AeY5jOlrXHAOZaZ+bNUHVQ1j7Z2tS3jEZZ+2yrZ+BtkTLK+qdbPQOXwJzhGko92lMtgYGcENQmqE2oRwNLgaXGsXS0c+Gy9tBej/ZUK0NBe0BUg6gG9WhgKbDUOJaOdi5c1h7669Ge4o6JhY3mwY2/xp0J/TVr1W0VpqGsv2atWnhqGMoDqFmrltjcOcrOtI2y/pq1gVOJMsjak/NmOgiSc5D9IPshOQeWAkvNZuloJwZk7aE/OfcVC2zGkJx3zoT25NxXLcLpIwP7XOeKySfd8j3adZ+dAaS97uAb+B07Msr66w6+gV+y4wRtlLXXHXwDv2RHBll/3cHAarAM8gAElqIaPAqBJZ8J/QLrb2/KHJ7AGsNEZmcA6RdYqmr4hw0g0OefOnz0K0flQ0LvHGXXHZhyNPE5ajLI2pWjiU9Sk0HWrxxNfJZaB2XtqlD5NLU7VIUjqaB3BpB2Vah8VNw9qsIxJBXy8BmAKjSwCuNZQ1OFBi7Jk0HWrwoNXJEngzwAVWjgkrwOytpVYUMmo1HWLp3Cv31626Ck00iUtzx8PlE68ZeMCpTP+x5ZtN080wSLFv8D</diagram></mxfile>',onclick:"(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://app.diagrams.net/?client=1&lightbox=1&edit=_blank');}}})(this);"}},[i("defs"),i("g",[i("rect",{attrs:{x:"0",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"15px","margin-left":"35px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[1]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("取指")])])])])]),i("text",{attrs:{x:"35",y:"19",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[1]取指")])],1)]),i("rect",{attrs:{x:"0",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"0",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"0",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"0",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"0",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"70",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"15px","margin-left":"105px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[1]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("分析")])])])])]),i("text",{attrs:{x:"105",y:"19",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[1]分析")])],1)]),i("rect",{attrs:{x:"70",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"45px","margin-left":"105px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[2]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("取指")])])])])]),i("text",{attrs:{x:"105",y:"49",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[2]取指")])],1)]),i("rect",{attrs:{x:"70",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"70",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"70",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"70",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"140",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"15px","margin-left":"175px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[1]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("执行")])])])])]),i("text",{attrs:{x:"175",y:"19",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[1]执行")])],1)]),i("rect",{attrs:{x:"140",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"45px","margin-left":"175px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[2]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("分析")])])])])]),i("text",{attrs:{x:"175",y:"49",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[2]分析")])],1)]),i("rect",{attrs:{x:"140",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"75px","margin-left":"175px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[3]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("取指")])])])])]),i("text",{attrs:{x:"175",y:"79",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[3]取指")])],1)]),i("rect",{attrs:{x:"140",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"140",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"140",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"210",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"210",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"45px","margin-left":"245px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[2]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("执行")])])])])]),i("text",{attrs:{x:"245",y:"49",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[2]执行")])],1)]),i("rect",{attrs:{x:"210",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"75px","margin-left":"245px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[3]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("分析")])])])])]),i("text",{attrs:{x:"245",y:"79",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[3]分析")])],1)]),i("rect",{attrs:{x:"210",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"105px","margin-left":"245px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[t._v("······")])])])]),i("text",{attrs:{x:"245",y:"109",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("······")])],1)]),i("rect",{attrs:{x:"210",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"210",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"280",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"280",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"280",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"75px","margin-left":"315px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif',"font-size":"16px"}},[t._v("t[3]")]),i("sub",{staticStyle:{"box-sizing":"border-box","font-family":', "blinkmacsystemfont" , "segoe ui" , "roboto" , "oxygen" , "ubuntu" , "cantarell" , "fira sans" , "droid sans" , "helvetica neue" , "heiti sc" , "hiragino sans gb" , "microsoft yahei" , "dengxian" , "simsun" , sans-serif'}},[t._v("执行")])])])])]),i("text",{attrs:{x:"315",y:"79",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[3]执行")])],1)]),i("rect",{attrs:{x:"280",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"105px","margin-left":"315px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[t._v("······")])])])]),i("text",{attrs:{x:"315",y:"109",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("······")])],1)]),i("rect",{attrs:{x:"280",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"135px","margin-left":"315px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n-1]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("取指")])])])])]),i("text",{attrs:{x:"315",y:"139",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n-1]取指")])],1)]),i("rect",{attrs:{x:"280",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"350",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"350",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"350",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"350",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"105px","margin-left":"385px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[t._v("······")])])])]),i("text",{attrs:{x:"385",y:"109",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("······")])],1)]),i("rect",{attrs:{x:"350",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"135px","margin-left":"385px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n-1]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("分析")])])])])]),i("text",{attrs:{x:"385",y:"139",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n-1]分析")])],1)]),i("rect",{attrs:{x:"350",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"165px","margin-left":"385px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("取指")])])])])]),i("text",{attrs:{x:"385",y:"169",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n]取指")])],1)]),i("rect",{attrs:{x:"420",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"420",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"420",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"420",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"420",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"135px","margin-left":"455px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n-1]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("执行")])])])])]),i("text",{attrs:{x:"455",y:"139",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n-1]执行")])],1)]),i("rect",{attrs:{x:"420",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"165px","margin-left":"455px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("分析")])])])])]),i("text",{attrs:{x:"455",y:"169",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n]分析")])],1)]),i("rect",{attrs:{x:"490",y:"0",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"490",y:"30",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"490",y:"60",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"490",y:"90",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"490",y:"120",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("rect",{attrs:{x:"490",y:"150",width:"70",height:"30",fill:"#d5e8d4",stroke:"#82b366","pointer-events":"all"}}),i("g",{attrs:{transform:"translate(-0.5 -0.5)"}},[i("switch",[i("foreignObject",{staticStyle:{overflow:"visible","text-align":"left"},attrs:{"pointer-events":"none",width:"100%",height:"100%",requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}},[i("div",{staticStyle:{display:"flex","align-items":"unsafe center","justify-content":"unsafe center",width:"1px",height:"1px","padding-top":"165px","margin-left":"525px"},attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},[i("div",{staticStyle:{"box-sizing":"border-box","font-size":"0","text-align":"center"}},[i("div",{staticStyle:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"#000000","line-height":"1.2","pointer-events":"all",border:"1px solid #000000","white-space":"nowrap"}},[i("span",{staticStyle:{"font-size":"16px"}},[t._v("t[n]")]),i("sub",{staticStyle:{"box-sizing":"border-box"}},[t._v("执行")])])])])]),i("text",{attrs:{x:"525",y:"169",fill:"#000000","font-family":"Helvetica","font-size":"12px","text-anchor":"middle"}},[t._v("t[n]执行")])],1)])]),i("switch",[i("g",{attrs:{requiredFeatures:"http://www.w3.org/TR/SVG11/feature#Extensibility"}}),i("a",{attrs:{transform:"translate(0,-5)","xlink:href":"https://desk.draw.io/support/solutions/articles/16000042487",target:"_blank"}},[i("text",{attrs:{"text-anchor":"middle","font-size":"10px",x:"50%",y:"100%"}},[t._v("Viewer does not support full SVG 1.1")])])])])]),t._v(" "),i("p",[t._v("由这个表格可以看清楚，t[1]完成取指，接着t[2]，一直到t[n]，可以看到最后执行的指令就是t[n]，只要t[n]完成，所有的指令都会完成，好像我的想法没问题啊。")]),t._v(" "),i("p",[t._v("但是这次真的是想错了，每一列是作为一个整体完成的，也就是说，这一列的指令可以并行，完成的时间以这一列指令中，消耗时间最长的为准。起初看到类似这个图我仍不明白是什么意思，最后看到是每一列的指令步骤都要完成才能进入下一列，才知道这个公式咋来的。")]),t._v(" "),i("p",[t._v("这时候就会由一个公式：")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("T=t"),i("sub",[t._v("取指")]),t._v("+max(t"),i("sub",[t._v("分析")]),t._v(",t"),i("sub",[t._v("取指")]),t._v(")+(n-2)*max(t"),i("sub",[t._v("取指")]),t._v(",t"),i("sub",[t._v("分析")]),t._v(",t"),i("sub",[t._v("执行")]),t._v(")+max(t"),i("sub",[t._v("执行")]),t._v(",t"),i("sub",[t._v("分析")]),t._v(")+t"),i("sub",[t._v("执行")])])]),t._v(" "),i("p",[t._v("那么就按照这个公式来算吧。")]),t._v(" "),i("p",[t._v("4Δt+4Δt+5Δt*98+5Δt+5Δt = 508Δt")]),t._v(" "),i("p",[t._v("不对啊，这个算出来的也不是507Δt啊，难道还有一些地方没有注意到？怀着疑问，我又从网上找到了一道类似的题。")]),t._v(" "),i("h2",{attrs:{id:"例题2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#例题2"}},[t._v("#")]),t._v(" 例题2")]),t._v(" "),i("p",[t._v("若每一条指令都可以分解为取指、分析和执行三步。已知取指时间t"),i("sub",[t._v("取指")]),t._v("=5Δt,分析时间t"),i("sub",[t._v("分析")]),t._v("=2Δt，执行时间t"),i("sub",[t._v("执行")]),t._v("=5Δt。如果按顺序方式从头到尾执行完500条指令需___Δt。如果按照[执行]k、[分析]k+1 、[取指]k+2重叠的流水线方式执行指令，从头到尾执行完500条指令需___Δt。")]),t._v(" "),i("p",[t._v("这两道题可以说是同一道题，只是改变了以下数字。")]),t._v(" "),i("p",[t._v("串行执行需要时间500*12Δt=6000Δt")]),t._v(" "),i("p",[t._v("流水线执行需要时间5Δt+5Δt+498*5Δt+5Δt+5Δt=2510Δt")]),t._v(" "),i("p",[t._v("这个是没有问题的，可以和答案对的上。证明这个想法是对的。")]),t._v(" "),i("p",[t._v("我又从网上找啊找，找到了原题，但是我很失望，答案都是507Δt，更可笑是百度文库，明明计算结果是508Δt，但是答案却选一个507Δt。这个是百度文库的这道原题地址"),i("a",{attrs:{href:"https://wk.baidu.com/view/00a305bdf424ccbff121dd36a32d7375a417c687",target:"_blank",rel:"noopener noreferrer"}},[t._v("点我"),i("OutboundLink")],1),t._v("。")]),t._v(" "),i("p",[t._v("所以，书上再一次出错了，可怕的是竟然还有解释和运算步骤，不知道咋算的。这本书虽然是清华出版的，但是质量确实不高，什么缺图的，答案是错的，符号打印错的，不算多，也不算少，尤其是涉及的比较广，有的知识点还是头一次见，书上怎么说就怎么遵守，总体上对的肯定比错的几率大很多。")]),t._v(" "),i("h2",{attrs:{id:"再论"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#再论"}},[t._v("#")]),t._v(" 再论")]),t._v(" "),i("p",[t._v("我发现这两道例题不一样了。这道题，书上答案应该没有错。")]),t._v(" "),i("p",[t._v("好心累啊，搞不懂那多出来的一个周期是怎么来的。第一个参考链接还画有图，解释它们之间的区别，看不懂。要我自己想的就是，每条指令取指完之后就不用管了，再加上最后一条指令的分析和执行的时间，就是执行的总时间，这样算如果例题2不是特殊的重叠，算的时间也对，可能以前能算对也只是个巧合，把公式记下来算了。")]),t._v(" "),i("p",[t._v("这两道题是两种不同的流水线执行方式。")]),t._v(" "),i("p",[t._v("例题1，是最省时的执行方式。")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("T=t"),i("sub",[t._v("取指")]),t._v("+t"),i("sub",[t._v("分析")]),t._v("+(n-1)*max(t"),i("sub",[t._v("取指")]),t._v(",t"),i("sub",[t._v("分析")]),t._v(",t"),i("sub",[t._v("执行")]),t._v(")+t"),i("sub",[t._v("执行")])])]),t._v(" "),i("p",[t._v("例题2，步骤重叠。")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("T=t"),i("sub",[t._v("取指")]),t._v("+max(t"),i("sub",[t._v("分析")]),t._v(",t"),i("sub",[t._v("取指")]),t._v(")+(n-2)*max(t"),i("sub",[t._v("取指")]),t._v(",t"),i("sub",[t._v("分析")]),t._v(",t"),i("sub",[t._v("执行")]),t._v(")+max(t"),i("sub",[t._v("执行")]),t._v(",t"),i("sub",[t._v("分析")]),t._v(")+t"),i("sub",[t._v("执行")])])]),t._v(" "),i("h2",{attrs:{id:"参考链接"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://wenku.baidu.com/view/d1930a49cc7931b764ce1547.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("流水线指令执行"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_6c9d637501013ckf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("流水线指令运行的总时间计算"),i("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);