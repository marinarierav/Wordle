import React from "react";
import Word, { WordInterface } from "./Word";
import GameOverModal from "./GameOverModal";
import seedrandom from "seedrandom";
import Keyboard from "./Keyboard";

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

function Game(): JSX.Element {
  console.log(GROUNDTRUTH);
  const initialWords = Array(MAX_WORDS)
    .fill("")
    .map((text: string) => {
      return { text, isSubmit: false };
    });

  const [words, setWords]: [WordInterface[], Function] =
    React.useState(initialWords);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  console.log("Keyboard: " + words[currentWordIndex].text);

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
    // Submit word
    let newWords: Array<WordInterface> = Array.from(words);

    if (letter === "↩") {
      if (words[currentWordIndex].text.length !== MAX_LETTERS) return;
      newWords[currentWordIndex].isSubmit = true;
      setWords(newWords);
      setCurrentWordIndex(currentWordIndex + 1);
      return;
    }

    // Backspace
    if (letter === "⌫") {
      newWords[currentWordIndex].text = newWords[currentWordIndex].text.slice(
        0,
        newWords[currentWordIndex].text.length - 1
      );
      setWords(newWords);
      return;
    }

    // Add non-submitted text
    if (newWords[currentWordIndex].text.length === MAX_LETTERS) {
      newWords[currentWordIndex].text = newWords[currentWordIndex].text.slice(
        0,
        MAX_LETTERS - 1
      );
    }
    newWords[currentWordIndex].text =
      newWords[currentWordIndex].text.concat(letter);
    setWords(newWords);
  }

  const [isModalOpen, setIsModalOpen] = React.useState(
    dateResolved === seedForToday
  );
  const [isSuccess, setSuccess] = React.useState(dateResolved === seedForToday);

  return (
    <div className="word--container">
      {words.map((word, index) => {
        return (
          <Word key={index} text={word.text} isSubmit={word.isSubmit}></Word>
        );
      })}
      <Keyboard enterLetter={enterLetter} />
      {/* <AddWordForm addWord={addWord} /> */}
      <GameOverModal
        isModalOpenInitially={isModalOpen}
        isSuccess={isSuccess}
      ></GameOverModal>
    </div>
  );
}

export default Game;
