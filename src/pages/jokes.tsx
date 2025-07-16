import { useState } from "react";

declare global {
  interface jokeObject {
    setup: string;
    punchline: string;
    explanation: string;
  }
}

const jokes: jokeObject[] = [
  {
    setup: "Which birthday lasts the shortest for anyone?",
    punchline: "Your 62nd birthday! Because it's only a sixty-second birthday!",
    explanation: "Like how sixty seconds are in a minute!",
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
    explanation: "Because cells go through mitosis (my-toe-sis)!",
  },
  {
    setup: "I would avoid the sushi, if I were you:",
    punchline: "It's a little fishy.",
    explanation: "Sushi is made from fish (usually) :)",
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
      "This one's not a joke, but I just wanted another place to say it!",
  },
  {
    setup: "What do you call a cow with no legs?",
    punchline: "Ground beef!",
    explanation: "Without any legs, that cow is grounded!",
  },
  {
    setup: "Why can't towels tell good jokes?",
    punchline: "They have a dry sense of humor.",
    explanation: "Towels are really dry, you know.",
  },
  {
    setup: "Do you know sign language?",
    punchline: "You should learn it, it’s pretty handy.",
    explanation: "Signing uses hands! c:",
  },
  {
    setup: "Why did the cross-eyed teacher get fired from their position?",
    punchline: "They couldn't keep an eye on their pupils!",
    explanation: "Students <=> pupils, but it's also about his eye pupils! LOL",
  },
  {
    setup: "How does Moses make coffee?",
    punchline: "Hebrews it.",
    explanation:
      "You probably understand this one better than me, love, but it made me smile!",
  },
];

export default function Joke() {
  interface seenJokeObject {
    idx: number;
    found: boolean;
  }

  let max: number = jokes.length;
  const initIdx: number = Math.floor(Math.random() * max);
  const seenJokes: seenJokeObject[] = [];

  const initSeenJokes = (arr: seenJokeObject[]) => {
    for (let i = 0; i < max; i++) {
      let joke: seenJokeObject = { idx: i, found: false };
      if (i === initIdx) {
        joke = { idx: i, found: true };
      }
      arr.push(joke);
    }
  };

  const clearSeenJokes = (arr: seenJokeObject[]): seenJokeObject[] => {
    for (let idx = 0; idx < arr.length; idx++) {
      arr[idx].found = false;
    }
    return arr;
  };

  const setSeenHandler = (
    arr: seenJokeObject[],
    idx: number
  ): seenJokeObject[] => {
    arr[idx].found = true;
    return arr;
  };

  const setFindFlag = (arr: seenJokeObject[]) => {
    return arr.find((obj: seenJokeObject) => obj.found === false) === undefined
      ? true
      : false;
  };

  initSeenJokes(seenJokes);
  const [idx, setIdx] = useState(initIdx);
  const [seen, setSeen] = useState(seenJokes);
  const [everyJokeSeen, setEveryJokeSeen] = useState(false);

  console.log(`
    Current idx: ${idx}
    Jokes array length: ${max}
    seenJokes: ${JSON.stringify(seen)}
    Seen every joke?: ${everyJokeSeen}
  `);

  function handleClick() {
    if (everyJokeSeen) {
      let randomIdx = Math.floor(Math.random() * max);
      setIdx(randomIdx);
      setSeen(clearSeenJokes(seen));
      setEveryJokeSeen(setFindFlag(seen));
      return;
    } else {
      let randomIdx: number = idx;
      while (seen[randomIdx].found === true && !everyJokeSeen) {
        randomIdx = Math.floor(Math.random() * max);
      }

      setSeen(setSeenHandler(seen, randomIdx));
      setEveryJokeSeen(setFindFlag(seen));

      console.log(`
        Current idx: ${idx}
        New idx: ${randomIdx}
        Jokes array length: ${max}
        seenJokes: ${JSON.stringify(seen)}
        Seen every joke?: ${everyJokeSeen}
        `);

      setIdx(randomIdx);
      return;
    }
  }

  return (
    <>
      <div className="container">
        <h2>{jokes[idx].setup}</h2>
        <div className="spoiler">
          <h3>{jokes[idx].punchline}</h3>
        </div>
        <h4>
          My explanation, just in case you need it because you should always be
          in on the joke, my love:
        </h4>
        <div className="spoiler emphasis">
          <h4>{jokes[idx].explanation}</h4>
        </div>
      </div>
      <button className="joke-button" onClick={handleClick}>
        Click/touch for new joke!
      </button>
    </>
  );
}
