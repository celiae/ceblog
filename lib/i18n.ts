import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "site name": "Ceblog",
      "Welcome to Ceblog": "Welcome to Ceblog",
      home: "Home",
      post: "Posts",
      develop: "Develop",
      linux: "Linux",
      "Post list": "Post list",
      search: "Search",
      "Get in posts": "Get in",
      contact: "Contact",
      twitter: "Twitter",
      all: "All",
      tag:"tag"
    },
  },
  zh: {
    translation: {
      "site name": "程博",
      "Welcome to Ceblog": "欢迎来到程博",
      home: "主页",
      post: "文章",
      develop: "开发",
      linux: "Linux",
      "Post list": "博客列表",
      search: "搜索",
      "Get in posts": "所有博客",
      contact: "联系方式",
      twitter: "推特",
      all: "所有",
      tag:"标签"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
