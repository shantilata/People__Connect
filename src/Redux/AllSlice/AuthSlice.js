import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "../../Services";
import { enqueueSnackbar } from 'notistack'
import { refreshFeed } from "./FeedSlice";

const initial_value = {
  isAuthenticating: false,
  isAuthenticated: false,
  isLoggingOut: false,
  syncingProfile: false,
  // API Parameters
  name: "",
  email: "",
  username: "",
  profilePic: "",
  bio: "",
  _id: "",
  followers: [],
  following: [],
  createdAt: "",
};

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async ({ inputState, navigate }, thunkApi) => {
    const res = await services.register(
      inputState.name,
      inputState.email,
      inputState.username,
      inputState.password
    );
    if (res !== null) {
      window.localStorage.setItem("username", res.username);
      enqueueSnackbar("User has been successfully signed up. Taking you in.", {
        variant: "success"
      });
      thunkApi.dispatch(refreshFeed());
      navigate("/feed")
    } else {
      enqueueSnackbar("Failed to sign up! Please try again.", {
        variant: "error"
      })
    }
    return res;
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ inputState, navigate }, thunkApi) => {
    const res = await services.login(inputState.username, inputState.password);
    if (res !== null) {
      window.localStorage.setItem("username", res.username);
      enqueueSnackbar("User has been successfully signed in. Taking you in.", {
        variant: "success",
      });
      thunkApi.dispatch(refreshFeed());
      navigate("/feed");
    } else {
      enqueueSnackbar("Failed to sign in! Please try again.", {
        variant: "error",
      });
    }
    return res;
  }
);

export const syncUserProfile = createAsyncThunk(
  "auth/syncUserProfile",
  async () => {
    const res = await services.getMyProfile();
    if (res !== null) {
      enqueueSnackbar("User profile synced!", {
        variant: "info",
      });
    } else {
      enqueueSnackbar("User profile sync failed!", {
        variant: "warning",
      });
    }
    return res;
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async (navigate) => {
  const res = await services.logout();
  if (res === true) {
    navigate("/");
    enqueueSnackbar("User successfully logged out!", {
      variant: "success",
    });
  } else {
    enqueueSnackbar("Failed to log out!", {
      variant: "warning",
    });
  }
  return res;
});

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initial_value,
  reducers: {
    updateProfile: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.profilePic = action.payload.profilePic;
      state.createdAt = action.payload.createdAt;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state, action) => {
      state.isAuthenticating = true
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
    builder.addCase(userLogin.pending, (state, action) => {
      state.isAuthenticating = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
    builder.addCase(syncUserProfile.pending, (state, action) => {
      state.syncingProfile = true;
    });
    builder.addCase(syncUserProfile.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.profilePic = action.payload.profilePic;
      state.createdAt = action.payload.createdAt;
      state.syncingProfile = false;
    });
    builder.addCase(syncUserProfile.rejected, (state, action) => {
      state.syncingProfile = false;
    });
    builder.addCase(logoutUser.pending, (state, action) => {
      state.isLoggingOut = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.name = initial_value.name;
      state.username = initial_value.username;
      state.email = initial_value.email;
      state._id = initial_value._id;
      state.bio = initial_value.bio;
      state.followers = initial_value.followers;
      state.following = initial_value.following;
      state.profilePic = initial_value.profilePic;
      state.createdAt = initial_value.createdAt;
      state.isAuthenticated = false
      state.isLoggingOut = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoggingOut = false;
    });
  },
});
export const { updateProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
