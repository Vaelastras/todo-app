import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    cards: [],
  },
  reducers: {
    addTodo(state, action) {
      const createdAt = new Date().toISOString();
      state.cards.push({
        id: state.cards.length > 0 ? state.cards[state.cards.length - 1].id + 1 : 1,
        name: action.payload.name,
        completeTask: false,
        createdAt,
        completedAt: [],
      });
    },
    removeTodo(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.cards = state.cards.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const toggledTodo = state.cards.find(
        (todo) => todo.id === action.payload.id,
      );
      toggledTodo.completeTask = !toggledTodo.completeTask;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
