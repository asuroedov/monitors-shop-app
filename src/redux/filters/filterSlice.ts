import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterInterface } from "../../types/filters";
import { fetchFilters } from "./asyncActions";

export interface FiltersState {
  filters: FilterInterface[];
}

const initialState: FiltersState = {
  filters: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload;
    });
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
