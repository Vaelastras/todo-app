import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import styles from '../../assets/modules/app.module.scss';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Articles from '../Articles/Articles';
import Form from '../Form/Form';
import { IMAGE_ARR, TIME_FOR_LOOP } from '../../assets/utils/constants';

export const App = () => {
  const dispatch = useDispatch();
  const [renderItems, setRenderItems] = useState([]);
  const todos = useSelector((state) => state.todos.cards);
  useEffect(() => {
    setRenderItems(todos);
  }, [todos]);

  const pageRef = useRef(null);
  const cardInputRef = useRef(null);

  useEffect(() => {
    pageRef.current.style.backgroundImage = `url("${IMAGE_ARR[0]}")`;
    setInterval(() => {
      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      async function loop() {
        for (let i = 0; i < IMAGE_ARR.length; i++) {
          pageRef.current.style.backgroundImage = `url("${IMAGE_ARR[i]}")`;
          // eslint-disable-next-line no-await-in-loop
          await timer(TIME_FOR_LOOP);
        }
      }
      loop()
        .then((r) => r)
        .catch((err) => err);
    }, (IMAGE_ARR.length + 1) * TIME_FOR_LOOP);
  }, []);

  const handleSubmitForm = (evt, name) => {
    evt.preventDefault();
    const upperCaseName = name.split('')[0].toUpperCase() + name.slice(1);
    dispatch(addTodo({ name: upperCaseName }));
  };

  const handleFilterButtonCards = (status) => {
    if (status === 'active') {
      const res = todos.filter((val) => val.completeTask === false);
      return setRenderItems(res);
    }
    if (status === 'completed') {
      const res = todos.filter((val) => val.completeTask === true);
      return setRenderItems(res);
    }
    return setRenderItems(todos);
  };

  const handleSearchTextCards = (text) => {
    const lowerCase = text.toLowerCase();
    setRenderItems(todos.filter((val) => val.name.toLowerCase().includes(lowerCase)));
  };

  return (
    <div ref={pageRef} className={styles.content}>
      <div className={`container ${styles.page}`}>
        <Header />
        <main className={`d-flex flex-column ${styles.main}`}>
          {todos.length > 0 && (
            <SearchPanel
              handleFilterButtonCards={handleFilterButtonCards}
              handleSearchTextCards={handleSearchTextCards}
            />
          )}
          <Articles todos={renderItems} />
          <Form
            cardInputRef={cardInputRef}
            handleSubmitForm={handleSubmitForm}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
