---
title: "开发命令"
excerpt: "用 Bash 的方式一键创建项目, 自动在项目中添加和配置插件"
createdate: "2023-02-26"
modifydate: "2023-04-7"
category: "develop"
---

## Vite

首先使用 Vite 搭建其项目. Vite是一个专门构建前端项目的手脚架, 优点是轻量, 缺点是不稳定, 不适合生产环境(目前). 生产环境推荐官方的 vue-cli .

```bash
npm create vite@latest
```

等待片刻, 命令行会弹出框架的选择. 我们选择 React.

### React

React 并不是框架, 严格来讲, 它是一个 `js` 库. 因为是比较早出现的, 且在当时相对其他前端库更优秀更易使用, 所以生态积累得足够丰富. 现成的 React 框架有: Next.js Remix.js Gastby.js 等等. React 原生脚手架 create-react-app 很久没更新, 但很适合喜欢用纯 React , 而不是现成框架的人.

#### 安装插件

正因为生态丰富, 且很多非官方的库也很热门, 选定技术栈就成了新手的噩梦.

##### react-router

现成的框架不需要配置路由, 例如: Next.js. 它们这些框架只需要在 pages 文件夹中按规则新建文件就能映射成为路由. 而如果是使用的纯 React, 那就需要一个好用的路由库. 在 React 生态中, 光路由库就有好几个. react-router 是目前比较主流的. 

```bash
npm i react-router-dom
```

##### redux

当管理的变量过多, 原生的 useContext 配置的较为繁琐. 这个时候 Redux 就可以派上用场.

```bash
npm i @reduxjs/toolkit react-redux
```

##### react-icons

以前用图标会去找 fontawesome, bootstrap, 或者UI库里自带的图表库. React Icons 收录了二者(fontawesome bootstrap)多数图标, 还集成了很多其它图标库. 很丰富.

```bash
npm i react-icons
```

##### UI

对于 UI, 这里提供两种各具特色的方案. MUI 是 UI 库, 可以避免造论子, 但是无法做到或者很难做到定制化的界面, 实际项目中不是很推荐. 因为老板或客户常常有自己的一套审美. TailwindCSS 和 Bootstrap 很像, 不过 TailwindCSS 是 CSS 在 React 上的解决方案. 有点是可以做更细化的 UI 设计, 缺点是需要造轮子. 在工作中很好用. 生存必备.

*二者只能选一个, 否则会造成样式混乱, 难以管理.*

###### mui

```bash
npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid  
```

###### tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
```

tailwindcss 具体配置方法可在文章 tailwindcss 一篇中找到, 这里只展示大概流程.

补充一句, React 很多都不是官方插件, 比如路由. 东西不难选择难, 如果有被搞到, 使用 Vue 或 Nuxt 吧.

#### 开发

启动项目开发环境后, 会在本地建立一个网站服务, 默认端口在 3000. `ctrl` + 单击或者浏览器地址栏输入之都可以看到效果

```bash
npm run dev
```

#### 构建生产应用

将 React 组件编译成浏览器能识别的 html/css/js, 能部署在服务器中.

```bash
npm run build
```

#### 脚本模板

```bash
project_name=$1
npm create vite@latest $project_name
cd $project_name
npm install react-router-dom @mui/material @emotion/react @emotion/styled @reduxjs/toolkit react-redux react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
echo
"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
" > tailwind.config.cjs
echo
"
@tailwind base;
@tailwind components;
@tailwind utilities;
" > ./src/index.css
npm run build
npm run dev
```

