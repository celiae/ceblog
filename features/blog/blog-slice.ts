import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
interface Blog {
  currentPage: number;
}
const initialState: Blog = {
  currentPage: 1,
};
export const blogSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    toPage: (state, targetPage) => {
      state.currentPage = targetPage.payload;
    },
  },
});

export const { toPage } = blogSlice.actions;
export const selectBlog = (state: RootState) => state.blog.currentPage;
export default blogSlice.reducer;
