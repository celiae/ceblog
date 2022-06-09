import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { RootState } from "../../app/store";
interface ThemeState {
  isDarkMode: boolean;
}
const initialState: ThemeState = {
  isDarkMode: false,
};
export const themeSlice = createSlice({
  name: "isDarkMode",
  initialState,
  reducers: {
    toLight: (state) => {
      state.isDarkMode = false;
    },
    toDark: (state) => {
      state.isDarkMode = true;
    },
  },
});

export const { toLight, toDark } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.isDarkMode;
export default themeSlice.reducer;
