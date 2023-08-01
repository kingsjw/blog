---
title: 리액트 컴포넌트 합성 활용하기
description: 리액트 컴포넌트 개발 잘하기
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2FreactLogo.png?alt=media&token=b1110d54-6d5b-47fc-afd0-cc5c6895af0a
writer: kingsjw7
date: 2023-07-31
---

# 리액트 컴포넌트 합성 활용하기

아래와 같은 약관 동의 컴포넌트가 있다고 가정해봅시다.

```tsx
<TermsCheckBox checked={false} onChange={() => {}} />
```

<img src="https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2Freact-component-composition-useCase%2FtermsCheckBox.png?alt=media&token=4ddeccb7-791d-47f5-9070-adb3fea02015" width="300px" art="약관 동의 컴포넌트 이미지" />

## AS-IS

약관 동의 컴포넌트는 보통 약관을 동의 했을 경우와 아닌 경우에 따라 다른 액션을 취하기 위해 결제 버튼, 카드 등록 버튼 등 여러 컴포넌트와 함께 사용됩니다.  
컴포넌트 로직을 작성한다면 보통 이런식으로 사용되기 쉬울 것입니다.  
하지만 이는 관심사를 적절히 나누지 못한 컴포넌트입니다.

```tsx
const Component = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setState(!checked);
  };

  return (
    <>
      <TermsCheckBox checked={checked} onChange={handleCheck} />
      <SomeComponent hasAgreed={checked} />
    </>
  );
};
```

잘 생각해보면 아래 로직은 TermsCheckBox를 감싸고 있는 부모 Component에 관심사가 아니기 때문인데요.  
아래 로직은 TermsCheckBox에 상태 관리 로직이기 때문에 부모 Component에 관심사가 아니라 TermsCheckBox에 관심사일 것입니다.

```ts
const [checked, setChecked] = useState(false);

const handleCheck = () => {
  setState(!checked);
};
```

## TO-BE

컴포넌트에 관심사에 따라 로직을 적절히 분리하고 컴포넌트가 여러 곳에서 다양한 컴포넌트와 함께 적절히 합성 될 수 있도록 개선한다면 다음과 같이 개선할 수 있을 것입니다.  
부모 Component에 존재한던 상태 관리 로직을 TermsCheckBox로 옮기고 다른 컴포넌트와 합성이 가능하도록 TermsCheckBox가 children을 받을 수 있게 합니다.

```tsx
const Component = () => (
  <TermsCheckBox checked={false}>
    {({ hasAgreed }) => <SomeComponent hasAgreed={hasAgreed} />}
  </TermsCheckBox>
);
```

이렇게하면 컴포넌트의 재사용성이 증가하고 유지보수가 쉬워지기 때문에 우리가 바라는 변화의 유연한 컴포넌트가 될 수 있습니다.
