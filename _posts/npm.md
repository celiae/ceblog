---
title: "NPM"
excerpt: "理解package.json"
createdate: "2022-11-04"
modifydate: "2022-11-04"
category: "develop"
---

## 现象

拿npm举例

```bash
npm install <package>
```

npm install <package> 等于 npm install --save <package>. 它会将包列入到 package.json 中的 "dependencies" 对象里.

```bash
npm install --save-dev <package>
```

--save-dev 会列入到 "devDependencies"  中

## 意义

dependencies: 是项目软件建造时需要的包

devDependencies: 是开发项目时所必须的包
