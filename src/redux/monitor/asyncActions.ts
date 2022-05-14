import { createAsyncThunk } from "@reduxjs/toolkit";
import monitorApi from "../../api/monitorApi";
import { TypeRootState } from "../store";
import { mapCheckedFiltersToQuery } from "../../utils/mapCheckedFiltersToQuery";

export const fetchMonitorList = createAsyncThunk("/monitors/fetch", async (payload: any, thunkApi) => {
  const state = thunkApi.getState() as TypeRootState;
  const checkedFilters = state.filters.checkedFilters;

  const [data, errorMessage] = await monitorApi.getList(mapCheckedFiltersToQuery(checkedFilters));
  if (errorMessage || !data) return thunkApi.rejectWithValue(errorMessage);

  return data;
});
