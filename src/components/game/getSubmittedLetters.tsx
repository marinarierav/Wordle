import { GROUNDTRUTH, SubmittedLettersInterface } from ".";
import getTextFromLetters from "./getTextFromLetters";
import {
  LetterInterface,
  LETTER_CORRECT,
  LETTER_MISPLACED,
  LETTER_WRONG,
} from "./Word/Letter";

function countLetters(letters = []) {
  let letterCount: { [index: string]: number } = {};
  letters.forEach((letter) => {
    letterCount[letter] = (
      GROUNDTRUTH.match(new RegExp(letter, "g")) || []
    ).length;
  });
  return letterCount;
}

export default function getSubmittedLetters(submittedWord: LetterInterface[]): {
  letters: LetterInterface[];
  classifiedLetters: SubmittedLettersInterface;
} {
  const text = getTextFromLetters(submittedWord);

  if (text.length <= 0) return;

  let letterCount = countLetters([...new Set([...text])]);

  // Set correct letters
  let correctLetters = "";
  let misplacedLetters = "";
  let wrongLetters = "";
  let letters: LetterInterface[] = [...text].map((letter, index) => {
    const isCorrect = letter === GROUNDTRUTH[index];

    if (isCorrect) {
      letterCount[letter] -= 1;
      correctLetters = correctLetters + letter;
    }
    const type = isCorrect ? LETTER_CORRECT : LETTER_WRONG;

    return { letter: letter, type: type };
  });

  // Set misplaced letters
  letters = letters.map((letterObject, index) => {
    if (letterObject.type === LETTER_CORRECT) return letterObject;

    const isExisting = letterCount[letterObject.letter] > 0;
    if (isExisting) {
      letterCount[letterObject.letter] -= 1;
      misplacedLetters = misplacedLetters + letterObject.letter;
    } else {
      wrongLetters = wrongLetters + letterObject.letter;
    }
    const type = isExisting ? LETTER_MISPLACED : LETTER_WRONG;

    return { letter: letterObject.letter, type: type };
  });
  return {
    letters,
    classifiedLetters: { correctLetters, misplacedLetters, wrongLetters },
  };
}
