import { createAsyncThunk } from "@reduxjs/toolkit";
import monitorApi from "../../api/monitorApi";

export const fetchMonitorList = createAsyncThunk("/monitors/fetch", async (payload: any, thunkApi) => {
  const [data, errorMessage] = await monitorApi.getList();
  if (errorMessage || !data) return thunkApi.rejectWithValue(errorMessage);

  return data;
});
