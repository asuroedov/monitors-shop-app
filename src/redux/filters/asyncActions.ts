import { createAsyncThunk } from "@reduxjs/toolkit";
import filtersApi from "../../api/filtersApi";

export const fetchFilters = createAsyncThunk("/filters/fetch", async () => {
  return await filtersApi.getFilters();
});
