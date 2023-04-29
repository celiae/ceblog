- #Ceblog

  Last update: 2023-04-05
  
  Keywords: next.js blog template; self-built blog;
  
  - ## introduce
  
     **Phenomenon**
  
     The more you learn, the more you forget. Some tools will forget their usage after a long time of use. To check the command manual or official documentation, time is not enough. Sometimes only a little knowledge is needed, and it can be used in many scenarios. Kind of like the rule of 28.
  
     **PURPOSE - TO SAVE TIME**
  
     The original intention of creating this blog is to remember something after learning something, even if it is forgotten in the future. It is set up on the server and can be consulted at any time as long as there is a network.
  
     **How to Blog**
  
     After careful understanding, the source code is actually very simple. To write a blog, you only need to create a **markdown** file in the **\_post** folder, write down some metadata, and the metadata can refer to other **markdown** files; then Just write down the content.
  
  - ## How did these pages
  
     **Initial frame**
  
     According to the example of the next framework, it is adapted into a blog website. I learn and do it through the examples provided by blog-starter-typescript in the next source code. First, I can understand the next framework, and second, I will make a blog by the way.
  
     **Technology stack**
  
     [next.js](https://nextjs.org/) [tailwindcss](https://tailwindcss.com/) [react-i18next](https://react.i18next.com/)
  
     **plugin**
  
     @tailwindcss/typography: The blog information data is extracted from the local file by node and waits for the front-end to get it. The article information is plain text information, which can only be modified by pure element selectors, and the workload is too large. [@tailwindcss/typography](https: //tailwindcss.com/docs/typography-plugin) After configuration, you can modify the md document directly.
  
     **npm build**
  
     Yarn is a front-end package manager created by facebook. The download speed is relatively good, and it is easy to use. You only need to execute it during development, and you can start testing.
  
     npm is the tool used in this project, and its advantage is that it appears early and has the highest compatibility.
  
     ```bash
     npm run dev
     ```
  
  - ## Deployment of the web page
  
     **Docker**
  
     Mainly the use of commands, how to create images, run containers, and manage processes. There is also docker-compose, which is also a tool that can facilitate command line input.
  
     **Alpine Linux**
  
     This release is not used very much, and I don’t know much about it. But I found that it has a very high download volume on dockerhub. After studying it, I found out that this is an extremely lightweight version of Linux. Many applications and images are based on Alpine Linux of.
  
     **Ceblog image**
  
     The **Dockerfile** in this code is also copied from the docker example in the next source code
  
  - ## Link
  
     [Docker](https://hub.docker.com)
  
     [Github](https://github.com/celiae/ceblog)
  
  - ## Summarize
  
     There are a lot of places that I have learned from the open source codes of my predecessors. It is not a shame to learn. Of course, with my wisdom, I can't beat the mature codes that others have already written.
