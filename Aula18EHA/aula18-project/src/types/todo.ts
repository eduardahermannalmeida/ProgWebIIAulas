export interface TodoType {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface FormProps {
  onAddTodo: (todo: string) => void;
}
