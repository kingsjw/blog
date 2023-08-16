---
title: JS 호이스팅
description: JS 호이스팅 정리
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2Fhoisting%2Fhoi.jpeg?alt=media&token=de3681c2-2e4e-4141-a431-f14d6bb2fd6f
writer: kingsjw7
date: 2023-08-16
---

# JS 호이스팅

자칫 햇갈리기 쉬운 JS 호이스팅 개념에 대해 정리하고자한다.

## 호이스팅이란?

> JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.  
> 출처: [MDN](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

호이스팅이란 결국 JS에 동작 중 하나로 코드의 구조와 흐름을 이해하고 예측하기 쉽게 해주는 동작 규칙이라고 이해할 수 있다.

## 호이스팅 규칙

호이스팅은 몇가지 규칙만 알면 이해하기 쉽다.

- 호이스팅 대상 코드는 최상단으로 끌어올려짐
- 호이스팅 대상 코드는 할당문을 만나기 전까지 기본값 undefined 할당
- 선언문만 호이스팅 대상

아래 코드를 보면 foo 변수가 선언도 되기 전에 접근해서 출력했더니 에러가 발생하지 않고 undefined가 출력된다.  
이는 foo 변수가 var 선언문으로 선언되어 var foo 선언문이 호이스팅으로인해 최상단으로 끌어올려져서 기본값 undefined로 할당되었기 때문이다.

이후 foo = 1 할당문을 만나서 1이 foo 변수에 할당되었기 때문에 최하단에서 foo가 1로 출력이 되는 것이다.

```js
console.log(foo);
// undefined

var foo = 1;

console.log(foo);
// 1
```

여기서 주의할 점!  
let, const 선언문은 아래처럼 코드를 실행하면 Uncaught ReferenceError: foo is not defined 에러가 발생한다.  
foo를 참조할 수 없다는 것인데, 그 이유는 let 혹은 const 선언문은 호이스팅에 undefined로 기본값이 할당되지 않기 때문에 실제 값이 할당 되기 전에 참조하게 되면 참조할 수 없다는 예외가 발생하는 것이다.  
이것을 시간상 사각지대"(Temporal Dead Zone, TDZ)"라고 부른다.

```js
console.log(foo);
// Uncaught ReferenceError: foo is not defined

const foo = 1;
```

그런데 왜 var는 undefined로 미리 할당을 해주고 let, const는 그렇게 해주지 않을까?  
그건 바로 var와 let, const 코드가 평가되어 관리되는 영역 다르기 때문에, 즉 서로 관리되는 렉시컬 환경이 다르기 때문이다.  
var는 렉시컬 환경에 객체환경 레코드에서 관리되고 let, const는 랙시컬 환경에 선언적 환경 레코드에서 관린되다.  
이 차이 때문에 var는 함수 레벨 스코프를 가지고 let, const는 블록 레벨 스코프를 가지는 것이다.
