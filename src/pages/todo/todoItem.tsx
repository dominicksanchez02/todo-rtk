import { TodoItemProps } from './todo.interfaces';

const TodoItem = (props: TodoItemProps) => {
  const { todo, onDelete, onEdit } = props;
  const handleDelete = () => {
    onDelete(todo.id);
  }
  const handleEdit = () => {
    const { id, title } = todo
    onEdit(id, title);
  }
  const todoItemElement = (
    <li>
      { todo.title }
      <button className="btnDelete" onClick={ handleDelete }>Delete</button>
      <button className="btnEdit" onClick={ handleEdit }>Edit</button>
    </li>
  )

  return todoItemElement;
}

export default TodoItem;