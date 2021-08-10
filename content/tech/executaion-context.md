---
title: JS Execution Context
description: JS 실행 컨텍스트 이해하기(작성중)
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Ftech%2Fcategories%2Fjavascript.png?alt=media&token=8e6d3d30-1416-4484-bb0a-163d529a5d99
writer: kingsjw7
---

# JS Execution Context
> Java Script의 핵심 동작원리 중 하나인 Execution Context(실행 컨텍스트)를 내가 이해한 만큼 기록해보자

## 실행 컨텍스트(Execution Context)는 무엇일까?
- Java Script 기본 동작 원리 중 하나이다.
- ECMA 스펙에서 실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이라고 정의한다.
- **실행 가능한 코드가** 실제로 실행되고 관리 되는 영역을 의미한다.
- Java Script 엔진이 코드를 실행할 때 필요한 정보를 의미한다.

## 실행 컨텍스트(Execution Context)는 언제 만들어질까?
Java Script 엔진은 소스 코드를 평가와 실행, 2가지의 과정으로 나누어 동작한다.

평가 과정에서 **실행 가능한 코드(Execution Code)** 를 만나면 그 코드를 평가해서 **실행 컨텍스트(Execution Context)** 로 만든다.

이 때 **실행 가능한 코드** 는 다음과 같다.
- 전역 코드: 전역의 정의된 함수 (클래스의 내부는 포함 x)
- 함수 코드: 함수 내부에 존재하는 코드 (함수 내부에 중첩된 클래스, 함수 내부 코드는 포함 x)
- eval 코드: eval 함수 (모던 Java Script에선 잘 쓰이지 않는다. 이유는 따로 언급 하지 않겠다.)
> 위 **실행 가능한 코드(Execution Code)** 에 따라서 **실행 컨텍스트(Execution Context)** 를 초기화하는 환경과 과정이 다르다.


> 평가가 끝나면 코드를 순차적으로 실행하고 종료한다. \
> *(이 부분은 추후 Event Loop, Task queue, Call Stack, Heep memory의 관계 정리 글을 작성하며 다뤄보도록 하겠다.)*


## 실행 컨텍스트(Execution Context)는 어떤 모양일까?



