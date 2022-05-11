import { useState, useEffect } from 'react';
import { TodoFormProps } from './todo.interfaces';

const TodoForm = (props: TodoFormProps) => {
  const [ id, setId ] = useState<number | null>();
  const [ title, setTitle ] = useState<string>('');
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { onEdit, onAdd } = props;

    e.preventDefault();
    if (!title) {
      return;
    }
    setTitle('');
    if (id) {
      onEdit(id, title);
      setId(null);

       return;
    }
  
    onAdd(title);
  }

  useEffect(() => {
    setId(props.id);
    setTitle(props.title);
  }, [ props.id, props.title ]);

  const buttonText = id ? 'Save' : 'Add';
  const TodoFormElement = (
    <form onSubmit={ handleFormSubmit }>
      <div>
        <input
          type="text"
          value={ title }
          className="inputTitle"
          onChange={ handleInputChange }
          placeholder="What needs to be done?"
        />
        <button type="submit" className="btnSubmit">{ buttonText }</button>
      </div>
    </form>
  );

  return TodoFormElement;
};

export default TodoForm;