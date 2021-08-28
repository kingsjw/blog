__NUXT_JSONP__("/tech/executaion-context", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{title:Y,description:aa,coverImage:ab,post:{slug:"executaion-context",description:aa,title:Y,coverImage:ab,writer:"kingsjw7",toc:[{id:ac,depth:G,text:ad},{id:ae,depth:G,text:af},{id:ag,depth:H,text:ah},{id:I,depth:H,text:I},{id:ai,depth:G,text:aj},{id:ak,depth:G,text:al},{id:am,depth:H,text:an},{id:ao,depth:H,text:J}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"js-execution-context"},children:[{type:b,tag:k,props:{href:"#js-execution-context",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Java Script의 핵심 동작원리 중 하나인 Execution Context(실행 컨텍스트)에 대해 내가 이해한 만큼 기록해보자"},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n이 글은 "},{type:b,tag:k,props:{href:"https:\u002F\u002Fbook.naver.com\u002Fbookdb\u002Fbook_detail.nhn?bid=16710547",rel:[ap,aq,ar],target:as},children:[{type:a,value:"모던 자바스크립트 Deep Dive 책"}]},{type:a,value:"을 참조한 글이다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:K,props:{id:ac},children:[{type:b,tag:k,props:{href:"#%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8execution-context%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"자바스크립트 기본 동작 원리 중 하나이다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"ECMA 스펙에서 실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라고 정의한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"실행 가능한 코드가 실제로 실행되고 관리 되는 영역을 의미한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"자바스크립트 엔진이 코드를 실행할 때 필요한 정보를 의미한다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:K,props:{id:ae},children:[{type:b,tag:k,props:{href:"#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%98%EA%B3%A0-%EC%9E%88%EC%9D%84%EA%B9%8C",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:af}]},{type:a,value:c},{type:b,tag:L,props:{id:ag},children:[{type:b,tag:k,props:{href:"#%EA%B0%84%EB%9E%B5%ED%95%98%EA%B2%8C-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:ah}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Java Script 엔진은 소스 코드를 평가와 실행, 크게 2가지 과정으로 나누어 동작한다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"평가\n"},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:t,props:{},children:[{type:a,value:"실행 가능한 코드(Execution Code)"}]},{type:a,value:" 를 만나면 그 코드를 평가해서 "},{type:b,tag:t,props:{},children:[{type:a,value:"실행 컨텍스트(Execution Context)"}]},{type:a,value:" 로 만든다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이 때 변수\u002F함수 등의 선언문만 먼저 실행하여 식별자를 키로 실행 컨텍스트가 "},{type:b,tag:t,props:{},children:[{type:a,value:at}]},{type:a,value:" 에 등록한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이 때 등록되는 정보들은 다음과 같다.\n"},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"어떤 파라미터와 변수, 함수들이 있는지 (실제 아직 그것이 어떤 값을 갖게 되는지, 어떤 내용의 함수인지는 모르지만)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"어떤 스코프를 갖게되는지"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This를 어떻게 바인딩할 것인지 등등"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"실행\n"},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"평가 과정이 끝나고 선언문을 제외한 소스코드가 순차적으로 실행된다.(런타임)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"이 때, 필요한 정보(변수나 함수의 참조)들은 실행 컨텍스트가 관리하는 스코프인 "},{type:b,tag:t,props:{},children:[{type:a,value:at}]},{type:a,value:"에서 검색하여 얻는다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"변수값의 변경 등 실행 결과는 다시 실행 컨텍스트가 관리하는 스코프에 등록된다."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"여기서 "},{type:b,tag:t,props:{},children:[{type:a,value:J}]},{type:a,value:" 이란 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다.(아래에서 더 자세히 다룰 것)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"이 때 실행 가능한 코드 는 다음과 같다."}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"전역 코드: 전역의 정의된 함수 (클래스의 내부는 포함 x)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"함수 코드: 함수 내부에 존재하는 코드 (함수 내부에 중첩된 클래스, 함수 내부 코드는 포함 x)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"eval 코드: eval 함수 (모던 Java Script에선 잘 쓰이지 않는다. 이유는 따로 언급 하지 않겠다.)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"위 실행 가능한 코드 에 따라서 실행 컨텍스트 를 초기화하는 환경과 과정이 다르다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n특히 eval 함수는 "},{type:b,tag:t,props:{},children:[{type:a,value:J}]},{type:a,value:" 이 아닌 별도의 동적 환경에서 실행된다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:L,props:{id:I},children:[{type:b,tag:k,props:{href:"#%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:au,props:{className:[av]},children:[{type:b,tag:aw,props:{className:[ax,ay]},children:[{type:b,tag:az,props:{},children:[{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:Z},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"1"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:aA},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"2"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:E}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:aB}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,"parameter"]},children:[{type:a,value:k}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:aC},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:Z},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"10"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:aC},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:aA},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"20"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:"\n\n    "},{type:b,tag:d,props:{className:[e,Q,aD]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:b,tag:d,props:{className:[e,aE,E,z]},children:[{type:a,value:aF}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:a,value:"a "},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:$}]},{type:a,value:Z},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:$}]},{type:a,value:aG},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:R}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,E]},children:[{type:a,value:aB}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:"100"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,Q,aD]},children:[{type:a,value:Q}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:b,tag:d,props:{className:[e,aE,E,z]},children:[{type:a,value:aF}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:N}]},{type:a,value:"x "},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:$}]},{type:a,value:aG},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:O}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:w}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"위 자바스크립 코드에 대한 평가와 실행 과정을 정리하면 다음과 같다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"전역 코드 평가"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"선언문만 먼저 실행. 생성된 식별자는 실행 컨텍스트가 관리하는 스코프에 등록"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"var로 선언된 전역변수, 함수는 전역 객체의 프로퍼티에 등록"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"전역 코드 실행"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"런타임이 시작되어 코드가 순차적으로 실행됨"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"함수가 호출되면 전역 코드의 실행을 일시 중단하고 함수 내부로 진입."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"→ 실행 컨텍스트는 "},{type:b,tag:t,props:{},children:[{type:a,value:"실행 스택(Execution Stack, 흔히 콜스택이라고 부름)"}]},{type:a,value:" 에 쌓임(아래에서 자세히 설명할 것)."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"함수 코드 평가"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"매개변수, 지역변수 선언문이 먼저 실행. 생성된 식별자를 실행 컨텍스트가 관리하는 스코프에 등록"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"arguments 객체가 생성되어 지역 스코프에 등록, this 바인딩 결정"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"함수 코드 실행"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"값의 할당이 이루어지고, console.log 메서드 호출됨."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"console을 스코프 체인에서 검색. 지역 스코프에 없으니 스코프 체인을 타고 전역 스코프를 통해 전역 객체의 프로퍼티로 등록되어있는 console에 접근한다"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"log 프로퍼티를 console객체의 프로토타입 체인을 통해 검색한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"스코프 체인을 통해 a + x + y를 평가한다.  → 130이 나올것임"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"맨 밑 console.log(x + y)에서는 x + y를 평가할 때 전역 스코프에서 식별자를 찾기 때문에 3이 나올것임"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:K,props:{id:ai},children:[{type:b,tag:k,props:{href:"#%EC%BD%9C-%EC%8A%A4%ED%83%9Dcall-stack-%EC%8B%A4%ED%96%89-%EC%8A%A4%ED%83%9Dexecution-stack",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 컨텍스트를 본격적으로 알아보기 전에 콜 스택이 뭔지 짚고 넘어가자"},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n콜스택, 실행 스택 모두 같은 녀석을 부르는 명칭이다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 스택은 런타임에 실행 컨텍스트를 저장하기 위해 자바스크립트 엔진에 의해 생성되고 관리되는 Last-In-First-Out(LIFO) 스택의 자료구조이다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 스택의 가장 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트이다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"프로그램(코드 파일)이 실행되면 맨 처음 기준이 되는 Global EC(Global Execution Context)가 생성되고 실행 스택에 푸시되고 실행된다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 도중 함수 호출 문을 만나면 해당 함수의 Functional EC(Functional Execution Context)가 생성되고 스택에 푸시되고 실행된다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행이 끝난 컨텍스트는 스택에서 제거(pop)된다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"스택이 빌 때까지 위의 작업을 반복하고 Global EC까지 소멸되면 프로그램이 종료된다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"이 동작을 시각화하면 아래와 같다."}]},{type:a,value:c},{type:b,tag:"img",props:{src:"https:\u002F\u002Ffirebasestorage.googleapis.com\u002Fv0\u002Fb\u002Fkingsjw7-f7e06.appspot.com\u002Fo\u002Fimages%2Ftech%2Fexecution-context%2FcallStack2.png?alt=media&token=aabfb72b-5d4c-4dbe-a82c-a2d6bc622e31",width:"700px",height:"auto",alt:"callStack"},children:[]},{type:a,value:c},{type:b,tag:K,props:{id:ak},children:[{type:b,tag:k,props:{href:"#%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8execution-context%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%83%9D%EA%B2%BC%EC%9D%84%EA%B9%8C",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:al}]},{type:a,value:c},{type:b,tag:L,props:{id:am},children:[{type:b,tag:k,props:{href:"#%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%9D%98-%EA%B5%AC%EC%84%B1",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:an}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 컨텍스트는 LexicalEnvironment와 VariableEnvironment 컴포넌트로 구성되어있다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"실행 컨텍스트를 수도 코드로 나타내면 다음과 같다."}]},{type:a,value:c},{type:b,tag:au,props:{className:[av]},children:[{type:b,tag:aw,props:{className:[ax,ay]},children:[{type:b,tag:az,props:{},children:[{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"ExecutionContext"}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:F}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aH}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:U},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:F}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:aI},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:U},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:F}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aJ}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,aK,j]},children:[{type:a,value:aL}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:R}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:"VariableEnvironment"}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:P}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aH}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:U},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:F}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:aI},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:U},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:V}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:F}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:aJ}]},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:A}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,aK,j]},children:[{type:a,value:aL}]},{type:a,value:i},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:R}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:R}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"렉시컬 환경(Lexical Environment), 변수 환경(VariableEnvironment) 두 컴포넌트는 기본적으로 Lexical Environment에 대한 참조이다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n처음에는 같은 Lexical Environment를 참조하나 코드 상황에 따라 참조가 바뀌기도 한다. "},{type:b,tag:k,props:{href:"http:\u002F\u002Fdmitrysoshnikov.com\u002Fecmascript\u002Fes5-chapter-3-2-lexical-environments-ecmascript-implementation\u002F",rel:[ap,aq,ar],target:as},children:[{type:a,value:"참고"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:L,props:{id:ao},children:[{type:b,tag:k,props:{href:"#%EB%A0%89%EC%8B%9C%EC%BB%AC-%ED%99%98%EA%B2%BDlexical-environment",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Lexical Environment는 스펙에만 존재하는 추상적인 개념이다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n따라서 직접 Lexical Environment를 조회하거나 조작하는 것은 불가능하다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"이제 "},{type:b,tag:"em",props:{},children:[{type:a,value:"렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다."}]},{type:a,value:" 라고 위에서 언급한 내용이 이해가 될 것이다."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"렉시컬 환경은 다음과 같은 역할을 한다."}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"콜스택이 실행 순서를 관리한다면, 렉시컬 환경은 스코프와 식별자를 관리한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"렉시컬 환경은 키-값을 가지는 객체 형태의 스코프를 생성하여 식별자를 키로 등록하여 식별자에 바인딩된 값을 관리한다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n→ 즉, 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 한다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"렉시컬 환경은 "},{type:b,tag:t,props:{},children:[{type:a,value:"환경 레코드"}]},{type:a,value:" 와 "},{type:b,tag:t,props:{},children:[{type:a,value:"외부 렉시컬 환경에 대한 참조"}]},{type:a,value:" 로 구성된다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"환경 레코드는 스코프에 포함된 식별자를 등록하고, 등록된 식별자에 바인딩된 값을 관리하는 저장소이다."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n→ 단방향 링크드 리스트인 스코프 체인 구성"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"각 렉시컬 환경은 크게 3가지의 컴포넌트로 구성되며, 전역 렉시컬 환경과, 함수 렉시컬 환경이 존재한다."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"전역 렉시컬 환경과 함수 렉시컬 환경의 내부 구조(모양)는 같지만 동작은 서로 다르다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n내부 동작 내용을 모두 정리하면 글이 매우 길어질 것이 우려되어 이 글에선 개념적인 내용만 다루도록하겠다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n추후 렉시컬 환경 내부 동작 내용을 다루는 글 작성할 것이다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Environment Record"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:aM}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This binding (ES6부터 This 바인딩은 Lexical Environment가 담당한다)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:aN,props:{id:"1-environment-record"},children:[{type:b,tag:k,props:{href:"#1-environment-record",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:"1. Environment Record"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"환경 레코드는 스코프에 포함된 식별자를 등록하고 식별자에 바인딩된 값을 관리하는 저장소이다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n환경 레코드는 소스코드의 타입에 따라 관리하는 내용에 차이가 있다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n전역 환경 레코드인 경우 기존 var 키워드로 선언한 전역 변수와 ES6의 let, const로 선언한 전역 변수를 구분하여 관리하기 위해 전역 스코프를 관리하기 위해 Object Environment Record, Declarative Environment Record이 있다."}]},{type:a,value:c},{type:b,tag:aO,props:{id:"11-object-environment-record"},children:[{type:b,tag:k,props:{href:"#11-object-environment-record",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:"1.1 Object Environment Record"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"전역 환경 레코드를 구성하는 컴포넌트 중 하나인 객체 환경 레코드는 BindingObject(전역 객체가 생성될 때 생성되는 객체)라고 부르는 객체와 연결된다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\nvar 키워드로 선언한 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 환경 레코드의 객체 환경 레코드에 연결된 BindingObject를 통해 전역 객체의 프로퍼티와 메서드가 된다."},{type:b,tag:p,props:{},children:[]},{type:a,value:"\n이 때 등록된 식별자를 전역 환경 레코드의 객체 환경 레코드에서 검색하면 전역 객체의 프로퍼티를 검색하여 반환한다.\n이것이 var 키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수가 전역 객체의 프로퍼티를 참조할 수 있는 메커니즘이다."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"예: window.alert을 alert만으로 참조 가능함"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:aO,props:{id:"12-declarative-environment-record"},children:[{type:b,tag:k,props:{href:"#12-declarative-environment-record",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:"1.2 Declarative Environment Record"}]},{type:a,value:c},{type:b,tag:aN,props:{id:"outer-reference-to-the-outer-environment"},children:[{type:b,tag:k,props:{href:"#outer-reference-to-the-outer-environment",ariaHidden:l,tabIndex:m},children:[{type:b,tag:d,props:{className:[n,o]},children:[]}]},{type:a,value:aM}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"작성중..."}]}]},dir:"\u002Ftech",path:aP,extension:".md",createdAt:aQ,updatedAt:aQ},path:aP}],fetch:{},mutations:[]}}("text","element","\n","span","token","li","punctuation","p"," ","operator","a","true",-1,"icon","icon-link","br","ul","maybe-class-name","blockquote","strong","keyword",":",";",",",".","property-access","\u003C","\u003E","=","number","function","LexicalEnvironment",2,3,"정리하기","렉시컬 환경(Lexical Environment)","h2","h3","const","(",")","{","console","}","\n   ","\n      ","ref","to","in"," memory","JS Execution Context"," x ","\n\n","+","JS 실행 컨텍스트 이해하기(작성중)","https:\u002F\u002Ffirebasestorage.googleapis.com\u002Fv0\u002Fb\u002Fkingsjw7-f7e06.appspot.com\u002Fo\u002Fimages%2Ftech%2Fcategories%2Fjavascript.png?alt=media&token=8e6d3d30-1416-4484-bb0a-163d529a5d99","실행-컨텍스트execution-context는-무엇일까","실행 컨텍스트(Execution Context)는 무엇일까?","자바스크립트-코드는-어떻게-동작하고-있을까","자바스크립트 코드는 어떻게 동작하고 있을까?","간략하게-개념-이해하기","간략하게 개념 이해하기","콜-스택call-stack-실행-스택execution-stack","콜 스택(Call Stack), 실행 스택(Execution Stack)","실행-컨텍스트execution-context는-어떻게-생겼을까","실행 컨텍스트(Execution Context)는 어떻게 생겼을까?","실행-컨텍스트의-구성","실행 컨텍스트의 구성","렉시컬-환경lexical-environment","nofollow","noopener","noreferrer","_blank","렉시컬 환경","div","nuxt-content-highlight","pre","language-js","line-numbers","code"," y ","foo","\n    ","class-name","method","log"," y","EnvironmentRecord","\n      outer","ThisBinding","spread","...","Outer (reference to the outer environment)","h4","h5","\u002Ftech\u002Fexecutaion-context","2021-08-28T15:00:56.233Z")));