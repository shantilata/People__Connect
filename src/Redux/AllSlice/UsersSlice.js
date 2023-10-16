import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Services from "../../Services";

const initial_value = {};

export const loadUser = createAsyncThunk(
  "loadUser",
  async (userId, thunkApi) => {
    const { users } = thunkApi.getState();
    const userInfo = users?.[userId];
    if (typeof userInfo === "undefined") {
      thunkApi.dispatch(userLoading(userId));
      const userProfile = await Services.getUserProfileById(userId);
      if (userProfile === null) {
        return userId;
      } else return userProfile;
    } else throw new Error("User already loading.");
  }
);

const UsersSlice = createSlice({
  name: "users",
  initialState: initial_value,
  reducers: {
    userLoading: (state, action) => {
      return { ...state, [action.payload]: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      if (typeof action.payload !== "string") {
        return { ...state, [action.payload._id]: action.payload };
      } else return state.delete(action.payload);
    });
  },
});
export const { userLoading } = UsersSlice.actions;
export default UsersSlice.reducer;
