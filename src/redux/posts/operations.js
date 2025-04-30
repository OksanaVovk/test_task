import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsApi, createPostApi, deletePostApi } from "@/servises/api";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (userId, thunkAPI) => {
    try {
      const data = await fetchPostsApi(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (credentials, thunkAPI) => {
    try {
      const data = await createPostApi(credentials);
      console.log("Succsess");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    try {
      const data = await deletePostApi(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
