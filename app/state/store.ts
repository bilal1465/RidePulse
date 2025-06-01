import { configureStore } from '@reduxjs/toolkit';
import activeRideReducer from "./activeRide/ActiveRideSlice";

export const store = configureStore({
  reducer: {
    activeRide: activeRideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;
