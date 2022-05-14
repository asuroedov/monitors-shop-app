import React, { memo, useEffect } from "react";

import MonitorList from "../../components/MonitorList/MonitorList";

import styles from "./styles.module.scss";
import Filters from "../../components/Filters/Filters";
import { fetchFilters } from "../../redux/filters/asyncActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      <MonitorList />
      <Filters />
    </div>
  );
};

export default memo(MainPage);
