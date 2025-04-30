import { createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost, deletePost } from "./operations";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = state.data.filter((post) => post.id !== action.payload);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const postsReducer = postsSlice.reducer;
