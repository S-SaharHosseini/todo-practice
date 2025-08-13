import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import todoContext from "./TodoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useContext(todoContext);
  const changeTodo = (event) => {
    setTodo(event.target.value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    if (todo == "") {
      return;
    }
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: todo,
        isDone: false,
      },
    ]);
    setTodo("");
  };

  return (
    <div className="todo-form">
      <form>
        <input
          type="text"
          placeholder="input todo ..."
          value={todo}
          onChange={changeTodo}
        ></input>
        <button onClick={addNewTodo}>ADD NEW</button>
      </form>
    </div>
  );
};
export default AddTodo;
