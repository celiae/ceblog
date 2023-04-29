import { useSetThemeContext, useThemeContext } from "@/context/theme/theme";
import Theme from "@/types/theme";
import React from "react";

const toggleTheme = (theme: Theme): Theme => {
  if (theme === "dark") return "light";
  return "dark";
};

const DarkSwitch = () => {
  const theme = useThemeContext();
  const setStoredTheme = useSetThemeContext();
  return (
    <label className="w-10 h-5 relative">
      <input
        onChange={() => {
          setStoredTheme(toggleTheme(theme));
        }}
        className="opacity-0 w-0 h-0 "
        type="checkbox"
        checked
      />
      <span
        className={`absolute rounded-full top-0 left-0 right-0 bottom-0
                    cursor-pointer flex items-center
                    before:absolute before:bg-white before:rounded-full before:h-4
                    before:w-4 duration-150 before:duration-100 
               ${
                 theme === "dark"
                   ? "before:translate-x-5 bg-blue-400"
                   : "bg-stone-600 before:translate-x-1"
               }`}
      ></span>
    </label>
  );
};

export default DarkSwitch;
