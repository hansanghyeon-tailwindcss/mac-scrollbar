# mac-scroll-bar

- npm https://www.npmjs.com/package/@hyeon/mac-scrollbar
- github https://github.com/Hansanghyeon/mac-scrollbar

## preview

<a href="https://hansanghyeon.github.io/mac-scrollbar/">
<img width="1462" alt="mac-scrollbar 미리보기" src="https://user-images.githubusercontent.com/42893446/234755906-5f5101b9-2fec-4738-ada8-c92aeea657db.png"></a>

## tailwind plugin 사용하기

해당플러그인을 적용하면 기본적으로 모든 스크롤바에 스타일이 변경된다.

```bash
npm install -D @hyeon/mac-scrollbar
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@hyeon/mac-scrollbar')],
}
```

```html
<div class="mac-scrollbar mac-scrollbar-x mac-scrollbar-y scrollbar-hidden">test</div>
```

<!--
## 제작하면서 참고

- https://dev.to/vborodulin/custom-ios-style-css-scroll-bar-with-side-paddings-18ke
- https://codepen.io/kqlambert/pen/DQKxNX
 -->