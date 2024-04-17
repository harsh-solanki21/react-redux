import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  setTodos: Dispatch<SetStateAction<string[]>>;
}

const AddTodo: FC<Props> = ({ setTodos }) => {
  const [data, setData] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prevTodos: string[]) => [...prevTodos, data]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
