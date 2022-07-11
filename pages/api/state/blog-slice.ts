import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Blog {
  currentPage: number;
  postNumber: number;
}
const initialState: Blog = {
  currentPage: 1,
  postNumber: 0,
};
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    toPage: (state, targetPage) => {
      state.currentPage = targetPage.payload;
    },
  },
});

export const { toPage } = blogSlice.actions;
export const selectcurrentPage = (state: RootState) => state.blog.currentPage;
export const selectpostNumber = (state: RootState) => state.blog.postNumber;
export default blogSlice.reducer;
