# tailwindcss-mac-scrollbar

Tailwind CSS v4 compatible plugin for creating beautiful Mac-style scrollbars.

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

### Method 1: NPM Package (Production)

Install and import the package:

```bash
npm install tailwindcss-mac-scrollbar
```

```css
/* app.css */
@import "tailwindcss";
@import "tailwindcss-mac-scrollbar";
```

### Method 2: CDN (Quick Start & Playground)

For quick prototyping or playground use:

```html
<!-- Tailwind CSS v4 Browser CDN -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<!-- Mac Scrollbar CSS via jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss-mac-scrollbar@2/mac-scrollbar.css">
```

### Method 3: Local Import

```css
/* app.css */
@import "tailwindcss";
@import "./node_modules/tailwindcss-mac-scrollbar/mac-scrollbar.css";
```

### HTML Usage

```html
<!-- Basic mac-style scrollbar -->
<div class="mac-scrollbar">
  <div style="height: 200px; overflow: auto;">
    <!-- Your scrollable content -->
  </div>
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

## Customization

### Scrollbar Size

Use CSS custom properties to adjust scrollbar size:

```html
<div class="mac-scrollbar [--tw-mac-scrollbar-size-w:8px] [--tw-mac-scrollbar-size-h:8px]">
  <!-- Custom sized scrollbar -->
</div>
```

### Scrollbar Colors

Use predefined color classes:

```html
<div class="mac-scrollbar mac-scrollbar-blue">Blue scrollbar</div>
<div class="mac-scrollbar mac-scrollbar-red">Red scrollbar</div>
<div class="mac-scrollbar mac-scrollbar-green">Green scrollbar</div>
```

Available colors: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

### Custom Colors

Define your own colors using CSS custom properties:

```html
<div class="mac-scrollbar" style="--tw-mac-scrollbar-color: rgb(255 0 128);">
  <!-- Custom color scrollbar -->
</div>
```

## Migration from v1.x

**Breaking Change**: v2.0 is a complete rewrite for Tailwind CSS v4 compatibility. The JavaScript plugin approach is no longer supported.

If you're upgrading from v1.x (Tailwind CSS v3), you need to:
1. Update to Tailwind CSS v4
2. Remove the plugin from your `tailwind.config.js`
3. Use the new CSS import approach shown above

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
| `.mac-scrollbar-{color}` | Colored scrollbar variants |

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
