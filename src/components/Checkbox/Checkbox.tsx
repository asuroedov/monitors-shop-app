import React, { FC, memo, useCallback } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface CheckboxProps {
  checked: boolean;
  setChecked?: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, setChecked }) => {
  const toggleCheck = useCallback(() => {
    setChecked && setChecked(!checked);
  }, [setChecked, checked]);

  return (
    <label className={cn(styles.label, { [styles.checked]: checked })} onClick={toggleCheck}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onClick={(event) => event.stopPropagation()}
        onChange={() => {}}
      />
    </label>
  );
};

export default memo(Checkbox);
