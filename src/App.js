import React from "react";
import AddWordForm from "./components/AddWordForm";
import Word from "./components/Word";

function App() {
  const [words, setWords] = React.useState(Array(6).fill({ text: "" }));

  const [currentWordIndex, setCurrentWord] = React.useState(0);

  const addWord = (text) => {
    const newWords = words;
    newWords[currentWordIndex] = { text };
    setCurrentWord(currentWordIndex + 1);
    setWords(newWords);
  };

  return (
    <div>
      <h1 className="title">Wordle</h1>
      <div className="content">
        {words.map((word, index) => {
          return <Word text={word.text}></Word>;
        })}
        <AddWordForm addWord={addWord} className="card" />
      </div>
    </div>
  );
}

export default App;
