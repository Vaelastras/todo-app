import { action, makeObservable, observable } from 'mobx';

const appStore = () => makeObservable({
  cards: [],
  cardsFilter: 'all',

  addCard(param) {
    this.cards = [...this.cards, param];
  },

  toggleComplete(bool, idx) {
    this.cards = [...this.cards.slice(0, idx), bool, ...this.cards.slice(idx + 1)];
  },

  handleDelete(idx) {
    this.cards = [...this.cards.slice(0, idx), ...this.cards.slice(idx + 1)];
  },

}, {
  cards: observable,
  cardsFilter: observable,
  addCard: action,
  toggleComplete: action,
  handleDelete: action,
});

export default appStore;
