import * as React from "react";
import { LetterInterface } from "./Word/Letter";

export type GameContextType = {
  wordHistory: LetterInterface[][];
  currentWord: string;
  addWord: (word: LetterInterface[]) => void;
  addCurrentLetter: (letter: string) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

function GameContextProvider({ children }) {
  const [wordHistory, setWordHistory] = React.useState([]);
  const [currentWord, setCurrentWord] = React.useState("");

  function addWord(word: LetterInterface[]) {
    const newWords = wordHistory.concat([word]);
    setWordHistory(newWords);
  }

  function addCurrentLetter(letter: string) {
    setCurrentWord(currentWord + letter);
  }

  return (
    <GameContext.Provider
      value={{ wordHistory, addWord, currentWord, addCurrentLetter }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
