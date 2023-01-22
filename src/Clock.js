import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [cTime, setTime] = useState(time);

  const updatedTime = () => {
    var time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updatedTime, 1000);
  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};

export default Clock;
