__NUXT_JSONP__("/tech/hoisting", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{title:l,description:C,coverImage:D,post:{slug:"hoisting",description:C,title:l,coverImage:D,writer:"kingsjw7",date:"2023-08-16T00:00:00.000Z",toc:[{id:E,depth:F,text:G},{id:H,depth:F,text:I}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"js-호이스팅"},children:[{type:b,tag:k,props:{href:"#js-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:l}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"자칫 햇갈리기 쉬운 JS 호이스팅 개념에 대해 정리하고자한다."}]},{type:a,value:e},{type:b,tag:J,props:{id:E},children:[{type:b,tag:k,props:{href:"#%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\n출처: "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fko\u002Fdocs\u002FGlossary\u002FHoisting",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"MDN"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"호이스팅이란 결국 JS에 동작 중 하나로 코드의 구조와 흐름을 이해하고 예측하기 쉽게 해주는 동작 규칙이라고 이해할 수 있다."}]},{type:a,value:e},{type:b,tag:J,props:{id:H},children:[{type:b,tag:k,props:{href:"#%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EA%B7%9C%EC%B9%99",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"호이스팅은 몇가지 규칙만 알면 이해하기 쉽다."}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"호이스팅 대상 코드는 최상단으로 끌어올려짐"}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"호이스팅 대상 코드는 할당문을 만나기 전까지 기본값 undefined 할당"}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"선언문만 호이스팅 대상"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"아래 코드를 보면 foo 변수가 선언도 되기 전에 접근해서 출력했더니 에러가 발생하지 않고 undefined가 출력된다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\n이는 foo 변수가 var 선언문으로 선언되어 var foo 선언문이 호이스팅으로인해 최상단으로 끌어올려져서 기본값 undefined로 할당되었기 때문이다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이후 foo = 1 할당문을 만나서 1이 foo 변수에 할당되었기 때문에 최하단에서 foo가 1로 출력이 되는 것이다."}]},{type:a,value:e},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,i,r]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,u,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F\u002F undefined"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"var"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,i,r]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,u,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F\u002F 1"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"여기서 주의할 점!"},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nlet, const 선언문은 아래처럼 코드를 실행하면 Uncaught ReferenceError: foo is not defined 에러가 발생한다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nfoo를 참조할 수 없다는 것인데, 그 이유는 let 혹은 const 선언문은 호이스팅에 undefined로 기본값이 할당되지 않기 때문에 실제 값이 할당 되기 전에 참조하게 되면 참조할 수 없다는 예외가 발생하는 것이다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\n이것을 시간상 사각지대\"(Temporal Dead Zone, TDZ)\"라고 부른다."}]},{type:a,value:e},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:P,props:{},children:[{type:b,tag:c,props:{className:[d,i,r]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t,u,v]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F\u002F Uncaught ReferenceError: foo is not defined"}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"const"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"그런데 왜 var는 undefined로 미리 할당을 해주고 let, const는 그렇게 해주지 않을까?"},{type:b,tag:h,props:{},children:[]},{type:a,value:"\n그건 바로 var와 let, const 코드가 평가되어 관리되는 영역 다르기 때문에, 즉 서로 관리되는 렉시컬 환경이 다르기 때문이다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nvar는 렉시컬 환경에 객체환경 레코드에서 관리되고 let, const는 랙시컬 환경에 선언적 환경 레코드에서 관린되다."},{type:b,tag:h,props:{},children:[]},{type:a,value:"\n이 차이 때문에 var는 함수 레벨 스코프를 가지고 let, const는 블록 레벨 스코프를 가지는 것이다."}]}]},dir:"\u002Ftech",path:X,extension:".md",createdAt:"2023-08-16T05:40:22.706Z",updatedAt:"2023-08-16T07:20:59.666Z"},path:X}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation","p","br","console",";","a","JS 호이스팅","true",-1,"icon","icon-link","li","class-name",".","method","function","property-access","log","(","foo",")","comment","\n\n","JS 호이스팅 정리","https:\u002F\u002Ffirebasestorage.googleapis.com\u002Fv0\u002Fb\u002Fkingsjw7-8d984.appspot.com\u002Fo\u002Ftech%2Fhoisting%2Fhoi.jpeg?alt=media&token=de3681c2-2e4e-4141-a431-f14d6bb2fd6f","호이스팅이란",2,"호이스팅이란?","호이스팅-규칙","호이스팅 규칙","h2","div","nuxt-content-highlight","pre","language-js","line-numbers","code","keyword"," foo ","operator","="," ","number","1","\u002Ftech\u002Fhoisting")));