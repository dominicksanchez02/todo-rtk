import { createSlice } from '@reduxjs/toolkit';
import { TodoProps } from './todo.interfaces';

const initialState: TodoProps = {
  todos: [],
  isLoading: false
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    editTodo: (state, action) => {
      const { payload: { id, title } } =  action;
      state.todos = state.todos.map((todo) => (
        todo.id === id ? {
          ...todo,
          title: title
        } : todo
      ));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;