import Home from "../components/home/home.tsx";
import Navbar from "../components/navbar/navbar.tsx";
// import SpotifyPlayer from "../components/spotify-player/spotify-player.tsx";
import { SpotifyWebPlayer } from "../components/spotify-player/spotify-player.tsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

/***************************
 * Const content rendering *
 ***************************/
function Letter() {
  return (
    <div className="container">
      <h2>To my dearly beloved Amie,</h2>
      <p>
        I hope that you're doing well, and that the time you spent with your
        family was wonderful and rejuvenating for you. These past four years
        have been amazing, and I can't believe how quickly they've flown by.
        Although we (mostly me) aren't perfect, I would never trade away any of
        the times that we have gone through and spent together away for anything
        else. Whatever lives we live, however many decades span before us, you
        are the only one whom I want to share it with.
      </p>
      <p>
        I want to experience forever with you, and to share this life with you
        is a blessing among blessings. I love you, and you will always have my
        heart. You're the north star that guides me in the dark of night, the
        moon that highlights and the sun that breaks at dawn and lights my
        world, as surely as it continues to rise and set, from the east to the
        west.
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
        new restaurants; to cotton candy clouds over vermillion sunsets on the
        beach horizon; and to the infinitely little moments of laughter followed
        by comfortable silence.
      </p>
      <p className="containerRow">
        Now check <span className="emphasis"> this </span> out:
      </p>
      <iframe
        src="https://giphy.com/embed/GeiOtb4r9prcdym4t8"
        width="384"
        height="384"
        className="giphy-embed"
      ></iframe>
      <p className="containerRow">
        You have<span className="emphasis"> bewitched </span> me, body and soul.
      </p>
      <p>Forever yours,</p>
      <p>
        Your silly goose,<br></br>Alex Vetsavong
      </p>
    </div>
  );
}

interface jokeObject {
  setup: string;
  punchline: string;
  explanation: string;
}

const jokes: jokeObject[] = [
  {
    setup: "Which birthday lasts the shortest for anyone?",
    punchline: "Your 62nd birthday! Because it's only a sixty-second birthday!",
    explanation: "Like sixty seconds as in a minute!",
  },
  {
    setup: "What did the lettuce say to the annoying tomato?",
    punchline: "I would berry much appreciate it if you LEAF me alone",
    explanation:
      "Get it? Like how tomatoes are berries and lettuce have leaves?",
  },
  {
    setup:
      "What did the cell say to his sister cell when she stepped on his toes?",
    punchline: "Ouch! You just broke my toes, sis!",
    explanation: "Because mitosis and cells!",
  },
  {
    setup: "I would avoid the sushi, if I were you:",
    punchline: "It's a little fishy.",
    explanation: "",
  },
  {
    setup: "How do you organize an outer space party?",
    punchline: "You planet.",
    explanation: "Heeheehee, plan-ET. Like plan it!",
  },
  {
    setup: "What did Alex say to Amie as she came into the room?",
    punchline: "I love you very much!",
    explanation:
      "This one's not a joke. I just wanted another place to say it :)",
  },
];

function Joke() {
  const [idx, setIdx] = useState(0);
  function handleClick() {
    let max: number = jokes.length;
    let randomIdx: number = 0;

    while (randomIdx === idx) {
      randomIdx = Math.floor(Math.random() * max);
    }

    console.log(`
      Random Idx: ${randomIdx}
      Jokes array length: ${max}
    `);
    setIdx(randomIdx);
    return randomIdx;
  }

  return (
    <>
      <div className="container">
        <h2>{jokes[idx].setup}</h2>
        <div className="spoiler">
          <h3>{jokes[idx].punchline}</h3>
          <h4>{jokes[idx].explanation}</h4>
        </div>
      </div>
      <button className="joke-button" onClick={handleClick}>
        Click/touch for new joke!
      </button>
    </>
  );
}

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
