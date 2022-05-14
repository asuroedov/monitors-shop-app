import React, { memo } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FilterGroup from "./FilterGroup/FilterGroup";

const Filters = () => {
  const filters = useTypedSelector((state) => state.filters.filters);

  return (
    <ul>
      {filters.map((filter) => (
        <FilterGroup key={filter.title} {...filter} />
      ))}
    </ul>
  );
};

export default memo(Filters);
