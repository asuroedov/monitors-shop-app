import { createAsyncThunk } from "@reduxjs/toolkit";
import filtersApi from "../../api/filtersApi";
import { TypeRootState } from "../store";
import { mapCheckedFiltersToQuery } from "../../utils/mapCheckedFiltersToQuery";

export const fetchFilters = createAsyncThunk("/filters/fetch", async (payload, thunkApi) => {
  const state = thunkApi.getState() as TypeRootState;
  const checkedFilters = state.filters.checkedFilters;

  return await filtersApi.getFilters(mapCheckedFiltersToQuery(checkedFilters));
});

export const fetchAllFilters = createAsyncThunk("/filters/fetchAll", async (payload, thunkApi) => {
  return await filtersApi.getFilters();
});
