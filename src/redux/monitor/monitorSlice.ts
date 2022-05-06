import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MonitorInterface } from "../../types/monitor";

export interface MonitorState {
  monitors: MonitorInterface[];
  isLoading: boolean;
}

const initialState: MonitorState = {
  monitors: [],
  isLoading: false,
};

export const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {
    setMonitors: (state, action: PayloadAction<MonitorInterface[]>) => {
      state.monitors = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const monitorActions = monitorSlice.actions;

export default monitorSlice.reducer;
