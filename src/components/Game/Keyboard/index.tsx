import { SubmittedLettersInterface } from "..";
import Letter from "./Letter";

function Keyboard({
  enterLetter,
  submittedLetters,
}: {
  enterLetter: Function;
  submittedLetters: SubmittedLettersInterface;
}): JSX.Element {
  const LetterRow = ({ letters }) => {
    return (
      <ul className="letter--container">
        {[...letters].map((letter, index) => {
          return (
            <li key={index} className="letter-list letter-list--keyboard">
              <Letter
                letter={letter}
                enterLetter={enterLetter}
                submittedLetters={submittedLetters}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul className="keyboard--container">
      {["QWERTYUIOP", "ASDFGHJKL", "⌫ZXCVBNM↩"].map((letters, index) => {
        return (
          <li key={index}>
            <LetterRow letters={letters} />
          </li>
        );
      })}
    </ul>
  );
}

export default Keyboard;
