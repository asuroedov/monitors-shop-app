import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  brand: string[];
  screenResolution: string[];
  frequency: string[];
  screenDiagonal: string[];
}

const initialState: FiltersState = {
  brand: [],
  frequency: [],
  screenDiagonal: [],
  screenResolution: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string[]>) => {
      state.brand = action.payload;
    },
    setFrequency: (state, action: PayloadAction<string[]>) => {
      state.frequency = action.payload;
    },
    setScreenDiagonal: (state, action: PayloadAction<string[]>) => {
      state.screenDiagonal = action.payload;
    },
    setScreenResolution: (state, action: PayloadAction<string[]>) => {
      state.screenResolution = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
