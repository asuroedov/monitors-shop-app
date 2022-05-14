import React, { FC, memo, useEffect } from "react";
import cn from "classnames";

import MonitorCard from "./MonitorCard/MonitorCard";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchMonitorList } from "../../redux/monitor/asyncActions";

import styles from "./styles.module.scss";

interface MonitorListProps {
  className?: string;
}

const MonitorList: FC<MonitorListProps> = ({ className }) => {
  const monitors = useTypedSelector((state) => state.monitor.monitors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMonitorList());
  }, [dispatch]);

  return (
    <ul className={cn(styles.monitorList, className)}>
      {monitors.map((monitor) => (
        <MonitorCard key={monitor.id} {...monitor} />
      ))}
    </ul>
  );
};

export default memo(MonitorList);
