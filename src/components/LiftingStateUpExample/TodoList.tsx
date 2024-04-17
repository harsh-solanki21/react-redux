import { FC } from "react";

interface Props {
  todos: string[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}> {todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
