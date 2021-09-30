import React from 'react';
import styles from '../../assets/modules/searchPanel.module.scss';

export default function SearchPanel({
  cardsFilter, handleFilterCard, setSearchRequest, searchInputRef, searchRequest,
}) {
  const buttons = [
    {
      id: 1,
      name: 'active',
      label: 'Сделать',

    }, {
      id: 2,
      name: 'completed',
      label: 'Готово',

    }, {
      id: 3,
      name: 'all',
      label: 'Все',
    },
  ];

  return (
    <div className={styles.searchPanel}>
      <input ref={searchInputRef} className={styles.input} type="text" minLength={3} placeholder="введите что-нибудь для поиска" onChange={(evt) => setSearchRequest(evt.target.value)} value={searchRequest} />
      <div className={`btn-group ${styles.buttonGroup}`} role="group" aria-label="buttons block">
        { buttons.map((button) => {
				  const { name, id, label } = button;
				  const buttonClassName = name === cardsFilter ? 'btn-light' : 'btn-outline-light';
				  return (
  <button
    key={`${name + id}`}
    className={`btn ${buttonClassName} ${styles.button}`}
    id={id}
    name={name}
    onClick={() => handleFilterCard(name)}
    type="button"
  >
    {label}
  </button>
				  );
        })}
      </div>
    </div>
  );
}
