import { MAX_WORDS } from "..";
import {
  LetterInterface,
  LETTER_CORRECT,
  LETTER_MISPLACED,
} from "../Word/Letter";

export function getShareableLink(): string {
  return "marinarierav-worldle.herokuapp.com";
}

export function getCurrentStreak(): string {
  const currentCombo = localStorage.getItem("currentCombo") || 0;
  const totalWins = localStorage.getItem("totalWins") || 0;
  return `Current streak: ${currentCombo}\r\nTotal wins: ${totalWins}\r\n`;
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
    `#Wordle (English) ${
      isSuccess ? wordHistory.length : "X"
    }/${MAX_WORDS}\r\n` +
    getPrettySquares(wordHistory) +
    getCurrentStreak()
  );
}

export function getFullShareable(
  wordHistory: LetterInterface[][],
  isSuccess: boolean
): string {
  return getShareableText(wordHistory, isSuccess) + getShareableLink();
}
