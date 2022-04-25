import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './article.module.scss';
import { removeTodo, toggleTodo } from '../../store/todoSlice';
import { SEARCH_URL } from '../../assets/utils/constants';

export default function Article({
  id, name,
}) {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.todos.cards.find((todo) => todo.id === id));

  const handleNameCardFormatter = (text) => {
    if (text.length > 40) {
      return `${text.split('').slice(0, 40).join('')}...`;
    }
    return text;
  };
  const handleSearchContent = (e, text) => {
    e.stopPropagation();
    window.open(`${SEARCH_URL}${text}`, '_blank');
    window.history.back();
  };

  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <article
      className={`${styles.card} ${task.completeTask ? styles.complete : ''}`}
      onClick={() => dispatch(toggleTodo({ id }))}
      // id={id}
    >
      <p className={`${styles.text} ${task.completeTask ? styles.bold : ''}`}>
        { `${id}. `}
        {name}
      </p>
      <div className={styles.button__wrapper}>
        <button
          onClick={(e) => handleSearchContent(e, name)}
          className={`${styles.button} btn-light ${styles.button__search}`}
          title={`Искать "${handleNameCardFormatter(name)}" в Яндекс`}
          type="button"
        >
          <i className={`${styles.icon} bi bi-search`} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            // eslint-disable-next-line no-undef
            dispatch(removeTodo({ id }));
            // handlePopupToggle(id, name);
          }}
					  // handleDeleteCard(id);
          // }
          className={`${styles.button} btn-outline-danger`}
          title={`Удалить карту "${name}"`}
          type="button"
        >
          <i className={`${styles.icon} bi bi-x-circle`} />
        </button>
      </div>
      {task.completeTask && (<i className={`bi bi-check2-all ${styles.layout}`} />)}
    </article>
  );
}
