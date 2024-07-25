import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccessToken } from "../../../lib/secureLocalStorage";

const initialState = {
  reviews: [],
  status: "idle",
  error: null,
};

// Fetch all reviews
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (_, { rejectWithValue }) => {
    const token = getAccessToken();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}reviews/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch reviews for a specific service
export const fetchServiceReviews = createAsyncThunk(
  "reviews/fetchServiceReviews",
  async (serviceId, { rejectWithValue }) => {
    const token = getAccessToken();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}reviews/?service_id=${serviceId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Post a new review
export const postReview = createAsyncThunk(
  "reviews/postReview",
  async (review, { rejectWithValue }) => {
    const token = getAccessToken();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error("Failed to post review");
      }

      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    updateReviewLikeDislike: (state, action) => {
      const { id, liked, disliked } = action.payload;
      const review = state.reviews.find((review) => review.id === id);
      if (review) {
        if (liked) {
          review.like_count += 1;
          review.unlike_count = Math.max(0, review.unlike_count - 1);
        } else if (disliked) {
          review.unlike_count += 1;
          review.like_count = Math.max(0, review.like_count - 1);
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchServiceReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServiceReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchServiceReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateReviewLikeDislike } = reviewsSlice.actions;

export const selectReviews = (state) => state.reviews.reviews;
export const selectReviewsStatus = (state) => state.reviews.status;
export const selectReviewsError = (state) => state.reviews.error;

export default reviewsSlice.reducer;
