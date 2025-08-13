import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TheCalender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calender">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
export default TheCalender;
