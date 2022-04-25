import React from 'react';
import styles from './articles.module.scss';
import Article from '../Article/Article';

export default function Articles({ handleSearchContent, todos }) {
  return (
    <section className={styles.articles}>
      {
        todos.map((card) => {
          const { id, name } = card;
          return (
            <Article
              key={id + new Date().getTime() + Math.random()}
              id={id}
              name={name}
              handleSearchContent={handleSearchContent}
            />
          );
        })
}
    </section>
  );
}
