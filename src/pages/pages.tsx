import { StrictMode } from "react";
import App from "../components/app/app.tsx";
import Navbar from "../components/navbar/navbar.tsx";
import SpotifyPlayer from "../components/spotify-player/spotify-player.tsx"

export function Root() {
  return (
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>
  );
}

export function Letter() {
  return (
    <StrictMode>
      <Navbar />
      <SpotifyPlayer />
    </StrictMode>
  );
}