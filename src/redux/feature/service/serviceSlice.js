import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../Api";

// Async function to fetch a single service by ID with the correct endpoint
export const fetchServiceById = createAsyncThunk(
  "services/fetchServiceById",
  async (id) => {
    const response = await fetch(`${BASE_URL}services/${id}/id/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; // Access the nested data field
  }
);

// Async function to fetch all services, with optional category filter
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (sortBy) => {
    let url = `${BASE_URL}services/`;
    if (sortBy) {
      url += `?category_type=${sortBy}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; // Access the nested data field
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    service: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.service = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectServices = (state) => state.services.data;
export const selectService = (state) => state.services.service;
export const selectServiceStatus = (state) => state.services.status;

export default serviceSlice.reducer;
