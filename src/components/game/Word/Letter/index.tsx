export const LETTER_CORRECT = 1;
export const LETTER_EXIST = 2;
export const LETTER_WRONG = 3;
export const LETTER_UNSUBMITTED = 4;

type LetterType =
  | typeof LETTER_CORRECT
  | typeof LETTER_EXIST
  | typeof LETTER_UNSUBMITTED
  | typeof LETTER_WRONG;

export interface LetterInterface {
  letter: string;
  type: LetterType;
}

function Letter({ letter, type }: LetterInterface): JSX.Element {
  return (
    <div
      className={
        "letter " +
        (type === LETTER_CORRECT
          ? "letter--correct"
          : type === LETTER_EXIST
          ? "letter--exist"
          : "")
      }
    >
      <h2>{letter}</h2>
    </div>
  );
}

export default Letter;
