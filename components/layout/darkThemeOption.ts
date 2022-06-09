import { ThemeOptions } from "@mui/material";
import {
  red,
  blue,
  cyan,
  grey,
  orange,
  amber,
  green,
} from "@mui/material/colors";
export const darkThemeOption: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: blue[200],
    },
    secondary: {
      main: cyan[400],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: amber[500],
    },
    info: {
      main: cyan[500],
    },
    success: {
      main: green[900],
    },
    background: {
      default: orange[50],
    },
    text: {
      primary: grey[50],
    },
  },
};
