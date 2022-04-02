import React from "react";
import Word from "./Word";
import GameOverModal from "./GameOverModal";
import seedrandom from "seedrandom";
import Keyboard from "./Keyboard";
import { LetterInterface, LETTER_UNSUBMITTED } from "./Word/Letter";
import getLettersFromText from "./getLettersFromText";
import getSubmittedLetters from "./getSubmittedLetters";

const WORDS = [
  //4
  "Chad",
  "Cuba",
  "Fiji",
  "Iran",
  "Iraq",
  "Laos",
  "Mali",
  "Niue",
  "Oman",
  "Peru",
  "Togo",
  //5
  "Benin",
  "Egypt",
  "Gabon",
  "Ghana",
  "Kenya",
  "Libya",
  "Niger",
  "Sudan",
  "China",
  "India",
  "Japan",
  "Nepal",
  "Qatar",
  "Syria",
  "Yemen",
  "Nauru",
  "Palau",
  "Samoa",
  "Tonga",
  "Italy",
  "Malta",
  "Spain",
  //6
  "Angola",
  "Belize",
  "Bhutan",
  "Brazil",
  "Brunei",
  "Canada",
  "Cyprus",
  "France",
  "Gambia",
  "Greece",
  "Guinea",
  "Guyana",
  "Israel",
  "Jordan",
  "Kosovo",
  "Kuwait",
  "Latvia",
  "Malawi",
  "Mexico",
  "Monaco",
  "Norway",
  "Panama",
  "Poland",
  "Russia",
  "Rwanda",
  "Serbia",
  "Sweden",
  "Taiwan",
  "Turkey",
  "Tuvalu",
  "Uganda",
  "Zambia",
];

const dateResolved = localStorage.getItem("dateResolved");
const currentCombo = localStorage.getItem("currentCombo");
const totalWins = localStorage.getItem("totalWins");
//localStorage.clear();
console.log(currentCombo);
console.log(totalWins);
console.log(dateResolved);

const seedForToday = Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
}).format(new Date());
const rng = seedrandom(seedForToday);

export const GROUNDTRUTH =
  WORDS[Math.floor(rng() * WORDS.length)].toUpperCase();
export const MAX_LETTERS = GROUNDTRUTH.length;
export const MAX_WORDS = MAX_LETTERS + 1;

export interface SubmittedLettersInterface {
  correctLetters: string;
  misplacedLetters: string;
  wrongLetters: string;
}

function Game(): JSX.Element {
  console.log(GROUNDTRUTH);

  // function submitWord(text: string): void {
  //   if (isSuccess || currentWordIndex === MAX_WORDS) return;

  //   addText(text);
  //   setCurrentWordIndex(currentWordIndex + 1);

  //   if (text === GROUNDTRUTH) {
  //     if (dateResolved !== seedForToday) {
  //       localStorage.setItem("isResolved", "1");
  //       localStorage.setItem("dateResolved", seedForToday);
  //       localStorage.setItem(
  //         "currentCombo",
  //         `${parseInt(currentCombo || "0") + 1}`
  //       );
  //       localStorage.setItem("totalWins", `${parseInt(totalWins || "0") + 1}`);
  //     }
  //     setSuccess(true);
  //     setIsModalOpen(true);
  //   } else if (currentWordIndex + 1 === MAX_WORDS) {
  //     localStorage.setItem("currentCombo", "0");
  //     setIsModalOpen(true);
  //   }
  // }

  function enterLetter(letter: string): void {
    const letterObject: LetterInterface = { letter, type: LETTER_UNSUBMITTED };
    // Submit word
    let newWords: Array<LetterInterface[]> = Array.from(words);

    if (letter === "↩") {
      if (currentLetterIndex !== MAX_LETTERS) return;

      const { letters, submittedLetters } = getSubmittedLetters(
        newWords[currentWordIndex]
      );
      addSubmittedLetters(submittedLetters);

      newWords[currentWordIndex] = letters;
      //addSubmittedLetters(submittedLetters);

      setWords(newWords);
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentLetterIndex(0);
      return;
    }

    // Backspace
    if (letter === "⌫") {
      if (currentLetterIndex === 0) return;
      newWords[currentWordIndex][currentLetterIndex - 1].letter = "";
      setWords(newWords);
      setCurrentLetterIndex(currentLetterIndex - 1);
      return;
    }

    if (currentLetterIndex >= MAX_LETTERS) return;
    // Add non-submitted text
    newWords[currentWordIndex][currentLetterIndex] = letterObject;
    setWords(newWords);
    setCurrentLetterIndex(currentLetterIndex + 1);
  }

  function addSubmittedLetters(newSubmittedLetters: SubmittedLettersInterface) {
    setSubmittedLetters({
      correctLetters: submittedLetters.correctLetters.concat(
        newSubmittedLetters.correctLetters
      ),
      misplacedLetters: submittedLetters.misplacedLetters.concat(
        newSubmittedLetters.misplacedLetters
      ),
      wrongLetters: submittedLetters.wrongLetters.concat(
        newSubmittedLetters.wrongLetters
      ),
    });
  }

  const initialWords = Array(MAX_WORDS)
    .fill("")
    .map((text: string) => {
      return getLettersFromText(text);
    });

  const [words, setWords]: [LetterInterface[][], Function] =
    React.useState(initialWords);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

  const [submittedLetters, setSubmittedLetters]: [
    SubmittedLettersInterface,
    Function
  ] = React.useState({
    correctLetters: "",
    misplacedLetters: "",
    wrongLetters: "",
  });

  const [isModalOpen, setIsModalOpen] = React.useState(
    dateResolved === seedForToday
  );
  const [isSuccess, setSuccess] = React.useState(dateResolved === seedForToday);

  return (
    <div className="word--container">
      {words.map((word, index) => {
        return <Word key={index} letters={word}></Word>;
      })}
      <Keyboard enterLetter={enterLetter} submittedLetters={submittedLetters} />
      {/* <AddWordForm addWord={addWord} /> */}
      <GameOverModal
        isModalOpenInitially={isModalOpen}
        isSuccess={isSuccess}
      ></GameOverModal>
    </div>
  );
}

export default Game;
