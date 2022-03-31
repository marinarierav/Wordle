import React from "react";
import { MAX_LETTERS } from "..";
import Letter from "./Letter";

function Keyboard({ addWord }: { addWord: Function }) {
  const LetterRow = ({ letters }) => {
    console.log(letters);
    return (
      <ul className="letter--container">
        {[...letters].map((letter) => {
          return (
            <li className="letter-list letter-list--keyboard">
              <Letter letter={letter} addWord={addWord} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul className="keyboard--container">
      {["QWERTYUIOP", "ASDFGHJKL", "⌫ZXCVBNM↩"].map((letters) => {
        return (
          <li>
            <LetterRow letters={letters} />
          </li>
        );
      })}
    </ul>
  );
}

export default Keyboard;
