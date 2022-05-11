import { ItemProps } from '../../features/todo/todo.interfaces';

export interface TodoFormProps {
  id: number | undefined;
  title: string;
  onAdd(title: string): void;
  onEdit(id: number, title: string): void;
}

export interface TodoItemProps {
  todo: ItemProps;
  onDelete(id: number): void;
  onEdit(id: number, title: string): void;
}