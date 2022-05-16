import React, { FC, memo, useEffect, useState } from "react";
import cn from "classnames";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

interface HeaderPreloaderProps {
  afterLoadDelay?: number;
}

const HeaderPreloader: FC<HeaderPreloaderProps> = ({ afterLoadDelay }) => {
  const [active, setActive] = useState(false);
  const isLoading = useTypedSelector((state) => state.monitor.isLoading);

  useEffect(() => {
    if (isLoading) setActive(true);

    let timeoutId: NodeJS.Timeout;
    if (!isLoading) timeoutId = setTimeout(() => setActive(false), afterLoadDelay || 500);
    return () => timeoutId && clearTimeout(timeoutId);
  }, [isLoading, afterLoadDelay]);

  return (
    <div className={cn(styles.headerPreloader, { [styles.active]: active })}>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default memo(HeaderPreloader);
