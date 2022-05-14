import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterInterface } from "../../types/filters";
import { fetchFilters } from "./asyncActions";

export interface FiltersState {
  filters: FilterInterface[];
  checkedFilters: Record<string, string[]>;
}

const initialState: FiltersState = {
  filters: [],
  checkedFilters: {},
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addCheckedFilter: (state, action: PayloadAction<{ title: string; value: string }>) => {
      const { value, title } = action.payload;

      if (!state.checkedFilters[title]) state.checkedFilters[title] = [];
      state.checkedFilters[title].push(value);
    },
    removeCheckedFilter: (state, action: PayloadAction<{ title: string; value: string }>) => {
      const { value, title } = action.payload;

      if (!state.checkedFilters[title]) state.checkedFilters[title] = [];
      state.checkedFilters[title] = state.checkedFilters[title].filter((filterValue) => filterValue !== value);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload;
    });
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
