  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import { storeAccessToken, removeAccessToken } from "../../../lib/secureLocalStorage";

  const initialState = {
    user: null,
    status: "idle",
    error: null,
    accessToken: null,
  };

  // Create fetch user
  export const fetchCreateUser = createAsyncThunk(
    "user/fetchCreateUser",
    async ({ username, email,role, password, confirmPassword }, { rejectWithValue }) => {
      try {
        const body = JSON.stringify({ username,role, email, password, confirmPassword });
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}register/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body
        });

        if (!response.ok) {
          const error = await response.json();
          return rejectWithValue(error);
        }

        const user = await response.json();
        return user;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchVerifyEmail = createAsyncThunk(
    "user/fetchVerifyEmail",
    async ({ email, otp_code }, { rejectWithValue }) => {
      try {
        const body = JSON.stringify({ email, otp_code });
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}verify-otp/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });
        if (!response.ok) {
          const errorResponse = await response.json();
          return rejectWithValue(errorResponse);
        }
        return await response.json();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Login user
  export const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const body = JSON.stringify({ email, password });
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}login/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });
        if (!response.ok) {
          const errorResponse = await response.json();
          return rejectWithValue(errorResponse);
        }
        const data = await response.json();
        storeAccessToken(data.access);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Asynchronous thunk for getting profile
  export const fetchProfile = createAsyncThunk(
    "user/fetchProfile",
    async (token, { rejectWithValue }) => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}profile/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const error = await response.json();
          return rejectWithValue(error);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Update user profile
  export const fetchUpdateUser = createAsyncThunk(
    "user/fetchUpdateUser",
    async ({ token, userData }, { rejectWithValue }) => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}profile/`, {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
          const error = await response.json();
          return rejectWithValue(error);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // Create reducer and action
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      logout: (state) => {
        removeAccessToken();
        state.user = null;
        state.accessToken = null;
        state.status = "idle";
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Register
        .addCase(fetchCreateUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(fetchCreateUser.fulfilled, (state, action) => {
          state.status = "success";
          state.user = action.payload;
        })
        .addCase(fetchCreateUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
        // Verify
        .addCase(fetchVerifyEmail.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(fetchVerifyEmail.fulfilled, (state, action) => {
          state.status = "success";
          state.user = action.payload;
        })
        .addCase(fetchVerifyEmail.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
        // Login
        .addCase(fetchLogin.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
          state.status = "success";
          state.user = action.payload.user;
          state.accessToken = action.payload.access;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload || action.error.message;
        })
        // Fetch profile
        .addCase(fetchProfile.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProfile.fulfilled, (state, action) => {
          state.status = "success";
          state.user = action.payload;  // Update the user profile here
        })
        .addCase(fetchProfile.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
        // Update user
        .addCase(fetchUpdateUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(fetchUpdateUser.fulfilled, (state, action) => {
          state.status = "success";
          state.user = action.payload; // Update user profile data
        })
        .addCase(fetchUpdateUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        });
    },
  });

  // Export reducer
  export default userSlice.reducer;

  // Export actions
  export const { logout } = userSlice.actions;

  // Export selectors
  export const selectUser = (state) => state.user.user;
  export const selectStatus = (state) => state.user.status;
  export const selectUsers = (state) => state.user.status;
  export const selectAccessToken = (state) => state.user.accessToken;
  export const selectError = (state) => state.user.error;
