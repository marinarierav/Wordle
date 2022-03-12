import React, { useEffect } from "react";
import Letter from "./Letter";

export const MAX_LETTERS = 5;

function Word({ text }) {
  const [letters, setLetters] = React.useState(
    Array(MAX_LETTERS).fill({ letter: "" })
  );

  useEffect(() => {
    const letters = [...text].map((letter) => {
      return { letter: letter };
    });

    if (text.length > 0) {
      setLetters(letters);
    }
  }, [text]);

  return (
    <div>
      <ul>
        {letters.map((letter, index) => {
          return (
            <li>
              <Letter index={index} letter={letter.letter} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Word;
