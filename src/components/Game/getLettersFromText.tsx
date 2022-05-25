import { MAX_LETTERS } from ".";
import { LetterInterface, LETTER_UNSUBMITTED } from "./Word/Letter";

export default function getLettersFromText(text: string) {
  let newLetters: LetterInterface[] = [...text].map((letter, index) => {
    return { letter: letter, type: LETTER_UNSUBMITTED };
  });

  const fillSpaces = Array(MAX_LETTERS - newLetters.length).fill({
    letter: "",
    type: LETTER_UNSUBMITTED,
  });
  newLetters = newLetters.concat(fillSpaces);
  return newLetters;
}
