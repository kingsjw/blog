---
title: 야놀자 화이트 라벨 프로젝트 회고
description: 프로젝트 회고
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2FyanLogo.jpeg?alt=media&token=d8ea81b3-eb48-442e-bb9c-bbae750294f9
writer: kingsjw7
date: 2021-01-10
---

# 야놀자 화이트 라벨 프로젝트 회고
> 코로나 이후 해외여행 서비스는 크게 위축되었고 더는 b2c 서비스만으로는 회사가 생존하기 힘든 지경에 이르게되는데...

<br>

## 프로젝트 설명
야놀자로부터 숙소와 레저 상품을 공급받아 화이트라벨 형태로 여러 제휴사에 제공하여 위탁판매하는 사업이다.

<br>

## 나의 역할
Front-end 개발

<br>

## 개발

### 내가 개발한 것
프론트엔드 개발은 총 2명이 작업했다. 

서로 개발 영역을 나누었으나 프로젝트 후반으로 갈 수 록 바빠져서 그때그때 좀 더 여유로운 사람이 구분 없이 작업했기 때문에 "내가 개발한 것"에 정의가 모호하다.

그러므로 "내가 개발한 것"의 정의는 나의 설계대로 개발된 것으로 하겠다.

- 상품(레저) 검색

  - 검색 자동완성
    - 검색어 입력 시 자동완성 리스트가 보이고 선택하여 검색이 가능하도록 한다.
    - 숙소 검색 부분에서도 사용할 수 있도록 추상화했다.
    
  - 최근 검색
    - 최근 검색한 키워드 리스트가 보여지고 선택하여 검색이 가능하도록 한다.
    - 최근 검색한 키워드 저장은 브라우저 로컬스토리지를 사용했다.

  - 인기 키워드
    - 인기 키워드를 리스트가 보여지고 선택하여 검색이 가능하도록 한다.
    - 숙소에서도 사용할 수 있도록 추상화했다.

  - 검색 결과
    - 검색 결과 리스트가 보여지고 선택하여 상세정보로 이동이 가능하도록 한다.
    - vuex를 사용해 검색결과 data를 store에 캐싱 처리하였다.

  - 지도 검색
    - 지도에 검색 결과를 노출하고 선택하여 상세정보로 이동이 가능하도록 한다.
    - 구글지도를 사용했다.
    - 숙소에서도 사용할 수 있도록 추상화했다.

- 상품 상세(레저)

  - 정보 노출
    - 상품 정보, 이미지, 사용안내, 환불 정보, 판매자 정보, 주소 등이 텍스트나 팝업에 형태로 보인다.

  - 상품 선택
    - 상품 리스트가 보이고 선택할 수 있다.

- 결제(숙박, 레저)

  - 결제 정보 노출
    - 결제할 상품 정보, 사용 안내, 규정 및 약관 등이 텍스트나 팝업에 형태로 보인다.

  - 본인인증
    - 본인에 전화번호 입력하고 인증번호를 입력하여 본인인증을 할 수 있다.

  - 결제
    - 선택한 상품에 대한 PG 결제 페이지로 이동한다.

- 예약 내역 조회 및 취소(숙소, 레저)

  - 예약 리스트
    - 본인이 예약한 상품이 리스트 형태로 보이고 선택하여 상세 정보로 이동이 가능하도록 한다.

  - 예약 상세
    - 예약 내역에 대한 상세 정보가 텍스트나 팝업에 형태로 보인다.

  - 예약 취소

- 기획전(숙소, 레저)
  - 어드민에서 설정한 기획전을 노출한다.

- 크로스브라우징 처리
  - 요구사항에 따라 ie 10까지 모든 동작이 가능하도록 처리했다.

- 배포환경 세팅
  - 젠킨스를 사용해서 CI/CD 환경을 세팅했다.

<br>

### 개발한 것중 기억에 남는 것
참고로 이 프로젝트는 vue를 사용했다.
- data 그룹핑하기
    - 아래와 같은 data를 id와 status가 같은거끼리 그룹핑해보자!
  > ```js
  > const arrReservedList = [
	>   {
	>	  id: 76,
	>	  status: 'reserved',
	>	  name: '상품1'
	>   },
	>   {
	>	  id: 76,
	>	  status: 'reserved',
	>	  name: '상품1'
	>   },
	>   {
	>	  id: 76,
	>	  status: 'canceld',
	>	  name: '상품1'
	>   },
  > ].reduce((result, obj) => (
  >  {
  >     ...result,
  >     [`${obj.id}-${obj.status}`]: (result[`${obj.id}-${obj.status}`] || []).concat(obj),
  >   }
  > ), {});
  > console.log(arrReservedList);
  > // 결과: 짜잔 요렇게 그룹핑이 되었다. 새삼 느끼는거지만 reduce는 정말 편리하다.
  > {
  >   { 76-canceld: [{ id: 76, status: "canceld", name: "상품1" }]},
  >   { 76-reserved: [{ id: 76, status: "reserved", name: "상품1" }, { id: 76, status: "reserved", name: "상품1" }]}
  > }
  > ```
