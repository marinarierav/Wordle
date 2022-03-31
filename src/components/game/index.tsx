import React from "react";
import AddWordForm from "./Word/AddWordForm";
import Word from "./Word";
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

function Game() {
  console.log(GROUNDTRUTH);
  const [words, setWords] = React.useState(Array(MAX_WORDS).fill({ text: "" }));
  const [currentWordIndex, setCurrentWord] = React.useState(0);

  function addWord(text: string): void {
    if (isSuccess || currentWordIndex === MAX_WORDS) return;

    const newWords = words;
    newWords[currentWordIndex] = { text };
    setCurrentWord(currentWordIndex + 1);
    setWords(newWords);

    if (text === GROUNDTRUTH) {
      if (dateResolved !== seedForToday) {
        localStorage.setItem("isResolved", "1");
        localStorage.setItem("dateResolved", seedForToday);
        localStorage.setItem(
          "currentCombo",
          `${parseInt(currentCombo || "0") + 1}`
        );
        localStorage.setItem("totalWins", `${parseInt(totalWins || "0") + 1}`);
      }
      setSuccess(true);
      setIsModalOpen(true);
    } else if (currentWordIndex + 1 === MAX_WORDS) {
      localStorage.setItem("currentCombo", "0");
      setIsModalOpen(true);
    }
  }

  const [isModalOpen, setIsModalOpen] = React.useState(
    dateResolved === seedForToday
  );
  const [isSuccess, setSuccess] = React.useState(dateResolved === seedForToday);

  return (
    <div className="word--container">
      {words.map((word, index) => {
        return <Word text={word.text}></Word>;
      })}
      <Keyboard addWord={addWord} />
      {/* <AddWordForm addWord={addWord} /> */}
      <GameOverModal
        isModalOpenInitially={isModalOpen}
        isSuccess={isSuccess}
      ></GameOverModal>
    </div>
  );
}

export default Game;
