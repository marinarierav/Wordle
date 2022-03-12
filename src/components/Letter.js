import { GROUNDTRUTH } from "../App";

function Letter({ letter, index }) {
  const validateLetterExists = () => {
    if (letter.length <= 0) return;
    let count = (GROUNDTRUTH.match(new RegExp(letter, "g")) || []).length;
    return count > 0;
  };

  const isCorrect = letter === GROUNDTRUTH[index];
  const isExisting = !isCorrect && validateLetterExists();

  return (
    <div
      className={
        "letter " +
        (isCorrect ? "letter--correct" : isExisting ? "letter--exist" : "")
      }
    >
      <h2>{letter}</h2>
    </div>
  );
}

export default Letter;