- 상품 검색결과 데이터 캐싱 처리
  - store를 통해 data에 상태를 관리하고 불필요한 api 통신을 최소화하자!
  > ```js
  > // data를 store에 저장하기 실행
  > const data = [{ data1 }, { data2 }];
  > const key = 키 생성;
  >  this.$store.commit('save',{ key, data });
  >
  > // 저장하기 동작이 실행되는 함수
  > setRecentSearch(state, objData) {
  >  state.data[objData.key] = {
  >    list: (state.data[objData.key] ? state.data[objData.key].list : []).concat(...objData.data),
  >    timestamp: data.timestamp,
  >  };
  >},
  >
  > // data를 API를 통해 조회하는 곳
  > const key = 키생성;
  > const objStoreData = store;
  > if (objStoreData[key] && ((new Date().getTime() - objStoreData[key].timestamp) / 1000) < 300) {
  >   // store에 저장되어 있는 data에 timestamp는 api 조회 시 store에 저장함
  >   // data 조회 후 5분이 지나지 않았다면 store에 저장되어 있는 data를 쓰자
  >} else{
  >   // 새로 data를 조회하자
  >}
  > ```
  >~~기억에 남는게 2가지 밖에 없음? 하고 딴지를 걸 수 있겠지만 절대 귀찮아서 2개만 적은게 아니다.~~
<br>

### 실수하고 해결한것
- 냄새나는 코드 못본척 함
  > 냄새나는 코드의 정의는 여러 가지가 있을 수 있다. \
  > 예를 들어 변화에 유연하지 못한 코드, 복잡하고 난잡한 조건식 등이 있을 수 있겠다. \
  > 이런 코드들은 그야말로 암 덩어리이며, 심각한 버그를 초래할 가능성이 크다. \
  > 냄새나는 코드를 발견한다면 되도록 그 즉시 수정하거나 최소한 메모라도 해두어야한다. \
  > 냄새나는 코드를 발견했음에도 바쁘다는 핑계로 "나중에 수정하자.. 문제없겠지.."라고 넘기는 경우가 있었다. \
  > 그로부터 한 달 후 버그가 발생했고 다행히 심각한 이슈는 아니었으나 굉장히 부끄러웠다. \
  > 이후에는 냄새나는 코드 발견 시 되도록 그 즉시 수정했고 그러지 못한 상황이라면 메모 후에 팀원과 공유했다. \
  > 추가로 작은 변화 사항이라도 팀원과 공유하도록 했다.
<br>

### 아쉬운점
크게 2가지가 있다.
- 주먹구구식 코드리뷰
  > 1주일에 1번 코드리뷰를 진행하기는 했으나 큰 의미는 없었던 거 같다.\
  > 바쁘다는 이유로 하지 않거나 까먹고 넘기는 경우가 비일비재했다. \
  > 리뷰에 대한 절대적 규칙을 정의하지 아니하고 서로 1주일간 본인이 작성한 코드를 공유하는 시간에 불과했다. \
  > 후에는 이러한 일이 없도록 해야겠다.
- 뒷북치기
  > 회의 중 내가 담당하는 것에 대해 조금이라도 이슈라고 생각되는 것이 있다면 그 즉시 의견을 전달해야 하나 그러지 못하였다. \
  > 이유는 해당 이슈에 대해서 머릿속에서 정리가 되지 않았고 굉장히 모호한 부분이 많았기 때문이다. ~~핑계다~~ \
  > 문제를 발견했을 때 해결하지않고 넘어간다면 후에는 더 큰 문제로 다가온다. \
  > 이는 심각한 시간 낭비로 초래한다. \
  > 후에 심각한 이슈는 아니었으나 실제로 이슈가 발생했고 그제야 이슈 라이징을 했다. \
  > 결국, 1번 일해도 되는 것을 2번 일하는 경우가 생겼다. \
  > 앞으론 이슈라고 생각되는 점이 있다면 애매하거나 생각이 정리되지 않더라도 먼저 이슈라이징을 하고 시간이 조금 걸리더라도 생각을 정리한 후에 다시 의견을 공유해야겠다.
<br>

### 정리
총 6개월이라는 프로젝트 기간 동안 정말 다사다난했다...

코로나 시기에 하는 여행 서비스 개발이었지만 아이러니하게도 규모, MAU, 매출액은 참여했던 프로젝트 중 가장 컸다.
커머스 프로젝트는 처음 참여해보았는데 재밌었다.

무엇보다 처음으로 결제가 발생했을 때 제일 신났다.

이 프로젝트 참여를 통해 실적과 별개로 내가 얻은 성과는 크게 2가지인 거 같다.

첫 번째는 개발자로서 스킬 향상과 커머스 프로젝트 경험

두 번째는 나는 누구와 일하고 싶은가? 에 대한 생각 정립

특히 두 번째 성과가 크게 와 닿는다.

이 생각을 정립하는 것이 나에 성장에 있어서 굉장히 중요한 요소라고 생각이 들었다.

나는 **"오직 문제를 해결하는 것에 집중할 수 있는, 끊임없이 성장하고자 하는 조직 혹은 사람과 일하고 싶다."**

모두 고생한 프로젝트인 만큼 결과도 순항 중이라 다행이다.

벌써 개발자가 된 지 2년이 되었다.

2021년에는 내 주위 사람들 모두 뜻하는 바를 이루었으면 좋겠다.

