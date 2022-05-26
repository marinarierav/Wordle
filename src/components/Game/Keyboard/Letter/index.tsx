import { SubmittedLettersInterface } from "../..";
import {
  LETTER_CORRECT,
  LETTER_MISPLACED,
  LETTER_UNSUBMITTED,
  LETTER_WRONG,
} from "../../Word/Letter";

function Letter({
  letter,
  enterLetter,
  submittedLetters,
}: {
  letter: string;
  enterLetter: Function;
  submittedLetters: SubmittedLettersInterface;
}): JSX.Element {
  const handleSubmit = (e) => {
    e.preventDefault();
    enterLetter(letter.toUpperCase());
  };

  let type = LETTER_UNSUBMITTED;
  if (submittedLetters.correctLetters.includes(letter)) {
    type = LETTER_CORRECT;
  } else if (submittedLetters.misplacedLetters.includes(letter)) {
    type = LETTER_MISPLACED;
  } else if (submittedLetters.wrongLetters.includes(letter)) {
    type = LETTER_WRONG;
  }
  return (
    <div className={"letter letter--keyboard "}>
      <button
        className={
          "button--keyboard " +
          (type === LETTER_CORRECT
            ? "letter--correct"
            : type === LETTER_MISPLACED
            ? "letter--exist"
            : type === LETTER_WRONG
            ? "letter--wrong"
            : "")
        }
        onClick={handleSubmit}
      >
        {letter}
      </button>
    </div>
  );
}

export default Letter;
