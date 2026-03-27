# Design System - ScanBar

## Màu sắc

### Màu chính
- `#7fb3ff`
- `#b8a4ff`
- `#4a8cff`
- `#8a5cff`

### Màu phụ
- `#ff9f6e`
- `#ffe957`
- `#f32b2b`
- `#33cd1a`

### CSS Variables (đề xuất)
```css
:root {
  --color-primary-100: #7fb3ff;
  --color-primary-200: #b8a4ff;
  --color-primary-300: #4a8cff;
  --color-primary-400: #8a5cff;

  --color-secondary-orange: #ff9f6e;
  --color-secondary-yellow: #ffe957;
  --color-secondary-red: #f32b2b;
  --color-secondary-green: #33cd1a;
}
```

### Tailwind Tokens (đề xuất)
```js
colors: {
  primary: {
    soft: '#7fb3ff',
    light: '#b8a4ff',
    DEFAULT: '#4a8cff',
    strong: '#8a5cff',
  },
  secondary: {
    orange: '#ff9f6e',
    yellow: '#ffe957',
    red: '#f32b2b',
    green: '#33cd1a',
  },
}
```

## Gradient

### Mix 2 màu
- `linear-gradient(135deg, #7fb3ff 0%, #b8a4ff 100%)`

### Mix 3 màu
- `linear-gradient(135deg, #4a8cff 0%, #7fb3ff 50%, #b8a4ff 100%)`

