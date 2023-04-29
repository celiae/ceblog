import Theme from "@/types/theme";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const useLocalStorage = <T>(key: string, fallbackValue: T) => {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

const useTheme = () => {
  return useLocalStorage<Theme>("theme", "light");
};

const ThemeContext = createContext<Theme>("light");

const SetThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(
  () => {}
);

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const useSetThemeContext = () => {
  return useContext(SetThemeContext);
};

export {
  useTheme,
  ThemeContext,
  SetThemeContext,
  useThemeContext,
  useSetThemeContext,
};
