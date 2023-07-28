import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetching data through Api
export const fetchPosts = createAsyncThunk("api/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    posts: [],
    isLoading: false,
    postPagerender: false,
    formPagerender: false,
    windowWidthPagerender: false,
  },
  reducers: {
    //for page navigation
    postPage(state, action) {
      state.postPagerender = true;
      state.formPagerender = false;
      state.windowWidthPagerender = false;
    },
    formPage(state, action) {
      state.postPagerender = false;
      state.formPagerender = true;
      state.windowWidthPagerender = false;
    },
    windowPage(state, action) {
      state.postPagerender = false;
      state.formPagerender = false;
      state.windowWidthPagerender = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { postPage, formPage, windowPage } = dataSlice.actions;
export default dataSlice.reducer;
