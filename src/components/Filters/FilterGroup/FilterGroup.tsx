import React, { FC, memo, useMemo } from "react";

import FilterItem from "../FilterItem/FilterItem";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { FilterInterface } from "../../../types/filters";

import styles from "./styles.module.scss";

interface FilterGroupProps extends FilterInterface {}

const FilterGroup: FC<FilterGroupProps> = ({ title, data, name }) => {
  const allFilters = useTypedSelector((state) => state.filters.allFilters);

  const mergedFilters = useMemo(() => {
    const allData = allFilters.find((filter) => filter.title === title)?.data || {};
    return Object.entries(allData).map(([filterValue]) => {
      return [filterValue, data[filterValue] || 0] as const;
    });
  }, [allFilters, data, title]);

  return (
    <div className={styles.filterGroup}>
      <div className={styles.filterGroup__name}>{name}</div>
      {mergedFilters.map(([filterValue, filterCounts], index) => (
        <FilterItem key={filterValue + index} title={title} counts={filterCounts}>
          {filterValue}
        </FilterItem>
      ))}
    </div>
  );
};

export default memo(FilterGroup);
