import React, { memo, useEffect } from "react";

import MonitorCard from "./MonitorCard/MonitorCard";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchMonitorList } from "../../redux/monitor/asyncActions";

import styles from "./styles.module.scss";

const MonitorList = () => {
  const monitors = useTypedSelector((state) => state.monitor.monitors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMonitorList());
  }, [dispatch]);

  return (
    <ul className={styles.monitorList}>
      {monitors.map((monitor) => (
        <MonitorCard key={monitor.id} {...monitor} />
      ))}
    </ul>
  );
};

export default memo(MonitorList);
