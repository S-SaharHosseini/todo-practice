import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";
import todoContext from "./TodoContext";
const TodosItem = () => {
  const { todos, setTodos } = useContext(todoContext);

  const changeTodoStatus = (id) => {
    const index = todos.findIndex((f) => f.id == id);
    const newTodos = [...todos];
    newTodos[index].isDone=!newTodos[index].isDone
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((f) => f.id !== id);
    setTodos(newTodos);
  };

  if (todos.length > 0) {
    return (
      <div className="todos-list-section">
        <ul>
          {todos.map((e) => (
            <Todo
              item={e}
              key={e.id}
              changeTodoStatus={changeTodoStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="todos-list-section">
        <div className="empty">
          <p>You haven’t added any to-dos yet ...</p>
        </div>
      </div>
    );
  }
};
export default TodosItem;
