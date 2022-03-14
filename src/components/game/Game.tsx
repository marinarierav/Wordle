import React from "react";
import AddWordForm from "./AddWordForm";
import Word from "./Word";
import GameOverModal from "./modal/GameOverModal";

const WORDS = ["CALIU", "CALOR", "PAUTA", "SOMNI", "SALTA", "DONAR", "XIULA"];
export const GROUNDTRUTH = WORDS[Math.floor(Math.random() * WORDS.length)];

function Game() {
  const MAX_WORDS = 6;
  const [words, setWords] = React.useState(Array(MAX_WORDS).fill({ text: "" }));
  const [currentWordIndex, setCurrentWord] = React.useState(0);

  function addWord(text: string): void {
    if (currentWordIndex === MAX_WORDS) return;

    const newWords = words;
    newWords[currentWordIndex] = { text };
    setCurrentWord(currentWordIndex + 1);
    setWords(newWords);
    if (text === GROUNDTRUTH) {
      setCurrentWord(MAX_WORDS);
      setIsModalOpen(true);
    }
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      {words.map((word, index) => {
        return <Word text={word.text}></Word>;
      })}
      <AddWordForm addWord={addWord} />
      <GameOverModal isModalOpen={isModalOpen}></GameOverModal>
    </div>
  );
}

export default Game;
