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
export const lightThemeOption: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: blue[600],
    },
    secondary: {
      main: grey[900],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: amber[600],
    },
    info: {
      main: cyan[500],
    },
    success: {
      main: green[600],
    },
    // background: {
    //   default: orange[600],
    // },
    text: {
      primary: grey[900],
    },
  },
};
