import { MAX_LETTERS } from "../Game";
import { LetterInterface, LETTER_CORRECT, LETTER_EXIST } from "../Letter";

export function getShareableLink(): string {
  return "marinarierav-worldle.herokuapp.com";
}

export function getPrettySquares(wordHistory: LetterInterface[][]) {
  console.log(wordHistory);
  let prettySquares = "";
  wordHistory.forEach((word) => {
    let row = "";
    word.forEach((letter) => {
      row +=
        letter.type === LETTER_CORRECT
          ? "🟩"
          : letter.type === LETTER_EXIST
          ? "🟨"
          : "⬜";
    });
    prettySquares += row + " \r\n";
  });
  return prettySquares;
}

export function getShareableText(wordHistory): string {
  return (
    `#Worldle (English) 1º ${wordHistory.length}/${MAX_LETTERS}\r\n` +
    getPrettySquares(wordHistory)
  );
}

export function getFullShareable(wordHistory): string {
  return getShareableText(wordHistory) + getShareableLink();
}
