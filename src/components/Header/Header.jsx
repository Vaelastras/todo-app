import React from 'react';
import { useSelector } from 'react-redux';
import styles from './header.module.scss';
import Timer from '../Timer/Timer';
import User from '../User/User';

const Header = () => {
  const totalTask = useSelector((state) => state.todos.cards);
  const remainingTask = totalTask.filter((todo) => todo.completeTask === false);
  const isBoldRemaining = remainingTask > 3 ? `${styles.warning}` : `${styles.span}`;

  return (
    <>
      <header className={`${styles.header} d-flex`}>
        <h1 className={styles.title}>Список задач</h1>
        <Timer />
        {totalTask.length === 0 && (<p className={styles.subtitle}>У вас еще нет&nbsp;задач</p>)}
        {remainingTask.length !== 0 && (
        <p className={styles.subtitle}>
          Всего:
          <span className={styles.span}>{` ${totalTask.length}`}</span>
          , Oсталось:
          <span className={isBoldRemaining}>{remainingTask.length}</span>
        </p>
        )}
        {remainingTask.length === 0 && totalTask.length > 0 && (<p className={styles.subtitle}>Всё выполнено</p>)}
      </header>
      <User />
    </>
  );
};

export default Header;
