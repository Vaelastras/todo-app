import React from 'react';
import styles from '../../assets/modules/header.module.scss';
import Timer from '../Timer/Timer';

export default function Header({ totalTask, remainingTask }) {
  const isBoldRemaining = remainingTask > 3 ? `${styles.warning}` : `${styles.span}`;

  return (
    <header className={`${styles.header} d-flex`}>
      <h1 className={styles.title}>Список задач</h1>
      <Timer />
      {totalTask === 0 && (<p className={styles.subtitle}>У вас еще нет&nbsp;задач</p>)}
      {remainingTask !== 0 && (
      <p className={styles.subtitle}>
        Всего:
        <span className={styles.span}>{` ${totalTask}`}</span>
        , Oсталось:
        <span className={isBoldRemaining}>{remainingTask}</span>
      </p>
      )}
      {remainingTask === 0 && totalTask > 0 && (<p className={styles.subtitle}>Всё выполнено</p>)}
    </header>
  );
}
