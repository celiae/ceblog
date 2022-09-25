# ceblog

- ## introduce

  **Phenomenon**

  The more you learn, the more you forget. Some tools will forget their usage after a long time of use. Go to the command manual or official documentation, time is not enough. Sometimes just a little knowledge can be used in many scenarios. Kind of like the rule of 28.

  **Purpose - Save time**

  The original intention of creating this blog is to be able to write it down after learning something, and it will be fine even if you forget it later. And it is set up on the server, as long as there is a network, you can check it at any time.

  **How ​​to blog**

  After careful understanding, the source code is actually very simple. To write a blog, you only need to create a **markdown** file in the **\_post** folder, write down some metadata, and the metadata can refer to other **markdown** files; then Just write it down.

- ## how to do these pages

  **Initial frame**

  According to the example of the next framework, it is adapted into a blog website. I learn and do it through the examples provided by blog-starter-typescript in the next source code. First, I can understand the next framework, and secondly, I will make a blog.

  **Plugin**

  I replaced remark (markdown to html library) with marked, **marked can render tables** which is more useful. Changed the page template and used the **mui** component library.

  **yarn**

  This is a front-end package manager created by facebook. The download speed is relatively good, and it is easy to use. You only need to execute it during development, and you can start testing.

  ```sh
  yarn dev
  ```

- ## Deployment of web pages

  **Docker**

  Mainly the use of commands, how to create images, run containers, and manage processes. docker-compose is also a tool that can facilitate command line input.

  **Alpine Linux**

  This distribution is not usually used and I don’t know much about it. But I found that it has a very high download volume on dockerhub, and after studying it, I found out that this is an extremely lightweight version of Linux. Many applications and images are based on Alpine Linux of.

  **Ceblog image**

  The **Dockerfile** in this code is also copied from the docker example in the next source code

- ## Link

  [Docker](https://hub.docker.com)

  [Github](https://github.com/celiae/ceblog)

- ## Summarize

  There are many places that I have learned from the open source code of my predecessors, so it is not shabby to learn. With my wisdom, of course, I can't beat the mature code that others have written.
