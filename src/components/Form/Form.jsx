import React, { useState } from 'react';
import styles from '../../assets/modules/form.module.scss';

export default function Form({ handleSubmitForm, cardInputRef }) {
  const [inputValue, setInputValue] = useState('');
  const buttonDisabled = inputValue.length < 4;

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
		    handleSubmitForm(e, inputValue);
		    setInputValue('');
		  }}
    >
      <input
        ref={cardInputRef}
        className={styles.input}
        type="text"
        minLength={4}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Добавить запись (минимум 4 cимвола)"
      />
      <button type="submit" id="submit-btn" name="submit-btn" className={`btn btn-light ${styles.submitButton}`} disabled={buttonDisabled}>Добавить</button>
    </form>
  );
}
