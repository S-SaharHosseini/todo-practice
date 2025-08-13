import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import TheHeader from "./TheHeader";
import TheClock from "./TheClock";
import TheCalender from "./TheCalender";
import AddTodo from "./AddTodo";
import TodosItem from "./TodosItem";
import todoContext from "./TodoContext";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="bg-layer"></div>
      <div className="main">
        <TheHeader />
        <div className="content">
          <div className="section-one">
            <todoContext.Provider value={{ todos, setTodos }}>
              <AddTodo />
              <TodosItem />
            </todoContext.Provider>
          </div>

          <div className="section-two">
            <TheClock />
            <TheCalender />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
