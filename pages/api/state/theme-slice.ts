import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface ThemeState {
  isDarkMode: boolean;
  isLoading: boolean;
}
const initialState: ThemeState = {
  isDarkMode: true,
  isLoading: true,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toLight: (state) => {
      state.isDarkMode = false;
    },
    toDark: (state) => {
      state.isDarkMode = true;
    },
    loaded: (state) => {
      state.isLoading = false;
    },
    loading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { toLight, toDark, loaded, loading } = themeSlice.actions;
export const selectIsDarkMode = (state: RootState) => state.theme.isDarkMode;
export const selectIsLoading = (state: RootState) => state.theme.isLoading;
export default themeSlice.reducer;
