import React from "react";
import { useState, useEffect } from "react";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2> {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;