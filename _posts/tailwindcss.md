---
title: "tailwindcss"
excerpt: "create-react-app 和 create-next-app 的 tailwindcss 配置"
createdate: "2022-05-26"
modifydate: "2023-06-10"
category: "develop"
---

## 安装

```bash
npm install -D tailwindcss postcss autoprefixer
```

## 配置

```bash
npx tailwindcss init -p
```

### React

#### tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Next.js

#### tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 使用

### App.jsx

```jsx
<div className="text-xl">hello</div>
```

使用方法不多BB. 官方文档: [tailwindcss](https://tailwindcss.com/docs/installation)
