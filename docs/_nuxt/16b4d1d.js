(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{438:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5850ce76",content,!0,{sourceMap:!1})},439:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0e54df84",content,!0,{sourceMap:!1})},440:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("7a43a724",content,!0,{sourceMap:!1})},441:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("75a71da9",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(438)},450:function(t,e,n){var o=n(26)(!1);o.push([t.i,"[data-v-455c925e]:export{headerHeight:80;headerMobileHeight:110}.postSideMenu[data-v-455c925e]{min-width:200px;height:calc(100vh - 80px);overflow-y:auto;position:sticky;top:120px}@media (max-width:1024px){.postSideMenu[data-v-455c925e]{display:none}}.postSideMenu .depth-2[data-v-455c925e]{font-weight:500}.postSideMenu .depth-3[data-v-455c925e]{margin-left:20px}.postSideMenu .depth-4[data-v-455c925e]{margin-left:30px}.postSideMenu .depth-5[data-v-455c925e]{margin-left:40px}.postSideMenu .depth-6[data-v-455c925e]{margin-left:50px}.postSideMenu a[data-v-455c925e]{color:inherit;text-decoration:none}.postSideMenu li[data-v-455c925e]{color:#2c3e50;list-style:none;font-size:13px;line-height:18px;padding-top:.25rem;padding-bottom:.25rem}.postSideMenu .active[data-v-455c925e]{color:#816bff}",""]),t.exports=o},451:function(t,e,n){"use strict";n(439)},452:function(t,e,n){var o=n(26)(!1);o.push([t.i,".postView.markdown-body.mobile img,.postView.markdown-body.mobile video{width:100%;height:auto;transition:.3s ease}.postView.markdown-body.mobile img[data-scale-effect=true]:hover{transform:scale(1.2)}",""]),t.exports=o},453:function(t,e,n){"use strict";n(440)},454:function(t,e,n){var o=n(26)(!1);o.push([t.i,"[data-v-b3b251be]:export{headerHeight:80;headerMobileHeight:110}.postViewWrap[data-v-b3b251be]{display:flex;justify-content:space-between;grid-gap:60px;gap:60px}.postViewWrap .postView[data-v-b3b251be]{width:100%;max-width:1024px;margin:0 auto;padding:0 0 80px;flex:8}@media (min-width:0px) and (max-width:767px){.postViewWrap .postView[data-v-b3b251be]{padding:0 20px 80px}}@media (min-width:768px) and (max-width:1023px){.postViewWrap .postView[data-v-b3b251be]{padding:0 20px 80px}}.postViewWrap .postSideMenu[data-v-b3b251be]{flex:1}",""]),t.exports=o},455:function(t,e,n){"use strict";n(441)},456:function(t,e,n){var o=n(26)(!1);o.push([t.i,"[data-v-ba3b4d84]:export{headerHeight:80;headerMobileHeight:110}@media (min-width:0px) and (max-width:767px){.postViewPage[data-v-ba3b4d84]{padding:0 14px}}@media (min-width:768px) and (max-width:1023px){.postViewPage[data-v-ba3b4d84]{padding:0 14px}}",""]),t.exports=o},466:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(69),n(46),{props:{toc:{type:Array,default:function(){return[]}},currentlyActiveTocId:{type:String,default:function(){return""}}}}),d=(n(449),n(15)),c=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postSideMenu"},[n("ul",t._l(t.toc,(function(e,o){var r=e.id,text=e.text,d=e.depth,path=e.path;return n("li",{key:o},[n("nuxt-link",{class:["depth-"+d,t.currentlyActiveTocId===r?"active":""],attrs:{to:{path:path,hash:r}}},[t._v(t._s(text))])],1)})),0)])}),[],!1,null,"455c925e",null).exports,l={props:{post:{type:Object,default:function(){}}},data:function(){return{isOverWindowHeight:!1,currentlyActiveTocId:"",observer:null}},components:{PostSideMenu:c},computed:{isSideMenuOpen:function(){return!this.$store.state.device.isMobile&&this.isOverWindowHeight},toc:function(){return this.post.toc.map((function(t){return{id:t.id,text:t.text,depth:t.depth,path:t.path}}))}},methods:{getSectionTarget:function(element){if(element)return"H2"===element.tagName||"H3"===element.tagName?element:this.getSectionTarget(element.previousSibling)}},mounted:function(){var t=this;this.$refs.postView&&(this.isOverWindowHeight=window.innerHeight<this.$refs.postView.clientHeight),this.observer=new IntersectionObserver((function(e){e.forEach((function(e){var section=t.getSectionTarget(e.target),n=section?section.getAttribute("id"):void 0;e.isIntersecting&&n&&(t.currentlyActiveTocId=n)}))}),{root:this.$refs.nustContent,rootMargin:"0px 0px -".concat(100-210/window.innerHeight*100,"% 0px"),threshold:.8}),document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id], .nuxt-content h3[id] ~ p").forEach((function(section){t.observer.observe(section)}))}},h=(n(451),n(453),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,d,c,l,title,h,f,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.route,r=o.params,d=r.category,c=r.id,e.next=4,n("".concat(d,"/").concat(c),{deep:!0}).fetch();case 4:return l=e.sent,title=l.title,h=l.description,f=l.coverImage,path=l.path,e.abrupt("return",{title:title,description:h,coverImage:f,post:l,path:path});case 7:case"end":return e.stop()}}),e)})))()},components:{PostView:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"postView",staticClass:"postViewWrap"},[n("div",{staticStyle:{flex:"1"}}),t._v(" "),n("div",{staticClass:"postView markdown-body",class:t.$store.state.device.isMobile?"mobile":""},[n("nuxt-content",{ref:"nuxtContent",attrs:{document:t.post}})],1),t._v(" "),n("div",{staticClass:"postSideMenu"},[t.isSideMenuOpen?n("PostSideMenu",{attrs:{currentlyActiveTocId:t.currentlyActiveTocId,toc:t.toc}}):t._e()],1)])}),[],!1,null,"b3b251be",null).exports},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",property:"description",content:this.description},{hid:"og:image",name:"og:image",property:"og:image",content:this.coverImage},{hid:"og:title",name:"og:title",property:"og:title",content:this.title},{hid:"og:description",name:"og:description",property:"og:description",content:this.description}]}}}),f=(n(455),Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postViewPage"},[n("PostView",{attrs:{post:t.post}})],1)}),[],!1,null,"ba3b4d84",null));e.default=f.exports}}]);