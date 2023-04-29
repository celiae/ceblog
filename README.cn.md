# Ceblog

最后更新：2023-04-05

关键词语：next.js 博客模板；自建博客；

- ## 介绍

  **现象**

  学得越多,忘记越多.有些工具很久不用之后就会忘记它的用法.去查看命令手册或是官方文档,时间不够用.有时候只需要那一点点知识,就可以用在很多场景.有点像 28 定律.

  **目的-节约时间**

  这个博客创建的初衷就是为了自己在学完一些东西之后能够记下来,以后就算遗忘也无大碍.并且架设在了服务器上,只要有网随时可以查阅.

  **怎么写博客**

  经过仔细了解,源码其实很简单.写博客只用在 **\_post** 文件夹下创建 **markdown** 文件,写下一些元数据,元数据可以参照其他 **markdown** 文件;再写下内容即可.

- ## 怎么做的这些页面

  **初期的框架**

  根据 next 框架的例子,改编而成博客网站.我通过 next 源码中 blog-starter-typescript 提供的例子边学边做.一可以了解 next 框架,二顺带做个博客.

  **技术栈**

  [next.js](https://nextjs.org/) [tailwindcss](https://tailwindcss.com/) [react-i18next](https://react.i18next.com/)

  **插件**

  @tailwindcss/typography: 博客信息数据是 node 从本地文件中提取再等待前端获取，文章信息是纯文本信息，只能通过纯元素选择器修饰，工作量太大， [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)配置好后，可以直接修饰 md 文档。

  **npm 构建**

  yarn 是 facebook 搞出来的前端包管理器. 下载速度比较优秀,使用简单.开发时只用执行,就可以开始测试.

  npm 是本项目所使用的工具，优点是出现时间早兼容性最高。

  ```bash
  npm run dev
  ```

- ## 网页的部署

  **Docker**

  主要是命令的使用,怎么创建镜像,运行容器,管理进程.还有 docker-compose 也是一个可以方便命令行输入的工具.

  **Alpine Linux**

  这个发行版平时不怎么用,也不太了解.但是我发现它在 dockerhub 上下载量非常的高,学习了一下才发现这是一个极为轻量版的 Linux.很多应用,镜像都是基于 Alpine Linux 的.

  **Ceblog image**

  此代码中的 **Dockerfile** 也是从 next 源码中关于 docker 例子复制下来的

- ## 链接

  [Docker](https://hub.docker.com)

  [Github](https://github.com/celiae/ceblog)

- ## 总结

  有很多地方是我借鉴于前辈们开源代码得来的,学习嘛不寒碜.以我的智慧,当然打不过别人已经写好了的成熟的代码.
