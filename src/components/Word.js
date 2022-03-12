import React, { useEffect } from "react";
import { GROUNDTRUTH } from "../App";
import Letter, { LETTER_CORRECT, LETTER_EXIST, LETTER_WRONG } from "./Letter";

export const MAX_LETTERS = 5;

function Word({ text }) {
  const [letters, setLetters] = React.useState(
    Array(MAX_LETTERS).fill({ letter: "" })
  );

  const countLetters = (letters = []) => {
    let letterCount = [];
    letters.forEach((letter) => {
      letterCount[letter] = (
        GROUNDTRUTH.match(new RegExp(letter, "g")) || []
      ).length;
    });
    return letterCount;
  };

  useEffect(() => {
    if (text.length <= 0) return;

    let letterCount = countLetters([...new Set([...text])]);

    // Set correct letters
    let letters = [...text].map((letter, index) => {
      const isCorrect = letter === GROUNDTRUTH[index];

      if (isCorrect) {
        letterCount[letter] -= 1;
      }
      const type = isCorrect ? LETTER_CORRECT : LETTER_WRONG;

      return { letter: letter, type: type };
    });

    // Set misplaced letters
    letters = letters.map((letter) => {
      if (letter.type === LETTER_CORRECT) return letter;

      const isExisting = letterCount[letter.letter] > 0;
      if (isExisting) {
        letterCount[letter] -= 1;
      }
      const type = isExisting ? LETTER_EXIST : LETTER_WRONG;

      return { letter: letter.letter, type: type };
    });

    setLetters(letters);
  }, [text]);

  return (
    <div class="content--row">
      <ul>
        {letters.map((letter) => {
          return (
            <li class="letter-list">
              <Letter letter={letter.letter} type={letter.type} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Word;
