import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import serviceSlice from './service/serviceSlice';
import providerServiceSlice from './service/providerServiceSlice';
import reviewSlice from './review/reviewSlice';
import cateSlice from './category/cateSlice';
import locationSlice from './location/locationSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    services: serviceSlice,
    proservices: providerServiceSlice,
    reviews: reviewSlice,
    categories: cateSlice,
    location: locationSlice
  },
});
