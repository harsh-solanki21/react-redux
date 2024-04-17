import { useDispatch } from "react-redux";
import styles from "./todoList.module.css";
import {
  changeTodoStatus,
  removeFromTodos,
  Status,
  ITodo,
} from "../../features/todo/todoSlice";

interface TodoList {
  todo: ITodo;
  handleEdit: (id: string) => void;
}

const TodoList = ({ todo, handleEdit }: TodoList) => {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeFromTodos(todo.id));
  };

  return (
    <div className={styles.todo}>
      <div className={styles.text}>
        <span
          className={`${todo.status === Status.complete && styles.complete}`}
        >
          {todo.text}
        </span>
      </div>
      <div className={styles.edit}>
        <button onClick={handleStatus}>
          {todo.status === Status.complete ? "Undone" : "Done"}
        </button>
        <button
          onClick={() => handleEdit(todo.id)}
          disabled={todo.status === Status.complete}
        >
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoList;
