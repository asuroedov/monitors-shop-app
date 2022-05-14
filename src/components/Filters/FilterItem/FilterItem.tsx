import React, { FC, memo, useCallback, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";

import styles from "./styles.module.scss";
import { useActions } from "../../../hooks/useActions";
import { fetchMonitorList } from "../../../redux/monitor/asyncActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

interface FilterItemProps {
  children: string;
  title: string;
  counts: number;
}

const FilterItem: FC<FilterItemProps> = ({ children, title, counts }) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();
  const { addCheckedFilter, removeCheckedFilter } = useActions();

  const handleToggleFilterCheckInStore = useCallback(() => {
    if (!checked) addCheckedFilter({ title, value: children });
    if (checked) removeCheckedFilter({ title, value: children });
  }, [checked, title, children, addCheckedFilter, removeCheckedFilter]);

  const toggleCheck = useCallback(() => {
    setChecked((checked) => !checked);
    handleToggleFilterCheckInStore();
    dispatch(fetchMonitorList({}));
  }, [handleToggleFilterCheckInStore, dispatch]);

  return (
    <div className={styles.filterItem} onClick={toggleCheck}>
      <Checkbox checked={checked} />
      <div className={styles.filterItem__info}>
        <span className={styles.filterItem__name}>{children}</span>
        <span className={styles.filterItem__count}>{counts}</span>
      </div>
    </div>
  );
};

export default memo(FilterItem);
