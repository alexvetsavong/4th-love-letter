import { useState } from "react";
import "./clock.css";

function Clock() {
  let cur_time = new Date();
  const [time, setTime] = useState(cur_time);

  const UpdateTime = () => {
    cur_time = new Date();
    setTime(cur_time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="clock">
      {time.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })}
      <br></br>
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
}

export default Clock;
