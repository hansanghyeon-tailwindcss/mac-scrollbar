# tailwindcss-mac-scrollbar

Tailwind CSS v4 compatible plugin for creating beautiful Mac-style scrollbars with enhanced customization features.

**✨ v2.1 New Features:**
- Size customization utilities (w-1~4, h-1~4)
- Extended color palette with dark variants
- Opacity control (light, medium, dark)
- Auto theme color matching
- Arbitrary value support with Tailwind v4 syntax

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

### Scrollbar Size (New in v2.1!)

**Method 1: Size Utility Classes**

```html
<!-- Width: 4px, 8px, 12px, 16px -->
<div class="mac-scrollbar mac-scrollbar-w-1">Small width</div>
<div class="mac-scrollbar mac-scrollbar-w-2">Medium width</div>
<div class="mac-scrollbar mac-scrollbar-w-3">Large width</div>
<div class="mac-scrollbar mac-scrollbar-w-4">Extra large width</div>

<!-- Height: 4px, 8px, 12px, 16px -->
<div class="mac-scrollbar mac-scrollbar-h-1">Small height</div>
<div class="mac-scrollbar mac-scrollbar-h-2">Medium height</div>
<div class="mac-scrollbar mac-scrollbar-h-3">Large height</div>
<div class="mac-scrollbar mac-scrollbar-h-4">Extra large height</div>
```

**Method 2: CSS Custom Properties**

```html
<div class="mac-scrollbar [--tw-mac-scrollbar-size-w:8px] [--tw-mac-scrollbar-size-h:8px]">
  <!-- Custom sized scrollbar -->
</div>
```

### Scrollbar Colors (Enhanced in v2.1!)

**Basic Colors:**
```html
<div class="mac-scrollbar mac-scrollbar-blue">Blue scrollbar</div>
<div class="mac-scrollbar mac-scrollbar-red">Red scrollbar</div>
<div class="mac-scrollbar mac-scrollbar-green">Green scrollbar</div>
```

**Dark Variants (New!):**
```html
<div class="mac-scrollbar mac-scrollbar-blue-dark">Dark blue</div>
<div class="mac-scrollbar mac-scrollbar-gray-dark">Dark gray</div>
<div class="mac-scrollbar mac-scrollbar-green-dark">Dark green</div>
<div class="mac-scrollbar mac-scrollbar-red-dark">Dark red</div>
```

**Opacity Variants (New!):**
```html
<div class="mac-scrollbar mac-scrollbar-light">Light opacity</div>
<div class="mac-scrollbar mac-scrollbar-medium">Medium opacity</div>
<div class="mac-scrollbar mac-scrollbar-dark">Dark opacity</div>
```

**Special Variants (New!):**
```html
<div class="mac-scrollbar mac-scrollbar-auto">Auto theme color</div>
<div class="mac-scrollbar mac-scrollbar-transparent">Transparent</div>
```

Available colors: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

### Custom Colors & Arbitrary Values

**Method 1: CSS Custom Properties**
```html
<div class="mac-scrollbar" style="--tw-mac-scrollbar-color: rgb(255 0 128);">
  <!-- Custom color scrollbar -->
</div>
```

**Method 2: Tailwind v4 Arbitrary Values**
```html
<div class="mac-scrollbar [--tw-mac-scrollbar-color:#ff6500]">
  <!-- Arbitrary value with Tailwind v4 syntax -->
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
| `.mac-scrollbar-{color}-dark` | Dark color variants (v2.1+) |
| `.mac-scrollbar-light/medium/dark` | Opacity variants (v2.1+) |
| `.mac-scrollbar-auto` | Auto theme color (v2.1+) |
| `.mac-scrollbar-transparent` | Transparent scrollbar (v2.1+) |
| `.mac-scrollbar-w-{1-4}` | Width sizing (4px-16px) (v2.1+) |
| `.mac-scrollbar-h-{1-4}` | Height sizing (4px-16px) (v2.1+) |

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
