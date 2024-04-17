import { FC } from "react";

interface Props {
  todos: string[];
}

const TodoCount: FC<Props> = ({ todos }) => {
  return <div>Total Todos: {todos.length}</div>;
};

export default TodoCount;
