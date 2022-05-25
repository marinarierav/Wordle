import { MAX_WORDS } from "..";
import {
  LetterInterface,
  LETTER_CORRECT,
  LETTER_MISPLACED,
} from "../Word/Letter";

export function getShareableLink(): string {
  return "marinarierav-worldle.herokuapp.com";
}

export function getPrettySquares(wordHistory: LetterInterface[][]) {
  let prettySquares = "";
  wordHistory.forEach((word) => {
    let row = "";
    word.forEach((letter) => {
      row +=
        letter.type === LETTER_CORRECT
          ? "🟩"
          : letter.type === LETTER_MISPLACED
          ? "🟨"
          : "⬜";
    });
    prettySquares += row + " \r\n";
  });
  return prettySquares;
}

export function getShareableText(
  wordHistory: LetterInterface[][],
  isSuccess: boolean
): string {
  return (
    `#Worldle (English) 1º ${
      isSuccess ? wordHistory.length : "X"
    }/${MAX_WORDS}\r\n` + getPrettySquares(wordHistory)
  );
}

export function getFullShareable(
  wordHistory: LetterInterface[][],
  isSuccess: boolean
): string {
  return getShareableText(wordHistory, isSuccess) + getShareableLink();
}
