import React, { memo } from "react";

import MonitorList from "../../components/MonitorList/MonitorList";

import styles from "./styles.module.scss";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <MonitorList />
    </div>
  );
};

export default memo(MainPage);
