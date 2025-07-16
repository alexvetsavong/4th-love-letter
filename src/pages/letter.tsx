function LetterContent() {
  return (
    <>
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
    </>
  );
}

function GiphyEmbed() {
  return (
    <iframe
      src="https://giphy.com/embed/GeiOtb4r9prcdym4t8"
      width="384"
      height="384"
      className="giphy-embed"
    ></iframe>
  );
}

function Salutations() {
  return (
    <>
      <p className="containerRow">
        You have<span className="emphasis"> bewitched </span> me, body and soul.
      </p>
      <p>Forever yours,</p>
      <p>
        Your silly goose,<br></br>Alex Vetsavong
      </p>
    </>
  );
}

export default function Letter() {
  return (
    <div className="container">
      <LetterContent />
      <GiphyEmbed />
      <Salutations />
    </div>
  );
}
