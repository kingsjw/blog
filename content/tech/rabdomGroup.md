---
title: random group script
description: 랜덤 그룹 뽑기
coverImage: https://firebasestorage.googleapis.com/v0/b/kingsjw7-8d984.appspot.com/o/tech%2Frandom-image.jpeg?alt=media&token=2fdd3889-e5cd-45ff-a6f7-e5a11aecf871
writer: kingsjw7
date: 2022-09-03
---

# 랜덤 그룹 뽑기 script

```js
  const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'S', 'Y', 'Z'];

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

  generateGroupV2(people, 4);
```

<iframe src="https://codesandbox.io/embed/random-group-script-c8p7jg?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="random-group-script"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
