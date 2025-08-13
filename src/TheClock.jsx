import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const TheClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  );
};
export default TheClock;
