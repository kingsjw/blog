__NUXT_JSONP__("/tech/vue-vModel-issue", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{title:z,description:A,coverImage:B,post:{slug:"vue-vModel-issue",description:A,title:z,coverImage:B,writer:"kingsjw7",toc:[{id:n,depth:r,text:n},{id:o,depth:r,text:o},{id:p,depth:r,text:p}],body:{type:"root",children:[{type:a,tag:"h1",props:{id:"안드로이드에서-v-model-사용시-data-바인딩-이슈"},children:[{type:a,tag:h,props:{ariaHidden:i,href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C%EC%97%90%EC%84%9C-v-model-%EC%82%AC%EC%9A%A9%EC%8B%9C-data-%EB%B0%94%EC%9D%B8%EB%94%A9-%EC%9D%B4%EC%8A%88",tabIndex:j},children:[{type:a,tag:c,props:{className:[k,l]},children:[]}]},{type:b,value:"안드로이드에서 v-model 사용시 data 바인딩 이슈"}]},{type:b,value:e},{type:a,tag:m,props:{},children:[{type:b,value:"v-model은 사용자 입력에 대한 데이터 값을 쉽게 양방향 바인딩을 할 수 있게해주는 vue 디렉티브이다."}]},{type:b,value:e},{type:a,tag:"br",props:{},children:[]},{type:b,value:e},{type:a,tag:s,props:{id:n},children:[{type:a,tag:h,props:{ariaHidden:i,href:"#%EB%AC%B8%EC%A0%9C",tabIndex:j},children:[{type:a,tag:c,props:{className:[k,l]},children:[]}]},{type:b,value:n}]},{type:b,value:e},{type:a,tag:"h4",props:{id:"모바일안드로이드에서-v-model를-사용해서-문자를-입력했는데-data가-입력과-동시에-바인딩-되지-않음"},children:[{type:a,tag:h,props:{ariaHidden:i,href:"#%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C%EC%97%90%EC%84%9C-v-model%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%AC%B8%EC%9E%90%EB%A5%BC-%EC%9E%85%EB%A0%A5%ED%96%88%EB%8A%94%EB%8D%B0-data%EA%B0%80-%EC%9E%85%EB%A0%A5%EA%B3%BC-%EB%8F%99%EC%8B%9C%EC%97%90-%EB%B0%94%EC%9D%B8%EB%94%A9-%EB%90%98%EC%A7%80-%EC%95%8A%EC%9D%8C",tabIndex:j},children:[{type:a,tag:c,props:{className:[k,l]},children:[]}]},{type:b,value:"모바일(안드로이드)에서 v-model를 사용해서 문자를 입력했는데 data가 입력과 동시에 바인딩 되지 않음"}]},{type:b,value:e},{type:a,tag:"blockquote",props:{},children:[{type:b,value:e},{type:a,tag:m,props:{},children:[{type:b,value:"예를들어 이메일을 복사해서 input에 붙여넣기를 했음에도 불구하고 붙여넣기 즉시 입력한 문자가 바인딩 되지 않음"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:s,props:{id:o},children:[{type:a,tag:h,props:{ariaHidden:i,href:"#%EC%9B%90%EC%9D%B8",tabIndex:j},children:[{type:a,tag:c,props:{className:[k,l]},children:[]}]},{type:b,value:o}]},{type:b,value:e},{type:a,tag:m,props:{},children:[{type:b,value:"문자가 완성되는 시점을 알 수 없기 때문에 input에 포커스가 한번 아웃되거나 다른 문자를 입력하는 등의 이벤트가 발생해야 데이터가 바인딩되는 것"}]},{type:b,value:e},{type:a,tag:s,props:{id:p},children:[{type:a,tag:h,props:{ariaHidden:i,href:"#%ED%95%B4%EA%B2%B0",tabIndex:j},children:[{type:a,tag:c,props:{className:[k,l]},children:[]}]},{type:b,value:p}]},{type:b,value:e},{type:a,tag:m,props:{},children:[{type:b,value:"v-model를 사용하지 않고 input 이벤트를 사용해 v-model 동작을 직접 구현함\n기존에 문제가 되는코드"}]},{type:b,value:e},{type:a,tag:C,props:{className:[D]},children:[{type:a,tag:E,props:{className:[F,G]},children:[{type:a,tag:H,props:{},children:[{type:a,tag:c,props:{className:[d,q]},children:[{type:a,tag:c,props:{className:[d,q]},children:[{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:I}]},{type:b,value:t}]},{type:b,value:u},{type:a,tag:c,props:{className:[d,v]},children:[{type:b,value:"v-model"}]},{type:a,tag:c,props:{className:[d,w]},children:[{type:a,tag:c,props:{className:[d,f,x]},children:[{type:b,value:y}]},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]},{type:b,value:J},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]}]},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:K}]}]},{type:b,value:e}]}]}]},{type:b,value:e},{type:a,tag:m,props:{},children:[{type:b,value:"문제가 해결된 코드"}]},{type:b,value:e},{type:a,tag:C,props:{className:[D]},children:[{type:a,tag:E,props:{className:[F,G]},children:[{type:a,tag:H,props:{},children:[{type:a,tag:c,props:{className:[d,q]},children:[{type:a,tag:c,props:{className:[d,q]},children:[{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:I}]},{type:b,value:t}]},{type:b,value:u},{type:a,tag:c,props:{className:[d,v]},children:[{type:b,value:":value"}]},{type:a,tag:c,props:{className:[d,w]},children:[{type:a,tag:c,props:{className:[d,f,x]},children:[{type:b,value:y}]},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]},{type:b,value:J},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]}]},{type:b,value:u},{type:a,tag:c,props:{className:[d,v]},children:[{type:a,tag:c,props:{className:[d,"namespace"]},children:[{type:b,value:"v-on:"}]},{type:b,value:t}]},{type:a,tag:c,props:{className:[d,w]},children:[{type:a,tag:c,props:{className:[d,f,x]},children:[{type:b,value:y}]},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]},{type:b,value:"value = $event.target.value"},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:g}]}]},{type:a,tag:c,props:{className:[d,f]},children:[{type:b,value:K}]}]},{type:b,value:e}]}]}]}]},dir:"\u002Ftech",path:L,extension:".md",createdAt:M,updatedAt:M},path:L}],fetch:{},mutations:[]}}("element","text","span","token","\n","punctuation","\"","a","true",-1,"icon","icon-link","p","문제","원인","해결","tag",2,"h2","input"," ","attr-name","attr-value","attr-equals","=","AOS에서 v-model data 바인딩 이슈","Vue 개발 관련 이슈","https:\u002F\u002Ffirebasestorage.googleapis.com\u002Fv0\u002Fb\u002Fkingsjw7-f7e06.appspot.com\u002Fo\u002Fimages%2Ftech%2Fcategories%2Fvue.png?alt=media&token=66e525dd-a850-43e2-85ce-19059891f8ee","div","nuxt-content-highlight","pre","language-html","line-numbers","code","\u003C","value","\u003E","\u002Ftech\u002Fvue-vModel-issue","2021-08-29T15:03:04.110Z")));