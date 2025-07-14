import Home from "../components/home/home.tsx";
import Navbar from "../components/navbar/navbar.tsx";
// import SpotifyPlayer from "../components/spotify-player/spotify-player.tsx";
import { SpotifyWebPlayer } from "../components/spotify-player/spotify-player.tsx";
import { useLocation } from "react-router-dom";

/***************************
 * Const content rendering *
 ***************************/
const letter = (
  <div className="container">
    <h2>To my dearly beloved Amie,</h2>
    <p>
      I hope that you're doing well, and that the time you spent with your
      family was wonderful and rejuvenating for you. These past four years have
      been amazing, and I can't believe how quickly they've flown by. Although
      we (mostly me) aren't perfect, I would never trade away any of the times
      that we have gone through and spent together away for anything else.
      Whatever lives we live, however many decades span before us, you are the
      only one whom I want to share it with.
    </p>
    <p>
      I want to experience forever with you, and to share this life with you is
      a blessing among blessings. I love you, and you will always have my heart.
      You're the north star that guides me in the dark of night, the moon that
      highlights and the sun that breaks at dawn and lights my world, as surely
      as it continues to rise and set, from the east to the west.
    </p>
    <p>
      From the way you cry, reading your latest obsession book, living and
      experiencing the stories of the characters, to the way you make silly
      faces when I call you beautiful, as if it makes it any less true, and to
      the small nothings we whisper and speak about at night, talking about
      everything and nothing at the same time until we realize we long passed
      our bedtimes.
    </p>
    <p>
      I can't wait to see you read so many books and stories, to and I want
      nothing more than to be a part of your story. To many more sit-downs at
      new restaurants; to cotton candy clouds over vermillion sunsetse on the
      beach horizon; and to the infinitely little moments of laughter followed
      by comfortable silence.
      <div className="containerRow">
        Now check <span className="emphasis"> this </span> out:
      </div>
      <iframe
        src="https://giphy.com/embed/KvES8uAj11XeyhurG2"
        width="256"
        height="256"
        className="giphy-embed"
      ></iframe>
      <p className="containerRow">
        You have<span className="emphasis"> bewitched </span> me, body and soul.
      </p>
      <p>
        Forever yours, truly,<br></br>Alex Vetsavong
      </p>
    </p>
  </div>
);

const joke = (
  <div className="container">
    <h2>Which birthday lasts the shortest for anyone?</h2>
    <div className="spoiler">
      <h3>Your 62nd birthday! Because it's only a sixty-second birthday!</h3>
      <h3>Like sixty seconds as in a minute!</h3>
    </div>
  </div>
);

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
    component = <>{letter}</>;
  } else {
    component = <>{joke}</>;
  }

  return (
    <div className="container">
      <Navbar />
      {component}
      {/* <SpotifyPlayer /> */}
      <SpotifyWebPlayer />
    </div>
  );
}
