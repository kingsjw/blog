(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{436:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("66df4f5b",content,!0,{sourceMap:!1})},437:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("80704108",content,!0,{sourceMap:!1})},438:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("97883710",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n(436)},447:function(t,e,n){var o=n(31)(!1);o.push([t.i,".postSideMenu[data-v-2bef74aa]{width:250px;position:fixed;right:0;bottom:0;top:100px;overflow-y:auto;padding:10px 0}.postSideMenu .depth-2[data-v-2bef74aa]{font-weight:500}.postSideMenu .depth-3[data-v-2bef74aa]{margin-left:20px}.postSideMenu .depth-4[data-v-2bef74aa]{margin-left:30px}.postSideMenu .depth-5[data-v-2bef74aa]{margin-left:40px}.postSideMenu .depth-6[data-v-2bef74aa]{margin-left:50px}.postSideMenu a[data-v-2bef74aa]{color:inherit;text-decoration:none}.postSideMenu li[data-v-2bef74aa]{color:#2c3e50;list-style:none;font-size:13px;line-height:18px;padding-top:.25rem;padding-bottom:.25rem}.postSideMenu .nuxt-link-active[data-v-2bef74aa]{color:#816bff}",""]),t.exports=o},448:function(t,e,n){"use strict";n(437)},449:function(t,e,n){var o=n(31)(!1);o.push([t.i,".markdown-body.mobile img,.markdown-body.mobile video{width:100%;height:auto}",""]),t.exports=o},450:function(t,e,n){"use strict";n(438)},451:function(t,e,n){var o=n(31)(!1);o.push([t.i,".postView[data-v-1896a8b1]{width:100%;max-width:1120px;margin:0 auto;padding:0 0 80px}.postView.mobile[data-v-1896a8b1]{padding:0 20px 80px}",""]),t.exports=o},461:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(68),{props:{menus:{type:Array,default:function(){return[]}}}}),d=(n(446),n(19)),c=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postSideMenu"},[n("ul",t._l(t.menus,(function(e,o){var r=e.id,text=e.text,d=e.depth,path=e.path;return n("li",{key:o},[n("nuxt-link",{class:"depth-"+d,attrs:{to:{path:path,hash:r}}},[t._v(t._s(text))])],1)})),0)])}),[],!1,null,"2bef74aa",null).exports,l={props:{post:{type:Object,default:function(){}}}},f=(n(448),n(450),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,d,c,l,title,f,h,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.route,r=o.params,d=r.category,c=r.id,e.next=4,n("".concat(d,"/").concat(c),{deep:!0}).fetch();case 4:return l=e.sent,title=l.title,f=l.description,h=l.coverImage,path=l.path,e.abrupt("return",{title:title,description:f,coverImage:h,post:l,path:path});case 7:case"end":return e.stop()}}),e)})))()},components:{PostView:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postView markdown-body",class:t.$store.state.device.isMobile?"mobile":""},[n("nuxt-content",{attrs:{document:t.post}})],1)}),[],!1,null,"1896a8b1",null).exports,PostSideMenu:c},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:image",name:"og:image",content:this.coverImage},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:description",name:"og:description",content:this.description}]}}}),h=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postViewPage"},[n("PostView",{attrs:{post:t.post}}),t._v(" "),t.$store.state.device.isMobile?t._e():n("PostSideMenu",{attrs:{menus:t.post.toc.map((function(e){return{id:e.id,text:e.text,depth:e.depth,path:t.path}}))}})],1)}),[],!1,null,null,null);e.default=h.exports}}]);