import React, { memo } from "react";

import FilterGroup from "./FilterGroup/FilterGroup";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

const Filters = () => {
  const filters = useTypedSelector((state) => state.filters.filters);

  return (
    <ul className={styles.wrapper}>
      {filters.map((filter) => (
        <FilterGroup key={filter.title} {...filter} />
      ))}
    </ul>
  );
};

export default memo(Filters);
