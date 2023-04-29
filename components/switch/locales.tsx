import i18n from "@/lib/i18n";
import React, { useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";

const Locales = () => {
  const [lngMenu, setLngMenu] = useState(false);

  const locales = [
    { name: "中文", locale: "zh" },
    { name: "English", locale: "en" },
  ];

  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
    setLngMenu(false);
  };
  const toggleLngMenu = () => {
    setLngMenu(!lngMenu);
  };

  return (
    <div>
      <div
        className="mr-3 ml-3 cursor-pointer duration-200 hover:bg-blue-500 dark:hover:bg-neutral-800 text-lg w-12 h-12 rounded-full flex justify-center items-center"
        onClick={toggleLngMenu}
      >
        <IoLanguageSharp size={30} />
      </div>
      {lngMenu && (
        <div
          className="fixed top-14 right-7 bg-white text-gray-900
         dark:bg-stone-800 dark:text-white"
        >
          {locales.map((l, index) => (
            <div
              key={index}
              className="cursor-pointer px-10 py-2
        hover:bg-gray-200 duration-150
        dark:hover:bg-neutral-600"
              onClick={() => {
                changeLocale(l.locale);
              }}
            >
              {l.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Locales;
