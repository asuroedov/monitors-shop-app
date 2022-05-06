import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MonitorInterface, MonitorsResponseInterface } from "../../types/monitor";
import { fetchMonitorList } from "./asyncActions";

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
  extraReducers: (builder) => {
    builder.addCase(fetchMonitorList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMonitorList.fulfilled, (state, action: PayloadAction<MonitorsResponseInterface>) => {
      state.monitors = action.payload.monitors;
      state.isLoading = false;
    });
    builder.addCase(fetchMonitorList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const monitorActions = monitorSlice.actions;

export default monitorSlice.reducer;
