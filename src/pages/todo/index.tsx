import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addTodo, editTodo, deleteTodo } from '../../features/todo/todoSlice';
import TodoItem from './todoItem';
import TodoForm from './todoForm';
import './todo.css';

const Todo = () => {
  const [ id, setId ] = useState<number>()
  const [ title, setTitle ] = useState<string>('')
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todo);
  const handleAdd = (title: string) => {
    const id = Math.floor((Math.random() * 9999) + 1)
    const payload = {
      id,
      title,
      userId: id,
      completed: false
    }

    dispatch(addTodo(payload));
  }
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  }
  const handleEdit = (id: number, title: string) => {
    setId(id);
    setTitle(title);
  }
  const handleConfirmEdit = (id: number, title: string) => {
    dispatch(editTodo({ id, title }));
  }
  const todoElement = (
    <div className="todoContainer">
      <h1>Todo</h1>
      <TodoForm
        onAdd={ handleAdd }
        onEdit={ handleConfirmEdit }
        id={ id }
        title={ title }
      />
      <ul className="todoList">
        {
          todos.length ?
            todos.map((todo) => (
              <TodoItem
                todo={ todo }
                key={ todo.id }
                onEdit={ handleEdit }
                onDelete={ handleDelete }
              />
            ))
          : 'No todo yet.'
        }
      </ul>
    </div>
  );

  return todoElement;
}

export default Todo