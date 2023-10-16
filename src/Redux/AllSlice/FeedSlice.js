import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Services from "../../Services";

const initial_value = {};

export const refreshFeed = createAsyncThunk("refreshFeed", async () => {
  const result = await Services.getFeedPosts();
  return result;
});

export const refreshPostById = createAsyncThunk(
  "refreshPostById",
  async (postId) => {
    const result = await Services.getPostById(postId);
    return result;
  }
);

const FeedSlice = createSlice({
  name: "feed",
  initialState: initial_value,
  extraReducers: (builder) => {
    builder.addCase(refreshFeed.fulfilled, (state, action) => {
      if (Array.isArray(action.payload)) {
        action.payload.forEach((post) => {
          state[post._id] = post;
        });
      }
    });
    builder.addCase(refreshPostById.fulfilled, (state, action) => {
      if (!!action.payload?._id) {
        state[action.payload._id] = action.payload;
      }
    });
  },
});

export default FeedSlice.reducer;
