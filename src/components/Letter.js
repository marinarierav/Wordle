export const LETTER_CORRECT = 1;
export const LETTER_EXIST = 2;
export const LETTER_WRONG = 3;

function Letter({ letter, type }) {
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
