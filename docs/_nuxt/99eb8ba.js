(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{435:function(e,t,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("33d0b349",content,!0,{sourceMap:!1})},442:function(e,t,n){"use strict";n(435)},443:function(e,t,n){var r=n(26)(!1);r.push([e.i,"[data-v-3c31c6f2]:export{headerHeight:80;headerMobileHeight:110}.profilePage[data-v-3c31c6f2]{width:100%;max-width:1120px;margin:0 auto;padding:0 0 80px;position:relative}@media (min-width:768px) and (max-width:1023px){.profilePage[data-v-3c31c6f2]{padding:20px}}@media (min-width:0px) and (max-width:767px){.profilePage[data-v-3c31c6f2]{padding:20px}}",""]),e.exports=r},467:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(69),n(214),{props:{profile:{type:Array,default:function(){return[]}}}}),c=n(15),d={head:function(){return{title:"프로필",meta:[{hid:"description",name:"description",property:"description",content:"개발자 서재우의 프로필 입니다."},{hid:"og:image",name:"og:image",property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Fflog.jpg?alt=media&token=5d7a96e9-b03a-47a9-a2ac-0267ca4a4939"},{hid:"og:title",name:"og:title",property:"og:title",content:"개발자 서재우"},{hid:"og:description",name:"og:description",property:"og:description",content:"개발자 서재우의 프로필 입니다."}]}},components:{Profile:Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body"},e._l(["profile","history","teckStack","exprience"],(function(t,r){return n("nuxt-content",{key:r,attrs:{document:e.profile.find((function(e){return e.slug===t}))}})})),1)}),[],!1,null,null,null).exports},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("profile",{deep:!0}).fetch();case 3:return r=t.sent,t.abrupt("return",{profile:r});case 5:case"end":return t.stop()}}),t)})))()}},l=(n(442),Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profilePage"},[n("Profile",{attrs:{profile:e.profile}})],1)}),[],!1,null,"3c31c6f2",null));t.default=l.exports}}]);