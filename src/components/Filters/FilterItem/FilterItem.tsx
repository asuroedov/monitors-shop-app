import React, { FC, memo, useCallback, useState } from "react";
import cn from "classnames";

import Checkbox from "../../Checkbox/Checkbox";

import { useActions } from "../../../hooks/useActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

import { fetchMonitorList } from "../../../redux/monitor/asyncActions";
import { fetchFilters } from "../../../redux/filters/asyncActions";

import styles from "./styles.module.scss";

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
    if (!counts && !checked) return;
    setChecked((checked) => !checked);
    handleToggleFilterCheckInStore();
    dispatch(fetchMonitorList());
    dispatch(fetchFilters());
  }, [handleToggleFilterCheckInStore, dispatch, counts, checked]);

  return (
    <div className={cn(styles.filterItem, { [styles.disabled]: !counts && !checked })} onClick={toggleCheck}>
      <Checkbox checked={checked} />
      <div className={styles.filterItem__info}>
        <span className={styles.filterItem__name}>{children}</span>
        <span className={styles.filterItem__count}>{counts}</span>
      </div>
    </div>
  );
};

export default memo(FilterItem);
