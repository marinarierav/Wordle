import React from "react";
import { GROUNDTRUTH, MAX_LETTERS } from "./Game";
import { GameContext, GameContextType } from "./GameContext";
import Letter, {
  LetterInterface,
  LETTER_CORRECT,
  LETTER_EXIST,
  LETTER_WRONG,
} from "./Letter";

export interface WordInterface {
  text: string;
}

function Word({ text }: WordInterface) {
  const { addWord } = React.useContext(GameContext) as GameContextType;

  const [letters, setLetters] = React.useState(
    Array(MAX_LETTERS).fill({ letter: "" })
  );

  const countLetters = (letters = []) => {
    let letterCount: { [index: string]: number } = {};
    letters.forEach((letter) => {
      letterCount[letter] = (
        GROUNDTRUTH.match(new RegExp(letter, "g")) || []
      ).length;
    });
    return letterCount;
  };

  React.useEffect(() => {
    if (text.length <= 0) return;

    let letterCount = countLetters([...new Set([...text])]);

    // Set correct letters
    let letters: LetterInterface[] = [...text].map((letter, index) => {
      const isCorrect = letter === GROUNDTRUTH[index];

      if (isCorrect) {
        letterCount[letter] -= 1;
      }
      const type = isCorrect ? LETTER_CORRECT : LETTER_WRONG;

      return { letter: letter, type: type };
    });

    // Set misplaced letters
    letters = letters.map((letter, index) => {
      if (letter.type === LETTER_CORRECT) return letter;

      const isExisting = letterCount[letter.letter] > 0;
      if (isExisting) {
        letterCount[letter.letter] -= 1;
      }
      const type = isExisting ? LETTER_EXIST : LETTER_WRONG;

      return { letter: letter.letter, type: type };
    });

    addWord(letters);
    setLetters(letters);
  }, [text]);

  return (
    <ul className="letter--container">
      {letters.map((letter) => {
        return (
          <li className="letter-list">
            <Letter letter={letter.letter} type={letter.type} />
          </li>
        );
      })}
    </ul>
  );
}

export default Word;
