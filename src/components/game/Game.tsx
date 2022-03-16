import React from "react";
import AddWordForm from "./AddWordForm";
import Word from "./Word";
import GameOverModal from "./modal/GameOverModal";

const WORDS = {
  4: [
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
  ],
  5: [
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
  ],
  6: [
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
  ],
};
export const DIFFICULTY = 4 + Math.floor(Math.random() * 3);
export const GROUNDTRUTH =
  WORDS[DIFFICULTY][
    Math.floor(Math.random() * WORDS[DIFFICULTY].length)
  ].toUpperCase();
export const MAX_LETTERS = GROUNDTRUTH.length;

function Game() {
  console.log(GROUNDTRUTH);
  const MAX_WORDS = DIFFICULTY + 1;
  const [words, setWords] = React.useState(Array(MAX_WORDS).fill({ text: "" }));
  const [currentWordIndex, setCurrentWord] = React.useState(0);

  function addWord(text: string): void {
    if (isSuccess || currentWordIndex === MAX_WORDS) return;

    const newWords = words;
    newWords[currentWordIndex] = { text };
    setCurrentWord(currentWordIndex + 1);
    setWords(newWords);

    if (text === GROUNDTRUTH) {
      setSuccess(true);
      setIsModalOpen(true);
    } else if (currentWordIndex + 1 === MAX_WORDS) {
      setIsModalOpen(true);
    }
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);

  return (
    <div>
      {words.map((word, index) => {
        return <Word text={word.text}></Word>;
      })}
      <AddWordForm addWord={addWord} />
      <GameOverModal
        isModalOpenInitially={isModalOpen}
        isSuccess={isSuccess}
        numberOfTries={currentWordIndex + 1}
      ></GameOverModal>
    </div>
  );
}

export default Game;
