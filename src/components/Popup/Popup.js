import React from 'react';
import styles from '../../assets/modules/popup.module.scss';

export default function Popup(
  {
    popupOpen, handlePopupToggle, handlePopupCloseOverlay, handleDeleteCard, card,
  },
) {
  const { id, name } = card;
  return (
    <div
      onClick={(e) => handlePopupCloseOverlay(e)}
      aria-hidden="true"
      className={`${styles.popup} ${popupOpen && (styles.popup_active)}`}
    >
      <div className={`container ${styles.container}`}>
        <button
          onClick={() => handlePopupToggle(name)}
          className={styles.button__close}
          type="button"
          name="popup-close"
          title="Закрыть"
        >
          <i className="bi bi-x-lg" />
        </button>
        <p className={styles.text}>
          Вы точно хотите удалить задачу &laquo;
          <span className={styles.text__name}>{name}</span>
          &raquo;?
        </p>
        <div className={styles.button__wrapper}>
          <button onClick={handlePopupToggle} className={styles.button} type="button" name="button-reset">Нет! Я поспешил!</button>
          <button onClick={() => handleDeleteCard(id)} className={styles.button} type="submit" name="button-confirm">Да, все в порядке!</button>
        </div>
      </div>
    </div>
  );
}
