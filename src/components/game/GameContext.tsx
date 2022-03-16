import * as React from "react";
import { LetterInterface } from "./Letter";

export type GameContextType = {
  wordHistory: LetterInterface[][];
  addWord: (word: LetterInterface[]) => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

function GameContextProvider({ children }) {
  const [wordHistory, setWordHistory] = React.useState([]);

  function addWord(word: LetterInterface[]) {
    const newWords = wordHistory.concat([word]);
    setWordHistory(newWords);
  }

  return (
    <GameContext.Provider value={{ wordHistory, addWord }}>
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
