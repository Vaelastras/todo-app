import React from 'react';
import styles from '../../assets/modules/article.module.scss';

export default function Article({
  id, name, props, handleDeleteCard, handleToggleCompleteCard, handleSearchContent,
}) {
  const { completeTask } = props;

  const handleNameCardFormatter = (text) => {
    if (text.length > 40) {
      return `${text.split('').slice(0, 40).join('')}...`;
    }
    return text;
  };

  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <article
      className={`${styles.card} ${completeTask ? styles.complete : ''}`}
      onClick={() => handleToggleCompleteCard(id)}
      id={id}
    >
      <p className={`${styles.text} ${completeTask ? styles.bold : ''}`}>
        { `${id}. `}
        {name}
      </p>
      <div className={styles.button__wrapper}>
        <button
          onClick={() => handleSearchContent(name)}
          className={`${styles.button} btn-light ${styles.button__search}`}
          title={`Искать "${handleNameCardFormatter(name)}" в Яндекс`}
          type="button"
        >
          <i className={`${styles.icon} bi bi-search`} />
        </button>
        <button
          onClick={(e) => {
					  e.stopPropagation();
					  handleDeleteCard(id);
          }}
          className={`${styles.button} btn-outline-danger`}
          title={`Удалить карту "${name}"`}
          type="button"
        >
          <i className={`${styles.icon} bi bi-x-circle`} />
        </button>
      </div>
      {completeTask && (<i className={`bi bi-check2-all ${styles.layout}`} />)}
    </article>
  );
}
