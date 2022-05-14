import React, { FC, memo, useCallback, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";

import styles from "./styles.module.scss";

interface FilterItemProps {
  children: string;
}

const FilterItem: FC<FilterItemProps> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = useCallback(() => {
    setChecked((checked) => !checked);
  }, []);

  return (
    <div className={styles.filterItem} onClick={toggleCheck}>
      <Checkbox checked={checked} />
      <span className={styles.filterItem__name}>{children}</span>
    </div>
  );
};

export default memo(FilterItem);
