import React, { FC, memo } from "react";

import { MonitorInterface } from "../../../types/monitor";

import { config } from "../../../utils/config";

import styles from "./styles.module.scss";

interface MonitorCardProps extends MonitorInterface {}

const MonitorCard: FC<MonitorCardProps> = ({
  title,
  brand,
  imgSrc,
  price,
  matrixType,
  screenDiagonal,
  screenResolution,
  frequency,
}) => {
  return (
    <li className={styles.monitorCard}>
      <img src={`${config.BASE_URL}${imgSrc}`} alt={title} className={styles.img} />
      <div className={styles.monitorInfo}>
        <div className={styles.title}>{title}</div>
        <div>
          <span>Размер экрана</span>
          <span>{screenDiagonal} "</span>
        </div>
        <div>
          <span>Частота обновления</span>
          <span>{frequency} Гц</span>
        </div>
        <div>
          <span>Тип матрицы</span>
          <span>{matrixType}</span>
        </div>
        <div>
          <span>Разрешение экрана</span>
          <span>{screenResolution}</span>
        </div>

        <div className={styles.price}>
          <span>{price}</span>
        </div>
      </div>
    </li>
  );
};

export default memo(MonitorCard);
