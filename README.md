# tailwindcss-mac-scrollbar

Tailwind CSS v4 compatible plugin for creating beautiful Mac-style scrollbars with enhanced customization features.

**✨ What’s inside**
- CSS-only Mac 스타일 스크롤바 (`.mac-scrollbar`, `.mac-scrollbar-y`, `.mac-scrollbar-x`, `.mac-scrollbar-all`, `.scrollbar-hidden`)
- Tailwind CSS v4 플러그인 동적 유틸: `mac-scrollbar-w-[…]`, `mac-scrollbar-h-[…]`, `mac-scrollbar-color-[…]` (임의값 지원)
- CDN 또는 로컬 CSS 그대로 사용 가능 (플러그인 없이도 사용 가능)

- npm https://www.npmjs.com/package/tailwindcss-mac-scrollbar  
- github https://github.com/Hansanghyeon/tailwindcss-mac-scrollbar

## Preview

<a href="https://hansanghyeon.github.io/tailwindcss-mac-scrollbar/">
<img width="1462" alt="mac-scrollbar 미리보기" src="https://user-images.githubusercontent.com/42893446/234755906-5f5101b9-2fec-4738-ada8-c92aeea657db.png"></a>

## Installation

```bash
npm install tailwindcss-mac-scrollbar
```

## Usage (Tailwind CSS v4)

### Method 1: Tailwind v4 Plugin (Dynamic utilities)

```css
/* app.css */
@import "tailwindcss";
@plugin "tailwindcss-mac-scrollbar/plugin";
```

이후 원하는 곳에서 Tailwind 클래스처럼 사용하세요:
```html
<div class="mac-scrollbar mac-scrollbar-w-[12px] mac-scrollbar-h-[10px] mac-scrollbar-color-[#1d4ed8] overflow-auto">
  ...
</div>
```

### Method 2: NPM + CSS (Static import)

```bash
npm install tailwindcss-mac-scrollbar
```

```css
/* app.css */
@import "tailwindcss";
@import "tailwindcss-mac-scrollbar";
```

### Method 3: Local Import

```css
/* app.css */
@import "tailwindcss";
@import "./node_modules/tailwindcss-mac-scrollbar/mac-scrollbar.css";
```

### Local demo build (preview)
`preview/` 폴더는 미리보기 전용으로 분리되어 있습니다.
```bash
cd preview
npm install
npm run build
```
빌드 결과: `preview/assets/demo.css`  
웹서버 루트: `preview/` (미리보기 페이지: `preview/index.html`)

### HTML Usage

```html
<!-- Basic mac-style scrollbar -->
<div class="mac-scrollbar" style="height: 200px; overflow: auto;">
  <!-- Your scrollable content -->
</div>

<!-- Vertical scrollbar with animation -->
<div class="mac-scrollbar-y" style="height: 200px;">
  <!-- Your content -->
</div>

<!-- Horizontal scrollbar with animation -->
<div class="mac-scrollbar-x" style="width: 300px;">
  <!-- Your content -->
</div>

<!-- Apply to all child elements -->
<div class="mac-scrollbar-all">
  <!-- All scrollable elements inside will have mac-style scrollbars -->
</div>

<!-- Hidden scrollbar -->
<div class="scrollbar-hidden">
  <!-- Content with hidden scrollbar -->
</div>
```

> Tip: Apply `mac-scrollbar` to the element that actually scrolls (add `overflow-auto`, `overflow-y-scroll`, etc.) or use `mac-scrollbar-all` on a parent to cover its children.

## Customization

### Tailwind v4 plugin (권장)
- 너비: `mac-scrollbar-w-[length]`
- 높이: `mac-scrollbar-h-[length]`
- 색상: `mac-scrollbar-color-[color]`

```html
<div class="mac-scrollbar overflow-auto mac-scrollbar-w-[10px] mac-scrollbar-h-[8px] mac-scrollbar-color-[#0ea5e9]">
  <!-- scrollable content -->
</div>
```

### CSS import만 사용하는 경우
임의값 커스텀 프로퍼티를 직접 지정하세요.
```html
<div class="mac-scrollbar overflow-auto [--tw-mac-scrollbar-size-w:10px] [--tw-mac-scrollbar-size-h:8px] [--tw-mac-scrollbar-color:#0ea5e9]">
  <!-- scrollable content -->
</div>
```

## Migration from v1.x

**Breaking Change**: v2.0+는 Tailwind CSS v4 호환을 위해 CSS-first로 재작성되었습니다.

**v2.2 Notice**: 팔레트 기반 클래스(`mac-scrollbar-blue` 등)와 고정 사이즈 유틸(`mac-scrollbar-w-1` 등)은 제거되었습니다. 대신 Tailwind v4 플러그인의 동적 유틸(`mac-scrollbar-w-[…]`, `mac-scrollbar-h-[…]`, `mac-scrollbar-color-[…]`)이나 CSS 커스텀 프로퍼티를 사용하세요.

If you're upgrading from v1.x (Tailwind CSS v3), you need to:
1. Update to Tailwind CSS v4
2. (선택) `@plugin "tailwindcss-mac-scrollbar/plugin"`을 사용하거나, CSS import 방식으로 교체하세요.

## Browser Support

- Chrome/Safari/Edge (Webkit-based browsers): Full support
- Firefox: Basic support (scrollbar-width: none for hidden scrollbars)
- IE/Legacy Edge: Basic support (-ms-overflow-style for hidden scrollbars)

## Classes Reference

| Class | Description |
|-------|-------------|
| `.mac-scrollbar` | Basic Mac-style scrollbar |
| `.mac-scrollbar-y` | Vertical scrollbar with hover animation |
| `.mac-scrollbar-x` | Horizontal scrollbar with hover animation |
| `.mac-scrollbar-all` | Apply to all child elements |
| `.scrollbar-hidden` | Hide scrollbar completely |
| `mac-scrollbar-color-[...]` | Custom color via plugin |
| `mac-scrollbar-w-[...]` | Custom width via plugin |
| `mac-scrollbar-h-[...]` | Custom height via plugin |
| `[--tw-mac-scrollbar-color:...]` | Custom color via CSS import |
| `[--tw-mac-scrollbar-size-w:...]` | Custom width via CSS import |
| `[--tw-mac-scrollbar-size-h:...]` | Custom height via CSS import |

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--tw-mac-scrollbar-text` | `12, 12, 12` (light), `173, 186, 199` (dark) | Scrollbar thumb color (RGB values) |
| `--tw-mac-scrollbar-size-w` | `6.4px` | Scrollbar width |
| `--tw-mac-scrollbar-size-h` | `6.4px` | Scrollbar height |
| `--tw-mac-scrollbar-color` | - | Custom scrollbar color |

<!--
## 제작하면서 참고

- https://dev.to/vborodulin/custom-ios-style-css-scroll-bar-with-side-paddings-18ke
- https://codepen.io/kqlambert/pen/DQKxNX
-->
