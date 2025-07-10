import Clock from "../clock/clock.tsx";

// import reactLogo from "/logos/react.svg";
// import viteLogo from "/logos/vite.svg";

import duckLogo from "/logos/duck.svg";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <button className="duck">
          <img src={duckLogo} className="logo duck" alt="silly duck logo" />
        </button>
      <Clock />
      <h2>Happy Fourth Anniversary!</h2>
      </div>
    </div>
  );
}
