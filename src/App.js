import React, { useState } from "react";
import AddWordForm from "./components/AddWordForm";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Word from "./components/Word";

const WORDS = ["CALIU", "CALOR", "PAUTA", "SOMNI", "SALTA", "DONAR", "XIULA"];
export const GROUNDTRUTH = WORDS[Math.floor(Math.random() * WORDS.length)];

function App() {
  const MAX_WORDS = 6;
  const [words, setWords] = React.useState(Array(MAX_WORDS).fill({ text: "" }));
  const [currentWordIndex, setCurrentWord] = React.useState(0);

  const addWord = (text) => {
    if (currentWordIndex === MAX_WORDS) return;
    const newWords = words;
    newWords[currentWordIndex] = { text };
    setCurrentWord(currentWordIndex + 1);
    setWords(newWords);
    if (text === GROUNDTRUTH) {
      setCurrentWord(MAX_WORDS);
      setIsModalOpen(true);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModalHandler() {
    setIsModalOpen(false);
    return true;
  }

  function reloadWindow() {
    window.location.reload(false);
    return true;
  }

  return (
    <div>
      <h1 className="title">Wordle</h1>
      <div className="content">
        {words.map((word, index) => {
          return <Word text={word.text}></Word>;
        })}
        <AddWordForm addWord={addWord} />
        {isModalOpen && (
          <Modal
            onCancel={closeModalHandler && reloadWindow}
            onCancelText="Reintentar"
            onConfirm={closeModalHandler}
            onConfirmText="Acceptar"
          />
        )}
        {isModalOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
      <div className="content content--row">
        <p>Creator: marinarierav</p>
        <a href="https://github.com/marinarierav">
          <button className="btn">@GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default App;
