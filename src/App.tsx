import { useState } from "react";
import reactLogo from "/logos/react.svg";
import viteLogo from "/logos/vite.svg";
import duckLogo from "/logos/duck.svg";
import "./App.css";

function Clock() {
  let cur_time = new Date().toLocaleString();
  const [time, setTime] = useState(cur_time);

  const UpdateTime = () => {
    cur_time = new Date().toLocaleString();
    setTime(cur_time);
  };

  setInterval(UpdateTime, 1000);

  return <div className="clock">{time}</div>;
}

export default function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="/">
          <img src={duckLogo} className="logo duck" alt="silly duck logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Happy Fourth Anniversary!</h1>
      <h2>
        <Clock />
      </h2>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="footer">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}
