import React, { useEffect } from "react";
import Letter from "./Letter";

function Word({ text }) {
  const [letters, setLetters] = React.useState(Array(5).fill(""));

  useEffect(() => {
    if (text.length > 0) {
      setLetters([...text]);
    }
  }, [text]);

  return (
    <div>
      <ul>
        {letters.map((letter, index) => {
          return (
            <li>
              <Letter index={index} letter={letter} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Word;
