---
title: random group script
description: 랜덤 뽑기
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2Frandom-image.jpeg?alt=media&token=2fdd3889-e5cd-45ff-a6f7-e5a11aecf871
writer: kingsjw7
date: 2022-09-03
---

# 랜덤 그룹 구하기 script

```js
  const people = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'j'];

  function generateGroupV2(people, segment) {
    const totalGroupCount = Math.ceil(people.length / segment);
    const result = {};

    for (let i = 0; i < totalGroupCount; i++) {
      const randomIndex = Math.floor(Math.random() * people.length);
      const driver = people.splice(randomIndex, 1)[0];

      result[`${driver}네 조`] = [];
    }

    let i = 0;

    while (people.length) {
      const groupNames = Object.keys(result);
      const randomIndex = Math.floor(Math.random() * people.length);
      const passenger = people.splice(randomIndex, 1)[0];

      result[groupNames[i]].push(passenger);
      i = (i + 1) % totalGroupCount;
    }

    return result;
  }

  generateGroupV2(people, 3);
```
