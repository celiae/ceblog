import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Posts from "../../../types/post";

interface Blog {
  currentPage: number;
  postNumber: number;
  searchActive: boolean;
  searchResults: Array<Posts>;
}
const initialState: Blog = {
  currentPage: 1,
  postNumber: 0,
  searchActive: false,
  searchResults: [],
};
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    toPage: (state, targetPage) => {
      state.currentPage = targetPage.payload;
    },
    startSearch: (state) => {
      state.searchActive = true;
    },
    stopSearch: (state) => {
      state.searchActive = false;
    },
    emptySearchResults: (state) => {
      state.searchResults = [];
    },
    appendSearchResult: (state, post) => {
      state.searchResults.push(post.payload);
    },
  },
});

export const {
  toPage,
  startSearch,
  stopSearch,
  appendSearchResult,
  emptySearchResults,
} = blogSlice.actions;
export const selectcurrentPage = (state: RootState) => state.blog.currentPage;
export const selectpostNumber = (state: RootState) => state.blog.postNumber;
export const selectsearchActive = (state: RootState) => state.blog.searchActive;
export const selectsearchResults = (state: RootState) =>
  state.blog.searchResults;
export default blogSlice.reducer;
