(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(o,t,e){"use strict";e(258),e(426);var n=e(137);n.polyfill()},168:function(o,t,e){var content=e(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("82306a4e",content,!0,{sourceMap:!1})},171:function(o,t,e){var content=e(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("3215350c",content,!0,{sourceMap:!1})},172:function(o,t,e){var content=e(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("8f601186",content,!0,{sourceMap:!1})},173:function(o,t,e){var content=e(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("8e63de48",content,!0,{sourceMap:!1})},174:function(o,t,e){var content=e(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("b5a15812",content,!0,{sourceMap:!1})},175:function(o,t,e){var content=e(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("20f4381e",content,!0,{sourceMap:!1})},209:function(o,t,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("b13bd09c",content,!0,{sourceMap:!1})},213:function(o,t,e){"use strict";e(130),e(235),e(237);var n=e(15),r=Object(n.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("header",[e("div",{staticClass:"content"},[e("div",{staticClass:"wrap"},[e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[e("h1",[o._v("\n          kingsjw\n          "),e("p",[o._v("Software Engineer")])])]),o._v(" "),e("nav",{staticClass:"menu"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/profile"}},[o._v("Profile")])],1),o._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/tech"}},[o._v("Tech")])],1),o._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/movie"}},[o._v("Movie")])],1),o._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/travel"}},[o._v("Travel")])],1)])])],1)])])}),[],!1,null,"2764487a",null).exports,d=(e(40),e(57),e(41),{data:function(){return{showNavigation:!1}},computed:{pageDepth:function(){return this.$route&&this.$route.path?this.$route.path.split("/").filter((function(o){return""!==o})):[]},pageName:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[1]:""}},methods:{home:function(){this.showNavigation=!1,this.$router.replace("/"),window.document.body.style.overflowY=""},open:function(){this.showNavigation=!0,window.document.body.style.overflowY="hidden"},close:function(){this.showNavigation=!1,window.document.body.style.overflowY=""},move:function(path){this.showNavigation=!1,this.$router.push("/".concat(path)),window.document.body.style.overflowY=""}}}),l=(e(239),Object(n.a)(d,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"headerWrap"},[e("div",{staticClass:"content"},[o.pageDepth.length<2?e("button",{staticClass:"menu",on:{click:function(t){o.showNavigation?o.close():o.open()}}}):e("button",{staticClass:"menu back",on:{click:function(t){return o.$router.back()}}}),o._v(" "),e("div",{staticClass:"title"},[e("h1",[o._v("kingsjw "+o._s(o.pageName?"- "+o.pageName:""))])])]),o._v(" "),e("transition",{attrs:{name:"slide-left",mode:"out-in"}},[o.showNavigation?e("div",{staticClass:"navWrap"},[e("div",{staticClass:"titleWrap"},[e("span",{staticClass:"title",on:{click:o.home}},[o._v("my topic")])]),o._v(" "),e("nav",{staticClass:"pages"},[e("ul",[e("li",{on:{click:o.close}},[e("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("profile")?"active":"",attrs:{to:"/profile"}},[-1===o.pageName.indexOf("profile")?e("i",{staticClass:"icon profile"}):o._e(),o._v(" "),e("span",{staticClass:"name"},[o._v("Profile")])])],1),o._v(" "),e("li",{on:{click:o.close}},[e("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("tech")?"active":"",attrs:{to:"/tech"}},[-1===o.pageName.indexOf("tech")?e("i",{staticClass:"icon tech"}):o._e(),o._v(" "),e("span",{staticClass:"name"},[o._v("Tech")])])],1),o._v(" "),e("li",{on:{click:o.close}},[e("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("movie")?"active":"",attrs:{to:"/movie"}},[-1===o.pageName.indexOf("movie")?e("i",{staticClass:"icon movie"}):o._e(),o._v(" "),e("span",{staticClass:"name"},[o._v("Movie")])])],1),o._v(" "),e("li",{on:{click:o.close}},[e("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("travel")?"active":"",attrs:{to:"/travel"}},[-1===o.pageName.indexOf("travel")?e("i",{staticClass:"icon travel"}):o._e(),o._v(" "),e("span",{staticClass:"name"},[o._v("Travel")])])],1)])])]):o._e()]),o._v(" "),e("transition",{attrs:{name:"fade"}},[o.showNavigation?e("div",{staticClass:"mask",on:{click:o.close}}):o._e()])],1)}),[],!1,null,"4a8fc2cd",null).exports),c=(e(247),{components:{HeaderWeb:r,HeaderMobile:l,Footer:Object(n.a)({},(function(){var o=this,t=o.$createElement;o._self._c;return o._m(0)}),[function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("footer",[e("div",{staticClass:"container"},[e("p",{staticClass:"siteFooterCopyright"},[o._v("\n      Copyright © 2019 All Right "),e("em",[o._v("서재우")])]),o._v(" "),e("p",{staticClass:"siteFooterContact"},[o._v("\n      kingsjw7@gmail.com .\n      "),e("a",{attrs:{href:"https://github.com/kingsjw",target:"_blank"}},[o._v("GitHub")]),o._v(" .\n      "),e("a",{attrs:{href:"https://kingsjw.github.io/blog/",target:"_blank"}},[o._v("Blog")]),o._v(" .\n      "),e("a",{attrs:{href:"https://github.com/kingsjw/blog",target:"_blank"}},[o._v("Repository")])])])])}],!1,null,"563cdc49",null).exports},data:function(){return{scrollDown:!1,scrollDownTop:!1,scrollWeb:!1,timeout:"",isMobile:!1,isMounted:!1}},methods:{bodyScroll:function(){var o=window.pageYOffset||document.documentElement.scrollTop;this.lastScroll<o?(this.scrollDown=!0,this.scrollDownTop=o>=30):(this.scrollDown=!1,this.scrollDownTop=!1),o<=0?(this.scrollDown=!1,this.scrollDownTop=!1,this.scrollWeb=!1):this.scrollWeb=!0,o+window.outerHeight>document.body.clientHeight-50&&(this.scrollDown=!1),this.lastScroll=o}},mounted:function(){window.addEventListener("scroll",this.bodyScroll),this.isMobile=!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)),this.$store.commit("device/changeDevice",this.isMobile),this.isMounted=!0}}),m=(e(249),Object(n.a)(c,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"pageWrap",class:{scrollDown:o.scrollDown,scrollDownTop:o.scrollDownTop,scrollWeb:o.scrollWeb}},[o.isMounted?e("div",[o.$store.state.device.isMobile?e("HeaderMobile"):e("HeaderWeb"),o._v(" "),e("div",{staticClass:"contentWrap"},[e("nuxt")],1),o._v(" "),e("Footer")],1):o._e()])}),[],!1,null,null,null));t.a=m.exports},214:function(o,t,e){var content=e(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("2c0d6170",content,!0,{sourceMap:!1})},217:function(o,t,e){o.exports=e(218)},224:function(o,t,e){var n=e(26)(!1);n.push([o.i,"",""]),n.locals={headerHeight:"80",headerMobileHeight:"110"},o.exports=n},225:function(o,t,e){"use strict";e(168)},226:function(o,t,e){var n=e(26),r=e(169),d=e(227),l=n(!1),c=r(d);l.push([o.i,"[data-v-70c34964]:export{headerHeight:80;headerMobileHeight:110}.errorPostView .wrap[data-v-70c34964]{display:flex;justify-content:center;align-items:center;flex-flow:column}.errorPostView .wrap .pepe[data-v-70c34964]{width:350px;height:350px;border-radius:50%;background-image:url("+c+");background-repeat:no-repeat;background-position:50%;background-size:280px;background-color:transparent}.errorPostView .wrap .message[data-v-70c34964]{font-size:16px;text-align:center;line-height:2em}.errorPostView .wrap .message .title[data-v-70c34964]{font-weight:700;font-size:2em}.errorPostView .wrap .back[data-v-70c34964]{cursor:pointer;margin-top:10px;text-decoration:underline}",""]),o.exports=l},227:function(o,t,e){o.exports=e.p+"img/pepe.deb7f0d.png"},230:function(o,t,e){var n=e(26)(!1);n.push([o.i,'.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:#24292f;background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-size:16px;line-height:32px;word-break:keep-all;word-wrap:break-word}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:" ";display:inline-block;background-color:currentColor;-webkit-mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>\');mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>\')}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:#0969da;text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:600}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:600;padding-bottom:.3em;font-size:2em;border-bottom:1px solid #d8dee4}.markdown-body mark{background-color:#fff8c5;color:#24292f}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;box-sizing:content-box;background-color:#fff}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em 40px}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:transparent;height:.25em;padding:0;margin:24px 0;background-color:#d0d7de;border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body ::-moz-placeholder{color:#6e7781;opacity:1}.markdown-body :-ms-input-placeholder{color:#6e7781;opacity:1}.markdown-body ::placeholder{color:#6e7781;opacity:1}.markdown-body hr:after,.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{clear:both}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;overflow:auto}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body details:not([open])>:not(summary){display:none!important}.markdown-body [role=button]:focus,.markdown-body a:focus,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=radio]:focus{outline:2px solid #0969da;outline-offset:-2px;box-shadow:none}.markdown-body [role=button]:focus:not(.focus-visible),.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body a:focus:not(.focus-visible),.markdown-body a:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(.focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(.focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible){outline:1px solid transparent}.markdown-body [role=button].focus-visible,.markdown-body [role=button]:focus-visible,.markdown-body a.focus-visible,.markdown-body a:focus-visible,.markdown-body input[type=checkbox].focus-visible,.markdown-body input[type=checkbox]:focus-visible,.markdown-body input[type=radio].focus-visible,.markdown-body input[type=radio]:focus-visible{outline:2px solid #0969da;outline-offset:-2px;box-shadow:none}.markdown-body a:not([class]).focus-visible,.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=checkbox].focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible,.markdown-body input[type=radio].focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible{outline-offset:0}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;color:#24292f;vertical-align:middle;background-color:#f6f8fa;border:1px solid rgba(175,184,193,.2);border-radius:6px;box-shadow:inset 0 -1px 0 rgba(175,184,193,.2)}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.markdown-body h2{font-weight:600;padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid #d8dee4}.markdown-body h3{font-weight:600;font-size:1.25em}.markdown-body h4{font-weight:600;font-size:1em}.markdown-body h5{font-weight:600;font-size:.875em}.markdown-body h6{font-weight:600;font-size:.85em;color:#57606a}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:#57606a;border-left:.25em solid #d0d7de}.markdown-body ol,.markdown-body ul{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code,.markdown-body pre,.markdown-body samp,.markdown-body tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;appearance:none}.markdown-body:after,.markdown-body:before{display:table;content:""}.markdown-body:after{clear:both}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:#cf222e}.markdown-body .anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body blockquote,.markdown-body details,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#24292f;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 code,.markdown-body h1 tt,.markdown-body h2 code,.markdown-body h2 tt,.markdown-body h3 code,.markdown-body h3 tt,.markdown-body h4 code,.markdown-body h4 tt,.markdown-body h5 code,.markdown-body h5 tt,.markdown-body h6 code,.markdown-body h6 tt{padding:0 .2em;font-size:inherit}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{padding-bottom:0;border-bottom:0}.markdown-body ol.no-list,.markdown-body ul.no-list{padding:0;list-style-type:none}.markdown-body ol[type=a]{list-style-type:lower-alpha}.markdown-body ol[type=A]{list-style-type:upper-alpha}.markdown-body ol[type=i]{list-style-type:lower-roman}.markdown-body ol[type=I]{list-style-type:upper-roman}.markdown-body div>ol:not([type]),.markdown-body ol[type="1"]{list-style-type:decimal}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:600}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body table th{font-weight:600}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #d0d7de}.markdown-body table tr{background-color:#fff;border-top:1px solid #d8dee4}.markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #d0d7de}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:#24292f}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:rgba(175,184,193,.2);border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f6f8fa;border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px 8px 9px;text-align:right;background:#fff;border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:600;background:#f6f8fa;border-top:0}.markdown-body [data-footnote-ref]:before{content:"["}.markdown-body [data-footnote-ref]:after{content:"]"}.markdown-body .footnotes{font-size:12px;color:#57606a;border-top:1px solid #d0d7de}.markdown-body .footnotes ol{padding-left:16px}.markdown-body .footnotes ol ul{display:inline-block;padding-left:16px;margin-top:16px}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:-8px;right:-8px;bottom:-8px;left:-24px;pointer-events:none;content:"";border:2px solid #0969da;border-radius:6px}.markdown-body .footnotes li:target{color:#24292f}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .pl-c{color:#6e7781}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0550ae}.markdown-body .pl-e,.markdown-body .pl-en{color:#8250df}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#24292f}.markdown-body .pl-ent{color:#116329}.markdown-body .pl-k{color:#cf222e}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#0a3069}.markdown-body .pl-smw,.markdown-body .pl-v{color:#953800}.markdown-body .pl-bu{color:#82071e}.markdown-body .pl-ii{color:#f6f8fa;background-color:#82071e}.markdown-body .pl-c2{color:#f6f8fa;background-color:#cf222e}.markdown-body .pl-sr .pl-cce{font-weight:700;color:#116329}.markdown-body .pl-ml{color:#3b2300}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:#0550ae}.markdown-body .pl-mi{font-style:italic;color:#24292f}.markdown-body .pl-mb{font-weight:700;color:#24292f}.markdown-body .pl-md{color:#82071e;background-color:#ffebe9}.markdown-body .pl-mi1{color:#116329;background-color:#dafbe1}.markdown-body .pl-mc{color:#953800;background-color:#ffd8b5}.markdown-body .pl-mi2{color:#eaeef2;background-color:#0550ae}.markdown-body .pl-mdr{font-weight:700;color:#8250df}.markdown-body .pl-ba{color:#57606a}.markdown-body .pl-sg{color:#8c959f}.markdown-body .pl-corl{text-decoration:underline;color:#0a3069}.markdown-body g-emoji{display:inline-block;min-width:1ch;font-family:"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1em;font-style:normal!important;font-weight:400;line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:400}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:4px}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}[dir=rtl] .markdown-body .contains-task-list .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list{position:relative}.markdown-body .contains-task-list:hover .task-list-item-convert-container,.markdown-body .contains-task-list[focus-within] .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body .contains-task-list:focus-within .task-list-item-convert-container,.markdown-body .contains-task-list:hover .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}',""]),o.exports=n},231:function(o,t,e){var content=e(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(27).default)("66f1fac8",content,!0,{sourceMap:!1})},232:function(o,t,e){var n=e(26)(!1);n.push([o.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;border:0;background:transparent;cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),o.exports=n},235:function(o,t,e){"use strict";e(171)},236:function(o,t,e){var n=e(26)(!1);n.push([o.i,".scrollWeb header{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}",""]),n.locals={headerHeight:"80",headerMobileHeight:"110"},o.exports=n},237:function(o,t,e){"use strict";e(172)},238:function(o,t,e){var n=e(26)(!1);n.push([o.i,"[data-v-2764487a]:export{headerHeight:80;headerMobileHeight:110}a[data-v-2764487a]{color:inherit;text-decoration:none}header[data-v-2764487a]{width:100%;height:80px}@media (min-width:0px) and (max-width:767px){header[data-v-2764487a]{height:110px;padding:14px 0}}header .content[data-v-2764487a]{width:100%;height:80px;border-bottom:1px solid #f2f2f2;background-color:#fff;display:flex;align-items:center;position:fixed;top:0;z-index:1}@media (min-width:768px) and (max-width:1023px){header .content[data-v-2764487a]{padding:0 14px}}@media (min-width:0px) and (max-width:767px){header .content[data-v-2764487a]{height:110px;padding:14px 0}}header .content .wrap[data-v-2764487a]{width:100%;max-width:1120px;display:flex;justify-content:space-between;align-items:center;margin:0 auto}@media (min-width:0px) and (max-width:767px){header .content .wrap[data-v-2764487a]{height:auto;flex-direction:column}}header .content .wrap h1[data-v-2764487a]{font-size:inherit;margin:0}header .content .wrap .logo[data-v-2764487a]{font-weight:700;font-size:22px;cursor:pointer}header .content .wrap .logo p[data-v-2764487a]{margin:2px 0 0;line-height:normal;font-size:10px;font-weight:400;color:#aaa}@media (min-width:0px) and (max-width:767px){header .content .wrap .menu[data-v-2764487a]{margin-top:20px}}header .content .wrap .menu ul[data-v-2764487a]{display:flex;align-items:center}header .content .wrap .menu ul li[data-v-2764487a]{font-size:16px;margin-left:27px;list-style:none}header .content .wrap .menu ul li[data-v-2764487a]:first-of-type{margin-left:0}header .content .wrap .menu ul li>a[data-v-2764487a]{font-weight:800;white-space:nowrap;height:36px;color:inherit;text-decoration:none}header .content .wrap .menu ul li>a.nuxt-link-active[data-v-2764487a],header .content .wrap .menu ul li>a[data-v-2764487a]:hover{color:#816bff}",""]),o.exports=n},239:function(o,t,e){"use strict";e(173)},240:function(o,t,e){var n=e(26),r=e(169),d=e(241),l=e(242),c=e(243),m=e(244),h=e(245),w=e(246),y=n(!1),f=r(d),k=r(l),v=r(c),x=r(m),M=r(h),I=r(w);y.push([o.i,"[data-v-4a8fc2cd]:export{headerHeight:80;headerMobileHeight:110}.headerWrap[data-v-4a8fc2cd]{width:100%;min-height:60px;z-index:1}.headerWrap .content[data-v-4a8fc2cd]{padding:9px 16px;width:100%;background-color:#816bff;position:fixed;display:flex;align-items:center;z-index:2}.headerWrap .content .title[data-v-4a8fc2cd]{font-size:20px;vertical-align:top;margin-left:20px;color:#fff}.headerWrap .content .title h1[data-v-4a8fc2cd]{font-size:inherit;font-weight:400;margin:0}.headerWrap .content .menu[data-v-4a8fc2cd]{width:40px;height:40px;border-radius:50%;padding:0 8px;background-size:24px;background-position:50%;background-repeat:no-repeat;background-image:url("+f+");position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.headerWrap .content .menu.back[data-v-4a8fc2cd]{background-size:32px;background-image:url("+k+")}.headerWrap .content .menu[data-v-4a8fc2cd]:hover{background-color:#816bff}.headerWrap .navWrap[data-v-4a8fc2cd]{width:230px;max-width:calc(100vw - 125px);position:fixed;top:0;left:0;bottom:0;background-color:#fff;z-index:2;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.headerWrap .navWrap .titleWrap[data-v-4a8fc2cd]{width:100%;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 16px}.headerWrap .navWrap .titleWrap .title[data-v-4a8fc2cd]{font-size:20px}.headerWrap .navWrap .pages[data-v-4a8fc2cd]{padding:8px 0}.headerWrap .navWrap .pages .list[data-v-4a8fc2cd]{display:flex;padding:4px 16px;min-height:48px;align-items:center;color:inherit;text-decoration:none}.headerWrap .navWrap .pages .list.active[data-v-4a8fc2cd]{background-color:rgba(129,107,255,.4);color:#816bff;font-size:18px;font-weight:700}.headerWrap .navWrap .pages .list .icon[data-v-4a8fc2cd]{width:24px;height:24px;background-size:24px;background-position:50%;background-repeat:no-repeat;margin-right:32px}.headerWrap .navWrap .pages .list .icon.profile[data-v-4a8fc2cd]{background-image:url("+v+")}.headerWrap .navWrap .pages .list .icon.tech[data-v-4a8fc2cd]{background-image:url("+x+")}.headerWrap .navWrap .pages .list .icon.movie[data-v-4a8fc2cd]{background-image:url("+M+")}.headerWrap .navWrap .pages .list .icon.travel[data-v-4a8fc2cd]{background-image:url("+I+")}.headerWrap .navWrap .pages .list .name[data-v-4a8fc2cd]{font-weight:400;font-size:14px;line-height:1.25em}.headerWrap .mask[data-v-4a8fc2cd]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.7)}",""]),o.exports=y},241:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="},242:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgogIDxwYXRoIGQ9Ik0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyeiIvPgogIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="},243:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0zIDV2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjExIDAtMiAuOS0yIDJ6bTEyIDRjMCAxLjY2LTEuMzQgMy0zIDNzLTMtMS4zNC0zLTMgMS4zNC0zIDMtMyAzIDEuMzQgMyAzem0tOSA4YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxSDZ2LTF6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},244:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40eiIvPjwvc3ZnPg=="},245:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},246:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPgogIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMjAgNmgtM1Y0YzAtMS4xMS0uODktMi0yLTJIOWMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0yIC44OS0yIDJ2MTFjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOGMwLTEuMTEtLjg5LTItMi0yek05IDRoNnYySDlWNHptMTEgMTVINHYtMmgxNnYyem0wLTVINFY4aDN2MmgyVjhoNnYyaDJWOGgzdjZ6Ii8+Cjwvc3ZnPgo="},247:function(o,t,e){"use strict";e(174)},248:function(o,t,e){var n=e(26)(!1);n.push([o.i,"[data-v-563cdc49]:export{headerHeight:80;headerMobileHeight:110}footer[data-v-563cdc49]{width:100%;padding:32px 0;display:flex;justify-content:center;align-items:center;font-size:12px;background-color:#fff;color:#000}footer .container[data-v-563cdc49]{width:100%;max-width:1120px}@media (min-width:0px) and (max-width:767px){footer .container[data-v-563cdc49]{padding:0 20px}}@media (min-width:768px) and (max-width:1023px){footer .container[data-v-563cdc49]{padding:0 20px}}footer .container .siteFooterCopyright[data-v-563cdc49]{text-transform:uppercase}footer .container .siteFooterContact[data-v-563cdc49]{margin-top:10px}footer .container .siteFooterContact li[data-v-563cdc49]{list-style:none}footer .container .siteFooterContact a[data-v-563cdc49]{color:inherit;text-decoration:none}",""]),o.exports=n},249:function(o,t,e){"use strict";e(175)},250:function(o,t,e){var n=e(26)(!1);n.push([o.i,"h2{font-size:inherit}*,:after,:before{box-sizing:border-box;margin:0;padding:0}input:focus{outline:none}.slide-bottom-fade-enter-active,.slide-bottom-fade-leave-active,.slide-left-enter-active,.slide-left-leave-active{transition:transform .4s cubic-bezier(.25,.8,.25,1);will-change:transform,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.slide-left-enter,.slide-left-leave-to{transform:translate3D(-100%,0,0)}.fade-enter-active,.fade-leave-active{transition:all .3s ease}.fade-enter,.fade-leave-to,.slide-bottom-fade-enter,.slide-bottom-fade-leave-to{opacity:0}.slide-bottom-fade-enter{transform:translateY(100%)}.slide-bottom-fade-leave{transform:translateY(-100%)}",""]),n.locals={headerHeight:"80",headerMobileHeight:"110"},o.exports=n},251:function(o,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return n})),e.d(t,"mutations",(function(){return r}));var n=function(){return{isMobile:!1}},r={changeDevice:function(o,t){o.isMobile=t}}},54:function(o,t,e){"use strict";e(57),e(41);var n={props:["error"],computed:{pageName:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[1]:""},isPageView:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[2]:""}},methods:{back:function(){this.$router.replace("/".concat(this.pageName))}}},r=(e(225),e(15)),d=Object(r.a)(n,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"errorPostView"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"pepe"}),o._v(" "),e("div",{staticClass:"message"},[e("div",{staticClass:"title"},[o._v("???: ERROR "+o._s(o.error.message))]),o._v(" "),o.isPageView&&"view"===o.isPageView?e("div",[o._v("\n        이미 삭제되었거나 존재하지 않는 글\n      ")]):o._e()]),o._v(" "),e("div",{staticClass:"back",on:{click:o.back}},[o._v("목록으로 돌아가기")])])])}),[],!1,null,"70c34964",null).exports,l={name:"nuxt-error",props:{error:{type:Object,default:function(){}}},computed:{errorPage:function(){return d}}},c=Object(r.a)(l,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"nuxt-error"},[e(o.errorPage,{tag:"component",attrs:{error:o.error}})],1)}),[],!1,null,null,null);t.a=c.exports}},[[217,6,1,7]]]);