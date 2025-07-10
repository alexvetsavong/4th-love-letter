import Clock from "../clock/clock.tsx";

// import reactLogo from "/logos/react.svg";
// import viteLogo from "/logos/vite.svg";

import duckLogo from "/logos/duck.svg";
import "./app.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="containerRow">
          <button className="duck">
            <img src={duckLogo} className="logo duck" alt="silly duck logo" />
          </button>
        </div>
      </div>
      <div className="container">
        <h1>
          <Clock />
        </h1>
        <h2>Happy Fourth Anniversary!</h2>
      </div>
    </>
  );
}
