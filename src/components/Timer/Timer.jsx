import React, { useState } from 'react';
import styles from './timer.module.scss';

function Timer() {
  const [time, setTime] = useState('');

  setInterval(() => {
    const date = new Date().toLocaleString();
    const dayDate = new Date();

    const day = () => {
      switch (dayDate.getDay()) {
        case 0:
          return 'Воскресенье 🤪🤨😒';
        case 1:
          return 'Понедельник‍️ 😵‍💫';
        case 2:
          return 'Вторник 😮‍💨';
        case 3:
          return 'Среда 😏';
        case 4:
          return 'Четверг 😋';
        case 5:
          return 'Пятница 🤪';
        case 6:
          return 'Суббота 🤪🤪🤪';
        default:
          return 'Самый лучший день!';
      }
    };
    setTime(`${date}, ${day()}`);
  }, 1000);

  return <p className={styles.timer}>{time}</p>;
}

export default Timer;
