import "./spotify-player.css";

export default function SpotifyPlayer() {
  return (
    <div className="containerRow">
      <iframe
        className="spotify-player"
        src="https://open.spotify.com/embed/playlist/1wuBX0X1V08tL1oMVF0qyu?utm_source=generator&theme=0"
        // width="100%"
        // height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      ></iframe>
    </div>
  );
}
