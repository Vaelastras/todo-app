import React from 'react';
import styles from '../../assets/modules/articles.module.scss';
import Article from '../Article/Article';

export default function Articles({ handleDeleteCard, handleToggleCompleteCard, cards }) {
  return (
    <section className={styles.articles}>
      {
				cards.map((card) => {
			  	const { id, name, ...props } = card;
			  	return (
  <Article
    key={id + new Date().getTime() + Math.random()}
    id={id}
    name={name}
    props={props}
    handleDeleteCard={handleDeleteCard}
    handleToggleCompleteCard={handleToggleCompleteCard}
  />
			  );
				})
}
    </section>
  );
}
