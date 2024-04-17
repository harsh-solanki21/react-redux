import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./todo.module.css";
import TodoList from "./TodoList";
import { RootState } from "../../app/store";
import {
  addToTodos,
  editTodos,
  Status,
  type ITodo,
} from "../../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const initialState: ITodo = {
    id: "",
    text: "",
    status: Status.incomplete,
  };

  const [text, setText] = useState<string>("");
  const [editItem, setEditItem] = useState<ITodo>(initialState);

  const handleAdd = () => {
    if (text === "") {
      return;
    }

    dispatch(
      addToTodos({
        id: nanoid(),
        text,
        status: Status.incomplete,
      })
    );

    setText("");
  };

  const handleUpdate = () => {
    dispatch(editTodos(editItem));
    setText("");
    setEditItem(initialState);
  };

  const handleEdit = (id: string) => {
    const existingTodo = todos.find((todo: ITodo) => todo.id === id);
    if (!existingTodo) {
      return;
    }
    setText(existingTodo.text);
    setEditItem(existingTodo);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (editItem.id) {
      setEditItem({ ...editItem, text: e.target.value });
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>Todo List</span>
        </div>
        <div className={styles.add}>
          <input
            className={styles.text}
            value={text}
            onChange={handleTextChange}
            type="text"
          />
          <button onClick={editItem.id ? handleUpdate : handleAdd}>
            {editItem.id ? "Update" : "Add"}
          </button>
        </div>
        <div className={styles.main}>
          {todos.map((todo: ITodo) => (
            <TodoList key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
