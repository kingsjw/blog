---
title: JS Execution Context
description: JS 실행 컨텍스트 이해하기(작성중)
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Ftech%2Fcategories%2Fjavascript.png?alt=media&token=8e6d3d30-1416-4484-bb0a-163d529a5d99
writer: kingsjw7
---

# JS Execution Context
> Java Script의 핵심 동작원리 중 하나인 Execution Context(실행 컨텍스트)에 대해 내가 이해한 만큼 기록해보자

## 실행 컨텍스트(Execution Context)는 무엇일까?
- 자바스크립트 기본 동작 원리 중 하나이다.
- ECMA 스펙에서 실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라고 정의한다.
- 실행 가능한 코드가 실제로 실행되고 관리 되는 영역을 의미한다.
- 자바스크립트 엔진이 코드를 실행할 때 필요한 정보를 의미한다.

## 자바스크립트 코드는 어떻게 동작하고 있을까?
### 간략하게 개념 이해하기
> Java Script 엔진은 소스 코드를 평가와 실행, 크게 2가지 과정으로 나누어 동작한다.
- 평가
   - **실행 가능한 코드(Execution Code)** 를 만나면 그 코드를 평가해서 **실행 컨텍스트(Execution Context)** 로 만든다.
   - 이 때 변수/함수 등의 선언문만 먼저 실행하여 식별자를 키로 실행 컨텍스트가 **렉시컬 환경** 에 등록한다.
   - 이 때 등록되는 정보들은 다음과 같다.
      - 어떤 파라미터와 변수, 함수들이 있는지 (실제 아직 그것이 어떤 값을 갖게 되는지, 어떤 내용의 함수인지는 모르지만)
      - 어떤 스코프를 갖게되는지
      - This를 어떻게 바인딩할 것인지 등등
- 실행
   - 평가 과정이 끝나고 선언문을 제외한 소스코드가 순차적으로 실행된다.(런타임)
   - 이 때, 필요한 정보(변수나 함수의 참조)들은 실행 컨텍스트가 관리하는 스코프인 **렉시컬 환경**에서 검색하여 얻는다.
   - 변수값의 변경 등 실행 결과는 다시 실행 컨텍스트가 관리하는 스코프에 등록된다.

> 여기서 **렉시컬 환경(Lexical Environment)** 이란 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다.(아래에서 더 자세히 다룰 것)

이 때 실행 가능한 코드 는 다음과 같다.
- 전역 코드: 전역의 정의된 함수 (클래스의 내부는 포함 x)
- 함수 코드: 함수 내부에 존재하는 코드 (함수 내부에 중첩된 클래스, 함수 내부 코드는 포함 x)
- eval 코드: eval 함수 (모던 Java Script에선 잘 쓰이지 않는다. 이유는 따로 언급 하지 않겠다.)
> 위 실행 가능한 코드 에 따라서 실행 컨텍스트 를 초기화하는 환경과 과정이 다르다.  
> 특히 eval 함수는 **렉시컬 환경(Lexical Environment)** 이 아닌 별도의 동적 환경에서 실행된다.

### 정리하기
```js
const x = 1;
const y = 2;

function foo(a) {
	const x = 10;
	const y = 20;

	console.log(a + x + y);
}

foo(100);

console.log(x + y);
```
> 위 자바스크립 코드에 대한 평가와 실행 과정을 정리하면 다음과 같다.
1. 전역 코드 평가
    - 선언문만 먼저 실행. 생성된 식별자는 실행 컨텍스트가 관리하는 스코프에 등록
    - var로 선언된 전역변수, 함수는 전역 객체의 프로퍼티에 등록
2. 전역 코드 실행
    - 런타임이 시작되어 코드가 순차적으로 실행됨
    - 함수가 호출되면 전역 코드의 실행을 일시 중단하고 함수 내부로 진입.

        → 실행 컨텍스트는 **실행 스택(Execution Stack, 흔히 콜스택이라고 부름)** 에 쌓임(아래에서 자세히 설명할 것).

3. 함수 코드 평가
    - 매개변수, 지역변수 선언문이 먼저 실행. 생성된 식별자를 실행 컨텍스트가 관리하는 스코프에 등록
    - arguments 객체가 생성되어 지역 스코프에 등록, this 바인딩 결정
