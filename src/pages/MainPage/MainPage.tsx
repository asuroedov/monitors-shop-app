import React, { memo, useEffect } from "react";

import MonitorList from "../../components/MonitorList/MonitorList";
import Filters from "../../components/Filters/Filters";

import { useAppDispatch } from "../../hooks/useAppDispatch";

import { fetchAllFilters, fetchFilters } from "../../redux/filters/asyncActions";

import styles from "./styles.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllFilters());
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      <MonitorList className={styles.monitorList} />
      <Filters />
    </div>
  );
};

export default memo(MainPage);
