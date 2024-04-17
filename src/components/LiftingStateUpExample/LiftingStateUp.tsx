import { useState } from "react";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const LiftingStateUp = () => {
  const [todos, setTodos] = useState<string[]>(["item 1"]);

  return (
    <>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </>
  );
};

export default LiftingStateUp;
