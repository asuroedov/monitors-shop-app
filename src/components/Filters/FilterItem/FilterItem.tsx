import React, { FC, memo, useCallback, useMemo, useState } from "react";
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

  const disabled = useMemo(() => !counts && !checked, [counts, checked]);

  const toggleCheck = useCallback(() => {
    if (disabled) return;

    setChecked((checked) => !checked);
    handleToggleFilterCheckInStore();

    dispatch(fetchMonitorList());
    dispatch(fetchFilters());
  }, [handleToggleFilterCheckInStore, dispatch, disabled]);

  return (
    <div className={cn(styles.filterItem, { [styles.disabled]: disabled })} onClick={toggleCheck}>
      <Checkbox checked={checked} />
      <div className={styles.filterItem__info}>
        <span className={styles.filterItem__name}>{children}</span>
        <span className={styles.filterItem__count}>{counts}</span>
      </div>
    </div>
  );
};

export default memo(FilterItem);
