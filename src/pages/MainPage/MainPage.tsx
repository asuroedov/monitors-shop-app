import React, { memo, useEffect } from "react";

import MonitorList from "../../components/MonitorList/MonitorList";
import Filters from "../../components/Filters/Filters";
import PreventClick from "../../components/PreventClick/PreventClick";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchAllFilters, fetchFilters } from "../../redux/filters/asyncActions";

import styles from "./styles.module.scss";

const MainPage = () => {
  const isLoading = useTypedSelector((state) => state.monitor.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllFilters());
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      <MonitorList className={styles.monitorList} />
      <Filters />
      <PreventClick visible={isLoading} />
    </div>
  );
};

export default memo(MainPage);
