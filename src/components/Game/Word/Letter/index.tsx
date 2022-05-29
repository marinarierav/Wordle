export const LETTER_CORRECT = 1;
export const LETTER_MISPLACED = 2;
export const LETTER_WRONG = 3;
export const LETTER_UNSUBMITTED = 4;

type LetterType =
  | typeof LETTER_CORRECT
  | typeof LETTER_MISPLACED
  | typeof LETTER_UNSUBMITTED
  | typeof LETTER_WRONG;

export interface LetterInterface {
  letter: string;
  type: LetterType;
}

function Letter({
  letter,
  type,
  extraClass,
}: LetterInterface & { extraClass: string }): JSX.Element {
  return (
    <div
      className={
        `letter ${extraClass} ` +
        (type === LETTER_CORRECT
          ? "letter--correct"
          : type === LETTER_MISPLACED
          ? "letter--exist"
          : "")
      }
    >
      <h2>{letter}</h2>
    </div>
  );
}

export default Letter;
