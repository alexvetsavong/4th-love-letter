import "./spotify-player.css";
import { useRef, useState, useEffect } from "react";

declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void; // You can define a more specific type for IFrameAPI if available.
  }
}

export function SpotifyWebPlayer() {
  const embedRef = useRef(null);
  const spotifyEmbedControllerRef: any = useRef(null);
  const [iFrameAPI, setIFrameAPI] = useState<any>(undefined);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const uri = "spotify:playlist:1wuBX0X1V08tL1oMVF0qyu";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (iFrameAPI) {
      return;
    }

    window.onSpotifyIframeApiReady = (SpotifyIframeApi) => {
      setIFrameAPI(SpotifyIframeApi);
    };
  }, [iFrameAPI]);

  useEffect(() => {
    if (playerLoaded || iFrameAPI === undefined) {
      return;
    }
    iFrameAPI.createController(
      embedRef.current,
      {
        width: "100%",
        height: "294.75px",
        uri: uri,
      },
      (spotifyEmbedController: any) => {
        spotifyEmbedController.addListener("ready", () => {
          setPlayerLoaded(true);
        });

        const handlePlaybackUpdate = (e: any) => {
          const { position, duration, isBuffering, isPaused, playingURI } =
            e.data;
          console.log(
            `Playback State updates:
              position - ${position},
              duration - ${duration},
              isBuffering - ${isBuffering},
              isPaused - ${isPaused},
              playingURI - ${playingURI},
              duration - ${duration}`
          );
        };

        spotifyEmbedController.addListener(
          "playback_update",
          handlePlaybackUpdate
        );

        spotifyEmbedController.addListener("playback_started", (e: any) => {
          const { playingURI } = e.data;
          console.log(`The playback has started for: ${playingURI}`);
        });

        spotifyEmbedControllerRef.current = spotifyEmbedController;
      }
    );

    return () => {
      if (spotifyEmbedControllerRef.current) {
        spotifyEmbedControllerRef.current.removeListener("playback_update");
      }
    };
  }, [playerLoaded, iFrameAPI, uri]);

  return (
    <>
      <div className="spotify-player">
        <div ref={embedRef}></div>
      </div>
      <div className="blur"></div>
    </>
  );
}
