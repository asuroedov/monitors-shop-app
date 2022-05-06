import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { monitorActions } from "../redux/monitor/monitorSlice";
import { filtersActions } from "../redux/filters/filterSlice";

const allActions = {
  ...monitorActions,
  ...filtersActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
