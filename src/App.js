import React from "react";
import AddWordForm from "./components/AddWordForm";
import Word from "./components/Word";

function App() {
  const [words, setWords] = React.useState(Array(6).fill({ text: "Word" }));

  const addWord = (text) => {
    const newWords = [...words, { text }];
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
