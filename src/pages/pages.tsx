import Navbar from "../components/navbar/navbar.tsx";
import Home from "../components/home/home.tsx";
import Letter from "./letter.tsx";
import Joke from "./jokes.tsx";

import { SpotifyWebPlayer } from "../components/spotify-player/spotify-player.tsx";
import { useLocation } from "react-router-dom";

/**************************
 * Component declarations *
 **************************/
export function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  let component = <></>;

  if (currentPath == "/") {
    component = <Home />;
  } else if (currentPath == "/letter") {
    component = <Letter />;
  } else {
    component = <Joke />;
  }

  return (
    <>
      <div className="wrapper">
        <Navbar />
        {component}
      </div>
      <SpotifyWebPlayer />
    </>
  );
}
