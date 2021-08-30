---
title: AOS에서 v-model data 바인딩 이슈
description: Vue 개발 관련 이슈
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-f7e06.appspot.com/o/images%2Ftech%2Fcategories%2Fvue.png?alt=media&token=66e525dd-a850-43e2-85ce-19059891f8ee
writer: kingsjw7
---

# AOS에서 v-model data 바인딩 이슈

v-model은 사용자 입력에 대한 데이터 값을 쉽게 양방향 바인딩을 할 수 있게해주는 vue 디렉티브이다.

<br/>

## 문제
#### 모바일(안드로이드)에서 v-model를 사용해서 문자를 입력했는데 data가 입력과 동시에 바인딩 되지 않음
> 예를들어 이메일을 복사해서 input에 붙여넣기를 했음에도 불구하고 붙여넣기 즉시 입력한 문자가 바인딩 되지 않음

## 원인
문자가 완성되는 시점을 알 수 없기 때문에 input에 포커스가 한번 아웃되거나 다른 문자를 입력하는 등의 이벤트가 발생해야 데이터가 바인딩되는 것

## 해결
v-model를 사용하지 않고 input 이벤트를 사용해 v-model 동작을 직접 구현함
기존에 문제가 되는코드
```html
<input v-model="value">
```
문제가 해결된 코드
``` html
<input :value="value" v-on:input="value = $event.target.value">
```
