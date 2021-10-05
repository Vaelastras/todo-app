import React, { useEffect, useRef, useState } from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import styles from '../../assets/modules/app.module.scss';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import Articles from '../Articles/Articles';
import Form from '../Form/Form';
import appStore from '../../store/store';
import { IMAGE_ARR, TIME_FOR_LOOP, SEARCH_URL } from '../../assets/utils/constants';
import Popup from '../Popup/Popup';

const store = appStore();
export const App = observer(() => {
  const [searchRequest, setSearchRequest] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [cardDelete, setCardDelete] = useState({});
  const pageRef = useRef('');
  const searchInputRef = useRef(null);
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

  useEffect(() => {
    if (localStorage.getItem('cards')) {
      runInAction(() => {
        store.cards = JSON.parse(localStorage.getItem('cards'));
      });
    } else {
      return null;
    }
    return null;
  }, []);

  const handlePopupToggle = (id = null, name = '') => {
    setPopupOpen(!popupOpen);
    setCardDelete({ id, name });
    console.log(cardDelete);
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handlePopupToggle();
      }
    });
  }, [popupOpen]);

  const focusInput = () => {
    cardInputRef.current.focus();
  };

  const handleFilterButtonCard = (filter) => {
    runInAction(() => {
      store.cardsFilter = filter;
    });
    focusInput();
  };

  const handleFilterButtonCards = (status, text) => {
    const lowerCaseText = text.toLowerCase();
    if (status === 'active') {
      return store.cards.filter((val) => (val.name.toLowerCase().includes(lowerCaseText) && val.completeTask === false) || `${val.id} ` === text);
    }
    if (status === 'completed') {
      return store.cards.filter((val) => (val.name.toLowerCase().includes(lowerCaseText) && val.completeTask === true) || `${val.id}  ` === text);
    }
    return store.cards.filter((val) => val.name.toLowerCase().includes(lowerCaseText) || `${val.id} ` === lowerCaseText);
  };

  const handleAddCard = (name) => {
    const createdAt = new Date().toISOString();
    const newCard = {
      id: store.cards.length > 0 ? store.cards[store.cards.length - 1].id + 1 : 1,
      name,
      completeTask: false,
      createdAt,
      completedAt: [],
    };
    localStorage.setItem('cards', JSON.stringify([...store.cards, newCard]));
    return store.addCard(newCard);
  };

  const handleDeleteCard = (id) => {
    const idx = store.cards.findIndex((val) => val.id === id);
    runInAction(() => store.handleDelete(idx));
    handlePopupToggle();
    if (store.cards.length === 0) {
      handlePopupToggle();
      return localStorage.removeItem('cards');
    }
    localStorage.setItem('cards', JSON.stringify(store.cards));
    return null;
  };

  const handleSubmitForm = (evt, name) => {
    evt.preventDefault();
    const upperCaseName = name.split('')[0].toUpperCase() + name.slice(1);
    setSearchRequest('');
    runInAction(() => handleAddCard(upperCaseName));
    focusInput();
  };

  const handleToggleCompleteCard = (id) => {
    const completeDate = new Date().toISOString();
    const index = store.cards.findIndex((item) => item.id === id);
    const value = !store.cards[index].completeTask;
    const booleanCompleteTask = {
      ...store.cards[index],
      completeTask: value,
      completedAt: value
        ? [...store.cards[index].completedAt, completeDate]
        : store.cards[index].completedAt,
    };
    runInAction(() => store.toggleComplete(booleanCompleteTask, index));
    localStorage.setItem('cards', JSON.stringify(store.cards));
  };

  const handleSearchContent = (name) => {
    window.open(`${SEARCH_URL}${name}`, '_blank');
    window.history.back();
  };

  const handlePopupCloseOverlay = (e) => {
    const classes = e.target.classList.value.split(' ').filter((val) => val.includes('popup_active'));
    if (e.target.classList.contains(classes)) {
      handlePopupToggle();
    }
  };

  const remainingTask = store.cards.filter((val) => val.completeTask === false).length;
  const renderCard = handleFilterButtonCards(store.cardsFilter, searchRequest);

  return (
    <div ref={pageRef} className={styles.content}>
      <div className={`container ${styles.page}`}>
        <Header
          totalTask={store.cards.length}
          remainingTask={remainingTask}
        />
        <main className={`d-flex flex-column ${styles.main}`}>
          {store.cards.length > 0 && (
            <SearchPanel
              searchInputRef={searchInputRef}
              cardsFilter={store.cardsFilter}
              setSearchRequest={setSearchRequest}
              handleFilterCard={handleFilterButtonCard}
              searchRequest={searchRequest}
            />
          )}
          <Articles
            handleToggleCompleteCard={handleToggleCompleteCard}
            // handleDeleteCard={handleDeleteCard}
            cards={renderCard}
            handleSearchContent={handleSearchContent}
            handlePopupToggle={handlePopupToggle}
          />
          <Form
            cardInputRef={cardInputRef}
            handleSubmitForm={handleSubmitForm}
          />
        </main>
        <Popup
          card={cardDelete}
          popupOpen={popupOpen}
          handlePopupCloseOverlay={handlePopupCloseOverlay}
          handlePopupToggle={handlePopupToggle}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
    </div>
  );
});

export default App;
