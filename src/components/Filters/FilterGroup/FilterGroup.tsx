import React, { FC, memo } from "react";
import { FilterInterface } from "../../../types/filters";
import FilterItem from "../FilterItem/FilterItem";

import styles from "./styles.module.scss";

interface FilterGroupProps extends FilterInterface {}

const FilterGroup: FC<FilterGroupProps> = ({ title, data, name }) => {
  return (
    <div className={styles.filterGroup}>
      <span className={styles.filterGroup__name}>{name}</span>
      {Object.entries(data).map(([filterValue, filterCounts], index) => (
        <FilterItem key={filterValue + index} title={title} counts={filterCounts}>
          {filterValue}
        </FilterItem>
      ))}
    </div>
  );
};

export default memo(FilterGroup);