4. 함수 코드 실행
    - 값의 할당이 이루어지고, console.log 메서드 호출됨.
    - console을 스코프 체인에서 검색. 지역 스코프에 없으니 스코프 체인을 타고 전역 스코프를 통해 전역 객체의 프로퍼티로 등록되어있는 console에 접근한다
    - log 프로퍼티를 console객체의 프로토타입 체인을 통해 검색한다.
    - 스코프 체인을 통해 a + x + y를 평가한다.  → 130이 나올것임
    - 맨 밑 console.log(x + y)에서는 x + y를 평가할 때 전역 스코프에서 식별자를 찾기 때문에 3이 나올것임


## 콜 스택(Call Stack), 실행 스택(Execution Stack)
> 실행 컨텍스트를 본격적으로 알아보기 전에 콜 스택이 뭔지 짚고 넘어가자  
> 콜스택, 실행 스택 모두 같은 녀석을 부르는 명칭이다.

실행 스택은 런타임에 실행 컨텍스트를 저장하기 위해 자바스크립트 엔진에 의해 생성되고 관리되는 Last-In-First-Out(LIFO) 스택의 자료구조이다.

실행 스택의 가장 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트이다.

프로그램(코드 파일)이 실행되면 맨 처음 기준이 되는 Global EC(Global Execution Context)가 생성되고 실행 스택에 푸시되고 실행된다.

실행 도중 함수 호출 문을 만나면 해당 함수의 Functional EC(Functional Execution Context)가 생성되고 스택에 푸시되고 실행된다.

실행이 끝난 컨텍스트는 스택에서 제거(pop)된다.

스택이 빌 때까지 위의 작업을 반복하고 Global EC까지 소멸되면 프로그램이 종료된다.

이 동작을 시각화하면 아래와 같다.

<img src="https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Ftech%2Fexecution-context%2FcallStack2.png?alt=media&token=aabfb72b-5d4c-4dbe-a82c-a2d6bc622e31" width="700px" height="auto" alt="callStack" >



## 실행 컨텍스트(Execution Context)는 어떻게 생겼을까?
### 실행 컨텍스트의 구성
실행 컨텍스트는 LexicalEnvironment와 VariableEnvironment 컴포넌트로 구성되어있다.

실행 컨텍스트를 수도 코드로 나타내면 다음과 같다.
```js
ExecutionContext = {
   LexicalEnvironment: {
      EnvironmentRecord: <ref. to LexicalEnvironment in memory>,
      outer: <ref. to LexicalEnvironment in memory>,
      ThisBinding: < ... >,
   }
   VariableEnvironment: {
      EnvironmentRecord: <ref. to LexicalEnvironment in memory>,
      outer: <ref. to LexicalEnvironment in memory>,
      ThisBinding: < ... >,
   },
}
```
> 렉시컬 환경(Lexical Environment), 변수 환경(VariableEnvironment) 두 컴포넌트는 기본적으로 Lexical Environment에 대한 참조이다.  
> 처음에는 같은 Lexical Environment를 참조하나 코드 상황에 따라 참조가 바뀌기도 한다. [참고](http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/)

### 렉시컬 환경(Lexical Environment)
> Lexical Environment는 스펙에만 존재하는 '이론상의'객체이다.  
> 따라서 직접 Lexical Environment를 조회하거나 조작하는 것은 불가능하다.
이제 _렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트이다._ 라고 위에서 언급한 내용이 이해가 될 것이다.

렉시컬 환경은 다음과 같은 역할을 한다.

- 콜스택이 실행 순서를 관리한다면, 렉시컬 환경은 스코프와 식별자를 관리한다.
- 렉시컬 환경은 키-값을 가지는 객체 형태의 스코프를 생성하여 식별자를 키로 등록하여 식별자에 바인딩된 값을 관리한다.  
   → 즉, 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 한다.
- 렉시컬 환경은 **환경 레코드** 와 **외부 렉시컬 환경에 대한 참조** 로 구성된다.
- 환경 레코드는 스코프에 포함된 식별자를 등록하고, 등록된 식별자에 바인딩된 값을 관리하는 저장소이다.
- 외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다.  
   → 단방향 링크드 리스트인 스코프 체인 구성

각 렉시컬 환경은 3가지의 컴포넌트로 구성된다.
- Environment Record
- Outer (reference to the outer environment)
- This binding (ES6부터 This 바인딩은 Lexical Environment가 담당한다) 