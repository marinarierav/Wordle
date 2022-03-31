import React from "react";
import { MAX_LETTERS } from "../..";
import { GameContext, GameContextType } from "../../GameContext";

export const LETTER_CORRECT = 1;
export const LETTER_EXIST = 2;
export const LETTER_WRONG = 3;

function Letter({ letter, addWord }: { letter: string; addWord: Function }) {
  const { currentWord, addCurrentLetter } = React.useContext(
    GameContext
  ) as GameContextType;

  const handleSubmit = (e) => {
    e.preventDefault();
    addCurrentLetter(letter);
    if (!currentWord) return;
    if (currentWord.length !== MAX_LETTERS) return;
    if (/[^a-z]/i.test(currentWord)) return;

    addWord(currentWord.toUpperCase());
  };

  return (
    <div className="letter letter--keyboard">
      <button className="button--keyboard" onClick={handleSubmit}>
        {letter}
      </button>
    </div>
  );
}

export default Letter;
