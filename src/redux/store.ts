import { configureStore } from "@reduxjs/toolkit";
import { monitorSlice } from "./monitor/monitorSlice";
import { filtersSlice } from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    monitors: monitorSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
