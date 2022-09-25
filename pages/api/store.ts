import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./state/theme-slice";
import blogReducer from "./state/blog-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    blog: blogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
