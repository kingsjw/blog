(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(o,e,t){"use strict";t(258),t(426);var n=t(137);n.polyfill()},168:function(o,e,t){var content=t(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("82306a4e",content,!0,{sourceMap:!1})},171:function(o,e,t){var content=t(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("2e76a57a",content,!0,{sourceMap:!1})},172:function(o,e,t){var content=t(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("856af652",content,!0,{sourceMap:!1})},173:function(o,e,t){var content=t(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("0a650fc8",content,!0,{sourceMap:!1})},174:function(o,e,t){var content=t(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("20f4381e",content,!0,{sourceMap:!1})},175:function(o,e,t){var content=t(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("fb725686",content,!0,{sourceMap:!1})},209:function(o,e,t){var content=t(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("b13bd09c",content,!0,{sourceMap:!1})},213:function(o,e,t){"use strict";t(130),t(235),t(237);var n=t(19),header=Object(n.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"headerWrap"},[o.$store.state.device.isMobile?o._e():t("header",[t("div",{staticClass:"wrap"},[t("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[t("h1",[o._v("\n          kingsjw\n          "),t("p",[o._v("Front-end Engineer")])])]),o._v(" "),t("nav",{staticClass:"menu"},[t("ul",[t("li",[t("nuxt-link",{class:o.$route.path&&o.$route.path.indexOf("profile")>=0?"active":"",attrs:{to:"/profile"}},[o._v("Profile")])],1),o._v(" "),t("li",[t("nuxt-link",{class:o.$route.path&&o.$route.path.indexOf("tech")>=0?"active":"",attrs:{to:"/tech"}},[o._v("Tech")])],1),o._v(" "),t("li",[t("nuxt-link",{class:o.$route.path&&o.$route.path.indexOf("movie")>=0?"active":"",attrs:{to:"/movie"}},[o._v("Movie")])],1),o._v(" "),t("li",[t("nuxt-link",{class:o.$route.path&&o.$route.path.indexOf("travel")>=0?"active":"",attrs:{to:"/travel"}},[o._v("Travel")])],1)])])],1)])])}),[],!1,null,"52ca41e8",null).exports,r=(t(40),t(69),t(41),{data:function(){return{showNavigation:!1}},computed:{pageDepth:function(){return this.$route&&this.$route.path?this.$route.path.split("/").filter((function(o){return""!==o})):[]},pageName:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[1]:""}},methods:{home:function(){this.showNavigation=!1,this.$router.replace("/"),window.document.body.style.overflowY=""},open:function(){this.showNavigation=!0,window.document.body.style.overflowY="hidden"},close:function(){this.showNavigation=!1,window.document.body.style.overflowY=""},move:function(path){this.showNavigation=!1,this.$router.push("/".concat(path)),window.document.body.style.overflowY=""}}}),d=(t(239),{components:{HeaderWeb:header,HeaderMobile:Object(n.a)(r,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"headerWrap"},[t("div",{staticClass:"content"},[o.pageDepth.length<2?t("button",{staticClass:"menu",on:{click:function(e){o.showNavigation?o.close():o.open()}}}):t("button",{staticClass:"menu back",on:{click:function(e){return o.$router.back()}}}),o._v(" "),t("div",{staticClass:"title"},[t("h1",[o._v("kingsjw "+o._s(o.pageName?"- "+o.pageName:""))])])]),o._v(" "),t("transition",{attrs:{name:"slide-left",mode:"out-in"}},[o.showNavigation?t("div",{staticClass:"navWrap"},[t("div",{staticClass:"titleWrap"},[t("span",{staticClass:"title",on:{click:o.home}},[o._v("my topic")])]),o._v(" "),t("nav",{staticClass:"pages"},[t("ul",[t("li",{on:{click:o.close}},[t("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("profile")?"active":"",attrs:{to:"/profile"}},[-1===o.pageName.indexOf("profile")?t("i",{staticClass:"icon profile"}):o._e(),o._v(" "),t("span",{staticClass:"name"},[o._v("Profile")])])],1),o._v(" "),t("li",{on:{click:o.close}},[t("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("tech")?"active":"",attrs:{to:"/tech"}},[-1===o.pageName.indexOf("tech")?t("i",{staticClass:"icon tech"}):o._e(),o._v(" "),t("span",{staticClass:"name"},[o._v("Tech")])])],1),o._v(" "),t("li",{on:{click:o.close}},[t("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("movie")?"active":"",attrs:{to:"/movie"}},[-1===o.pageName.indexOf("movie")?t("i",{staticClass:"icon movie"}):o._e(),o._v(" "),t("span",{staticClass:"name"},[o._v("Movie")])])],1),o._v(" "),t("li",{on:{click:o.close}},[t("nuxt-link",{staticClass:"list",class:-1!==o.pageName.indexOf("travel")?"active":"",attrs:{to:"/travel"}},[-1===o.pageName.indexOf("travel")?t("i",{staticClass:"icon travel"}):o._e(),o._v(" "),t("span",{staticClass:"name"},[o._v("Travel")])])],1)])])]):o._e()]),o._v(" "),t("transition",{attrs:{name:"fade"}},[o.showNavigation?t("div",{staticClass:"mask",on:{click:o.close}}):o._e()])],1)}),[],!1,null,"367ad226",null).exports},data:function(){return{scrollDown:!1,scrollDownTop:!1,scrollWeb:!1,timeout:"",isMobile:!1}},methods:{bodyScroll:function(){var o=window.pageYOffset||document.documentElement.scrollTop;this.lastScroll<o?(this.scrollDown=!0,this.scrollDownTop=o>=30):(this.scrollDown=!1,this.scrollDownTop=!1),o<=0?(this.scrollDown=!1,this.scrollDownTop=!1,this.scrollWeb=!1):this.scrollWeb=!0,o+window.outerHeight>document.body.clientHeight-50&&(this.scrollDown=!1),this.lastScroll=o},resizeWindow:function(){var o=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){window.innerWidth<=768!==o.$store.state.device.isMobile&&(o.$store.commit("device/changeDevice",!o.$store.state.device.isMobile),o.timeout="")}),300)}},mounted:function(){var o=this;window.addEventListener("scroll",this.bodyScroll),this.isMobile=!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)),this.$store.commit("device/changeDevice",this.isMobile),this.$nextTick((function(){window.addEventListener("resize",o.resizeWindow)}))}}),l=(t(247),t(249),Object(n.a)(d,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"pageWrap",class:{scrollDown:o.scrollDown,scrollDownTop:o.scrollDownTop,scrollWeb:o.scrollWeb}},[o.$store.state.device.isMobile?t("HeaderMobile"):t("HeaderWeb"),o._v(" "),t("nuxt")],1)}),[],!1,null,null,null));e.a=l.exports},214:function(o,e,t){var content=t(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("2c0d6170",content,!0,{sourceMap:!1})},217:function(o,e,t){o.exports=t(218)},224:function(o,e,t){var n=t(26)(!1);n.push([o.i,"",""]),n.locals={headerHeight:"80"},o.exports=n},225:function(o,e,t){"use strict";t(168)},226:function(o,e,t){var n=t(26),r=t(169),d=t(227),l=n(!1),c=r(d);l.push([o.i,"[data-v-70c34964]:export{headerHeight:80}.errorPostView .wrap[data-v-70c34964]{display:flex;justify-content:center;align-items:center;flex-flow:column}.errorPostView .wrap .pepe[data-v-70c34964]{width:350px;height:350px;border-radius:50%;background-image:url("+c+");background-repeat:no-repeat;background-position:50%;background-size:280px;background-color:transparent}.errorPostView .wrap .message[data-v-70c34964]{font-size:16px;text-align:center;line-height:2em}.errorPostView .wrap .message .title[data-v-70c34964]{font-weight:700;font-size:2em}.errorPostView .wrap .back[data-v-70c34964]{cursor:pointer;margin-top:10px;text-decoration:underline}",""]),o.exports=l},227:function(o,e,t){o.exports=t.p+"img/pepe.deb7f0d.png"},230:function(o,e,t){var n=t(26)(!1);n.push([o.i,'@font-face{font-family:octicons-link;src:url(data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA==) format("woff")}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px}.markdown-body .anchor:focus{outline:none}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;line-height:1.5;word-wrap:break-word}.markdown-body .pl-c{color:#6a737d}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#005cc5}.markdown-body .pl-e,.markdown-body .pl-en{color:#6f42c1}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:#24292e}.markdown-body .pl-ent{color:#22863a}.markdown-body .pl-k{color:#d73a49}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:#032f62}.markdown-body .pl-smw,.markdown-body .pl-v{color:#e36209}.markdown-body .pl-bu{color:#b31d28}.markdown-body .pl-ii{background-color:#b31d28;color:#fafbfc}.markdown-body .pl-c2{background-color:#d73a49;color:#fafbfc}.markdown-body .pl-c2:before{content:"^M"}.markdown-body .pl-sr .pl-cce{color:#22863a;font-weight:700}.markdown-body .pl-ml{color:#735c0f}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:#005cc5;font-weight:700}.markdown-body .pl-mi{color:#24292e;font-style:italic}.markdown-body .pl-mb{color:#24292e;font-weight:700}.markdown-body .pl-md{background-color:#ffeef0;color:#b31d28}.markdown-body .pl-mi1{background-color:#f0fff4;color:#22863a}.markdown-body .pl-mc{background-color:#ffebda;color:#e36209}.markdown-body .pl-mi2{background-color:#005cc5;color:#f6f8fa}.markdown-body .pl-mdr{color:#6f42c1;font-weight:700}.markdown-body .pl-ba{color:#586069}.markdown-body .pl-sg{color:#959da5}.markdown-body .pl-corl{color:#032f62;text-decoration:underline}.markdown-body details{display:block}.markdown-body summary{display:list-item}.markdown-body a{background-color:transparent}.markdown-body a:active,.markdown-body a:hover{outline-width:0}.markdown-body strong{font-weight:inherit;font-weight:bolder}.markdown-body h1{margin:.67em 0}.markdown-body img{border-style:none}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace,monospace;font-size:1em}.markdown-body hr{box-sizing:content-box;overflow:visible}.markdown-body input{font:inherit;margin:0;overflow:visible}.markdown-body [type=checkbox]{box-sizing:border-box;padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body a{color:#0366d6;text-decoration:none}.markdown-body a:hover{text-decoration:underline}.markdown-body strong{font-weight:600}.markdown-body hr{background:transparent;border-bottom:1px solid #dfe2e5;height:0;margin:15px 0;overflow:hidden}.markdown-body hr:after,.markdown-body hr:before{content:"";display:table}.markdown-body hr:after{clear:both}.markdown-body table{border-collapse:collapse;border-spacing:0}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-bottom:0;margin-top:0}.markdown-body h1{font-size:32px}.markdown-body h1,.markdown-body h2{font-weight:600}.markdown-body h2{font-size:24px}.markdown-body h3{font-size:20px}.markdown-body h3,.markdown-body h4{font-weight:600}.markdown-body h4{font-size:16px}.markdown-body h5{font-size:14px}.markdown-body h5,.markdown-body h6{font-weight:600}.markdown-body h6{font-size:12px}.markdown-body p{margin-bottom:10px;margin-top:0}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{margin-bottom:0;margin-top:0;padding-left:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code,.markdown-body pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px}.markdown-body pre{margin-bottom:0;margin-top:0}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.markdown-body .border{border:1px solid #e1e4e8!important}.markdown-body .border-0{border:0!important}.markdown-body .border-bottom{border-bottom:1px solid #e1e4e8!important}.markdown-body .rounded-1{border-radius:3px!important}.markdown-body .bg-white{background-color:#fff!important}.markdown-body .bg-gray-light{background-color:#fafbfc!important}.markdown-body .text-gray-light{color:#6a737d!important}.markdown-body .mb-0{margin-bottom:0!important}.markdown-body .my-2{margin-bottom:8px!important;margin-top:8px!important}.markdown-body .py-0{padding-bottom:0!important;padding-top:0!important}.markdown-body .py-2{padding-bottom:8px!important;padding-top:8px!important}.markdown-body .pl-3,.markdown-body .px-3{padding-left:16px!important}.markdown-body .px-3{padding-right:16px!important}.markdown-body .f6{font-size:12px!important}.markdown-body .lh-condensed{line-height:1.25!important}.markdown-body .text-bold{font-weight:600!important}.markdown-body:after,.markdown-body:before{content:"";display:table}.markdown-body:after{clear:both}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-bottom:16px;margin-top:0}.markdown-body hr{background-color:#e1e4e8;border:0;height:.25em;margin:24px 0;padding:0}.markdown-body blockquote{border-left:.25em solid #dfe2e5;color:#6a737d;padding:0 1em}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body kbd{border:1px solid #c6cbd1;border-bottom-color:#959da5;box-shadow:inset 0 -1px 0 #959da5;font-size:11px}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-weight:600;line-height:1.25;margin-bottom:16px;margin-top:24px}.markdown-body h1{font-size:2em}.markdown-body h1,.markdown-body h2{border-bottom:1px solid #eaecef;padding-bottom:.3em}.markdown-body h2{font-size:1.5em}.markdown-body h3{font-size:1.25em}.markdown-body h4{font-size:1em}.markdown-body h5{font-size:.875em}.markdown-body h6{color:#6a737d;font-size:.85em}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-bottom:0;margin-top:0}.markdown-body li{word-wrap:break-all}.markdown-body li>p{margin-top:16px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{font-size:1em;font-style:italic;font-weight:600;margin-top:16px;padding:0}.markdown-body dl dd{margin-bottom:16px;padding:0 16px}.markdown-body table{display:block;overflow:auto;width:100%}.markdown-body table th{font-weight:600}.markdown-body table td,.markdown-body table th{border:1px solid #dfe2e5;padding:6px 13px}.markdown-body table tr{background-color:#fff;border-top:1px solid #c6cbd1}.markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.markdown-body img{background-color:#fff;box-sizing:content-box;max-width:100%}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body code{background-color:rgba(27,31,35,.05);border-radius:3px;font-size:85%;margin:0;padding:.2em .4em}.markdown-body pre{word-wrap:normal}.markdown-body pre>code{background:transparent;border:0;font-size:100%;margin:0;padding:0;white-space:pre;word-break:normal}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{background:#222;color:#aab1bf;border-radius:3px;font-size:85%;line-height:1.45;overflow:auto;padding:16px}.markdown-body pre code{background-color:transparent;border:0;display:inline;line-height:inherit;margin:0;max-width:auto;overflow:visible;padding:0;word-wrap:normal}.markdown-body .commit-tease-sha{color:#444d56;display:inline-block;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:90%}.markdown-body .blob-wrapper{border-bottom-left-radius:3px;border-bottom-right-radius:3px;overflow-x:auto;overflow-y:hidden}.markdown-body .blob-wrapper-embedded{max-height:240px;overflow-y:auto}.markdown-body .blob-num{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:rgba(27,31,35,.3);cursor:pointer;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;line-height:20px;min-width:50px;padding-left:10px;padding-right:10px;text-align:right;user-select:none;vertical-align:top;white-space:nowrap;width:1%}.markdown-body .blob-num:hover{color:rgba(27,31,35,.6)}.markdown-body .blob-num:before{content:attr(data-line-number)}.markdown-body .blob-code{line-height:20px;padding-left:10px;padding-right:10px;position:relative;vertical-align:top}.markdown-body .blob-code-inner{color:#24292e;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;overflow:visible;white-space:pre;word-wrap:normal}.markdown-body .pl-token.active,.markdown-body .pl-token:hover{background:#ffea7f;cursor:pointer}.markdown-body kbd{background-color:#fafbfc;border:1px solid #d1d5da;border-bottom-color:#c6cbd1;border-radius:3px;box-shadow:inset 0 -1px 0 #c6cbd1;color:#444d56;display:inline-block;font:11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;line-height:10px;padding:3px 5px;vertical-align:middle}.markdown-body :checked+.radio-label{border-color:#0366d6;position:relative;z-index:1}.markdown-body .tab-size[data-tab-size="1"]{-moz-tab-size:1;-o-tab-size:1;tab-size:1}.markdown-body .tab-size[data-tab-size="2"]{-moz-tab-size:2;-o-tab-size:2;tab-size:2}.markdown-body .tab-size[data-tab-size="3"]{-moz-tab-size:3;-o-tab-size:3;tab-size:3}.markdown-body .tab-size[data-tab-size="4"]{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.markdown-body .tab-size[data-tab-size="5"]{-moz-tab-size:5;-o-tab-size:5;tab-size:5}.markdown-body .tab-size[data-tab-size="6"]{-moz-tab-size:6;-o-tab-size:6;tab-size:6}.markdown-body .tab-size[data-tab-size="7"]{-moz-tab-size:7;-o-tab-size:7;tab-size:7}.markdown-body .tab-size[data-tab-size="8"]{-moz-tab-size:8;-o-tab-size:8;tab-size:8}.markdown-body .tab-size[data-tab-size="9"]{-moz-tab-size:9;-o-tab-size:9;tab-size:9}.markdown-body .tab-size[data-tab-size="10"]{-moz-tab-size:10;-o-tab-size:10;tab-size:10}.markdown-body .tab-size[data-tab-size="11"]{-moz-tab-size:11;-o-tab-size:11;tab-size:11}.markdown-body .tab-size[data-tab-size="12"]{-moz-tab-size:12;-o-tab-size:12;tab-size:12}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{margin:0 .2em .25em -1.6em;vertical-align:middle}.markdown-body hr{border-bottom-color:#eee}.markdown-body .pl-0{padding-left:0!important}.markdown-body .pl-1{padding-left:4px!important}.markdown-body .pl-2{padding-left:8px!important}.markdown-body .pl-3{padding-left:16px!important}.markdown-body .pl-4{padding-left:24px!important}.markdown-body .pl-5{padding-left:32px!important}.markdown-body .pl-6{padding-left:40px!important}.markdown-body .pl-7{padding-left:48px!important}.markdown-body .pl-8{padding-left:64px!important}.markdown-body .pl-9{padding-left:80px!important}.markdown-body .pl-10{padding-left:96px!important}.markdown-body .pl-11{padding-left:112px!important}.markdown-body .pl-12{padding-left:128px!important}',""]),o.exports=n},231:function(o,e,t){var content=t(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(27).default)("66f1fac8",content,!0,{sourceMap:!1})},232:function(o,e,t){var n=t(26)(!1);n.push([o.i,"/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;border:0;background:transparent;cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),o.exports=n},235:function(o,e,t){"use strict";t(171)},236:function(o,e,t){var n=t(26)(!1);n.push([o.i,".scrollWeb header{box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}",""]),n.locals={headerHeight:"80"},o.exports=n},237:function(o,e,t){"use strict";t(172)},238:function(o,e,t){var n=t(26)(!1);n.push([o.i,"[data-v-52ca41e8]:export{headerHeight:80}.headerWrap[data-v-52ca41e8]{width:100%;height:80px}.headerWrap a[data-v-52ca41e8]{color:inherit;text-decoration:none}.headerWrap header[data-v-52ca41e8]{transition:.3s ease;z-index:1;width:100%;height:80px;display:flex;justify-content:center;align-items:center;border-bottom:1px solid #f2f2f2;position:fixed;background-color:#fff;top:0}.headerWrap header .wrap[data-v-52ca41e8]{width:100%;max-width:1120px;height:100%;display:flex;justify-content:space-between;align-items:center}.headerWrap header .wrap h1[data-v-52ca41e8]{font-size:inherit;margin:0}.headerWrap header .wrap .logo[data-v-52ca41e8]{font-weight:700;font-size:22px;cursor:pointer}.headerWrap header .wrap .logo p[data-v-52ca41e8]{margin:2px 0 0;line-height:normal;font-size:10px;font-weight:400;color:#aaa}.headerWrap header .wrap .menu ul[data-v-52ca41e8]{display:flex;align-items:center}.headerWrap header .wrap .menu ul li[data-v-52ca41e8]{font-size:16px;margin-left:27px;list-style:none}.headerWrap header .wrap .menu ul li[data-v-52ca41e8]:first-of-type{margin-left:0}.headerWrap header .wrap .menu ul li>a[data-v-52ca41e8]{font-weight:800;white-space:nowrap;height:36px;color:inherit;text-decoration:none}.headerWrap header .wrap .menu ul li>a.active[data-v-52ca41e8],.headerWrap header .wrap .menu ul li>a[data-v-52ca41e8]:hover{color:#816bff}",""]),o.exports=n},239:function(o,e,t){"use strict";t(173)},240:function(o,e,t){var n=t(26),r=t(169),d=t(241),l=t(242),c=t(243),m=t(244),w=t(245),h=t(246),A=n(!1),f=r(d),y=r(l),k=r(c),x=r(m),v=r(w),z=r(h);A.push([o.i,"[data-v-367ad226]:export{headerHeight:80}.headerWrap[data-v-367ad226]{width:100%;min-height:60px;z-index:1}.headerWrap .content[data-v-367ad226]{padding:9px 16px;width:100%;background-color:#816bff;position:fixed;display:flex;align-items:center;z-index:2}.headerWrap .content .title[data-v-367ad226]{font-size:20px;vertical-align:top;margin-left:20px;color:#fff}.headerWrap .content .title h1[data-v-367ad226]{font-size:inherit;font-weight:400;margin:0}.headerWrap .content .menu[data-v-367ad226]{width:40px;height:40px;border-radius:50%;padding:0 8px;background-size:24px;background-position:50%;background-repeat:no-repeat;background-image:url("+f+");position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.headerWrap .content .menu.back[data-v-367ad226]{background-size:32px;background-image:url("+y+")}.headerWrap .content .menu[data-v-367ad226]:hover{background-color:#816bff}.headerWrap .navWrap[data-v-367ad226]{width:230px;max-width:calc(100vw - 125px);position:fixed;top:0;left:0;bottom:0;background-color:#fff;z-index:2;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.headerWrap .navWrap .titleWrap[data-v-367ad226]{width:100%;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 16px}.headerWrap .navWrap .titleWrap .title[data-v-367ad226]{font-size:20px}.headerWrap .navWrap .pages[data-v-367ad226]{padding:8px 0}.headerWrap .navWrap .pages .list[data-v-367ad226]{display:flex;padding:4px 16px;min-height:48px;align-items:center;color:inherit;text-decoration:none}.headerWrap .navWrap .pages .list.active[data-v-367ad226]{background-color:rgba(129,107,255,.4);color:#816bff;font-size:18px;font-weight:700}.headerWrap .navWrap .pages .list .icon[data-v-367ad226]{width:24px;height:24px;background-size:24px;background-position:50%;background-repeat:no-repeat;margin-right:32px}.headerWrap .navWrap .pages .list .icon.profile[data-v-367ad226]{background-image:url("+k+")}.headerWrap .navWrap .pages .list .icon.tech[data-v-367ad226]{background-image:url("+x+")}.headerWrap .navWrap .pages .list .icon.movie[data-v-367ad226]{background-image:url("+v+")}.headerWrap .navWrap .pages .list .icon.travel[data-v-367ad226]{background-image:url("+z+")}.headerWrap .navWrap .pages .list .name[data-v-367ad226]{font-weight:400;font-size:14px;line-height:1.25em}.headerWrap .mask[data-v-367ad226]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.7)}",""]),o.exports=A},241:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3oiLz48L3N2Zz4="},242:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPg0KICA8cGF0aCBkPSJNMTUuNDEgNy40MUwxNCA2bC02IDYgNiA2IDEuNDEtMS40MUwxMC44MyAxMnoiLz4NCiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPg0KPC9zdmc+DQo="},243:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0zIDV2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjExIDAtMiAuOS0yIDJ6bTEyIDRjMCAxLjY2LTEuMzQgMy0zIDNzLTMtMS4zNC0zLTMgMS4zNC0zIDMtMyAzIDEuMzQgMyAzem0tOSA4YzAtMiA0LTMuMSA2LTMuMXM2IDEuMSA2IDMuMXYxSDZ2LTF6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},244:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik05LjQgMTYuNkw0LjggMTJsNC42LTQuNkw4IDZsLTYgNiA2IDYgMS40LTEuNHptNS4yIDBsNC42LTQuNi00LjYtNC42TDE2IDZsNiA2LTYgNi0xLjQtMS40eiIvPjwvc3ZnPg=="},245:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},246:function(o,e){o.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPg0KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogIDxwYXRoIGQ9Ik0yMCA2aC0zVjRjMC0xLjExLS44OS0yLTItMkg5Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTIgLjg5LTIgMnYxMWMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6TTkgNGg2djJIOVY0em0xMSAxNUg0di0yaDE2djJ6bTAtNUg0VjhoM3YyaDJWOGg2djJoMlY4aDN2NnoiLz4NCjwvc3ZnPg0K"},247:function(o,e,t){"use strict";t(174)},248:function(o,e,t){var n=t(26)(!1);n.push([o.i,".pageWrap{overflow-x:hidden;position:relative;padding-bottom:80px}.pageWrap .menuGroup{top:-200%;position:absolute}",""]),n.locals={headerHeight:"80"},o.exports=n},249:function(o,e,t){"use strict";t(175)},250:function(o,e,t){var n=t(26)(!1);n.push([o.i,"h2{font-size:inherit}*,:after,:before{box-sizing:border-box;margin:0;padding:0}input:focus{outline:none}.slide-bottom-fade-enter-active,.slide-bottom-fade-leave-active,.slide-left-enter-active,.slide-left-leave-active{transition:transform .4s cubic-bezier(.25,.8,.25,1);will-change:transform,box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1)}.slide-left-enter,.slide-left-leave-to{transform:translate3D(-100%,0,0)}.fade-enter-active,.fade-leave-active{transition:all .3s ease}.fade-enter,.fade-leave-to,.slide-bottom-fade-enter,.slide-bottom-fade-leave-to{opacity:0}.slide-bottom-fade-enter{transform:translateY(100%)}.slide-bottom-fade-leave{transform:translateY(-100%)}",""]),n.locals={headerHeight:"80"},o.exports=n},251:function(o,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return n})),t.d(e,"mutations",(function(){return r}));var n=function(){return{isMobile:!1}},r={changeDevice:function(o,e){o.isMobile=e}}},54:function(o,e,t){"use strict";t(69),t(41);var n={props:["error"],computed:{pageName:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[1]:""},isPageView:function(){return this.$route&&this.$route.path?this.$route.path.split("/")[2]:""}},methods:{back:function(){this.$router.replace("/".concat(this.pageName))}}},r=(t(225),t(19)),d=Object(r.a)(n,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"errorPostView"},[t("div",{staticClass:"wrap"},[t("div",{staticClass:"pepe"}),o._v(" "),t("div",{staticClass:"message"},[t("div",{staticClass:"title"},[o._v("???: ERROR "+o._s(o.error.message))]),o._v(" "),o.isPageView&&"view"===o.isPageView?t("div",[o._v("\n        이미 삭제되었거나 존재하지 않는 글\n      ")]):o._e()]),o._v(" "),t("div",{staticClass:"back",on:{click:o.back}},[o._v("목록으로 돌아가기")])])])}),[],!1,null,"70c34964",null).exports,l={name:"nuxt-error",props:{error:{type:Object,default:function(){}}},computed:{errorPage:function(){return d}}},c=Object(r.a)(l,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"nuxt-error"},[t(o.errorPage,{tag:"component",attrs:{error:o.error}})],1)}),[],!1,null,null,null);e.a=c.exports}},[[217,6,1,7]]]);