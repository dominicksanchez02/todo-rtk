export interface TodoProps {
  todos: Array<ItemProps>;
  isLoading: boolean;
}

export interface ItemProps {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}