import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Greeting = () => {
  const { t } = useTranslation();
  const greeting = t("Welcome to Ceblog");
  const [text, setText1] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(greeting.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [greeting, text]);
  return (
    <div>
      <span className="mr-1 md:text-xl lg:text-2xl">{text}</span>
      <span
        className="absolute animate-blink w-2 h-6 
        bg-black dark:bg-white
      md:h-8 lg:h-10"
      ></span>
    </div>
  );
};

export default Greeting;
