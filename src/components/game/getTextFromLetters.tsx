import { LetterInterface } from "./Word/Letter";

export default function getTextFromLetters(letters: LetterInterface[]) {
  let text = "";
  letters.forEach((letter) => {
    text += letter.letter;
  });
  return text;
}
