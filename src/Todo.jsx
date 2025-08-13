import React from "react";
import ReactDOM from "react-dom/client";

const Todo = (props) => {
  return (
    <li>
      <p>
        {props.item.isDone ? (
          <del>{props.item.title}</del>
        ) : (
          <span>{props.item.title}</span>
        )}
      </p>
      <div className="actions">
        <i
          className={`fi  ${
            props.item.isDone ? "fi-rs-cross-small" : "fi-rs-check"
          }`}
          onClick={() => props.changeTodoStatus(props.item.id)}
        ></i>
        <i
          className="fi fi-rs-trash"
          onClick={() => props.deleteTodo(props.item.id)}
        ></i>
      </div>
    </li>
  );
};
export default Todo;
