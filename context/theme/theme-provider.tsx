import React, { PropsWithChildren } from "react";
import { SetThemeContext, ThemeContext, useTheme } from "./theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
