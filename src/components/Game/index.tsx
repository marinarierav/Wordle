import React from "react";
import Word from "./Word";
import GameOverModal from "./GameOverModal";
import seedrandom from "seedrandom";
import Keyboard from "./Keyboard";
import { LetterInterface, LETTER_UNSUBMITTED } from "./Word/Letter";
import getLettersFromText from "./getLettersFromText";
import getSubmittedLetters from "./getSubmittedLetters";
import getTextFromLetters from "./getTextFromLetters";
import { data5letters } from "./data/5letters";
import {
  isValidateLanguageWordEnabled,
  validateLanguageWord,
} from "./ValidLanguageWordButton";

const WORDS = [
  //5
  ...data5letters,
];

const seedForToday = Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
}).format(new Date());
//const seedForToday = "24/5/2022";
const rng = seedrandom(seedForToday);

export const GROUNDTRUTH =
  WORDS[Math.floor(rng() * WORDS.length)].toUpperCase();
export const MAX_LETTERS = GROUNDTRUTH.length;
export const MAX_WORDS = MAX_LETTERS + 1;

//localStorage.clear();
const dateLastSuccess = localStorage.getItem("dateLastSuccess");
const dateLastFinish = localStorage.getItem("dateLastFinish");
const dateLastParticipation = localStorage.getItem("dateLastParticipation");
const currentCombo = localStorage.getItem("currentCombo");
const totalWins = localStorage.getItem("totalWins");
//console.log("currentCombo: " + currentCombo);
//console.log("totalWins: " + totalWins);
console.log("dateLastSuccess: " + dateLastSuccess);
console.log("dateLastFinish: " + dateLastFinish);
console.log("dateLastParticipation: " + dateLastParticipation);
const alreadyFinishedToday = dateLastFinish === seedForToday;
const hasPlayedToday = dateLastParticipation === seedForToday;

export interface SubmittedLettersInterface {
  correctLetters: string;
  misplacedLetters: string;
  wrongLetters: string;
}

console.log("TODAY: " + seedForToday);
console.log(GROUNDTRUTH);

function Game(props): JSX.Element {
  function handleSubmit(newWords: LetterInterface[][]): void {
    // Save currently submitted words
    localStorage.setItem("currentWords", JSON.stringify(newWords));
    localStorage.setItem("currentWordIndex", `${currentWordIndex + 1}`);
    localStorage.setItem("dateLastParticipation", seedForToday);

    if (getTextFromLetters(newWords[currentWordIndex]) === GROUNDTRUTH) {
      if (dateLastSuccess !== seedForToday) {
        localStorage.setItem("dateLastSuccess", seedForToday);
        localStorage.setItem("dateLastFinish", seedForToday);
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
      localStorage.setItem("dateLastFinish", seedForToday);
      setIsModalOpen(true);
    }
  }

  function enterLetter(letter: string): void {
    if (alreadyFinishedToday) return;
    const letterObject: LetterInterface = { letter, type: LETTER_UNSUBMITTED };
    // Submit word
    let newWords: Array<LetterInterface[]> = Array.from(words);

    if (letter === "↩") {
      if (currentLetterIndex !== MAX_LETTERS) return;

      if (isSuccess || currentWordIndex === MAX_WORDS) return;

      const { letters, classifiedLetters } = getSubmittedLetters(
        words[currentWordIndex]
      );

      console.log(isValidateLanguageWordEnabled());
      if (isValidateLanguageWordEnabled()) {
        const isValidLanguageWord = validateLanguageWord(
          getTextFromLetters(letters)
        );
        if (!isValidLanguageWord) {
          setIsValidLanguageWord(false);
          return;
        }
      }

      newWords[currentWordIndex] = letters;
      setWords(newWords);
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentLetterIndex(0);
      setSubmittedLetters(
        addSubmittedLetters(submittedLetters, classifiedLetters)
      );
      setIsValidLanguageWord(true);
      handleSubmit(newWords);

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

  function addSubmittedLetters(
    submittedLetters: SubmittedLettersInterface,
    newSubmittedLetters: SubmittedLettersInterface
  ) {
    return {
      correctLetters: submittedLetters.correctLetters.concat(
        newSubmittedLetters.correctLetters
      ),
      misplacedLetters: submittedLetters.misplacedLetters.concat(
        newSubmittedLetters.misplacedLetters
      ),
      wrongLetters: submittedLetters.wrongLetters.concat(
        newSubmittedLetters.wrongLetters
      ),
    };
  }

  function generateEmptyWords() {
    return Array(MAX_WORDS)
      .fill("")
      .map((text: string) => {
        return getLettersFromText(text);
      });
  }

  const alreadySubmittedWords = hasPlayedToday
    ? JSON.parse(localStorage.getItem("currentWords"))
    : null;
  const storedWordIndex = hasPlayedToday
    ? parseInt(localStorage.getItem("currentWordIndex") || "0")
    : 0;
  //console.log("storedWordIndex: " + storedWordIndex);
  //console.log("alreadySubmittedWords");
  //console.log(alreadySubmittedWords);

  function generateWordsAndLetters(submittedPlainWords) {
    let generatedWords = [];
    let generatedLetters = {
      correctLetters: "",
      misplacedLetters: "",
      wrongLetters: "",
    };
    if (!submittedPlainWords) {
      return { generatedWords: null, generatedLetters };
    }
    submittedPlainWords.forEach((submittedWord, index) => {
      const result = getSubmittedLetters(submittedWord);
      if (!result) {
        generatedWords.push(submittedWord);
        return;
      }
      const { letters, classifiedLetters } = result;
      generatedWords.push(letters);
      generatedLetters = addSubmittedLetters(
        generatedLetters,
        classifiedLetters
      );
    });
    return { generatedWords, generatedLetters };
  }
  const { generatedWords, generatedLetters } = generateWordsAndLetters(
    alreadySubmittedWords
  );

  const [words, setWords]: [LetterInterface[][], Function] = React.useState(
    generatedWords || generateEmptyWords()
  );
  const [currentWordIndex, setCurrentWordIndex] =
    React.useState(storedWordIndex);
  const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

  const [submittedLetters, setSubmittedLetters]: [
    SubmittedLettersInterface,
    Function
  ] = React.useState(generatedLetters);

  const [isModalOpen, setIsModalOpen] = React.useState(
    dateLastFinish === seedForToday
  );
  const [isSuccess, setSuccess] = React.useState(
    dateLastSuccess === seedForToday
  );

  const [isValidLanguageWord, setIsValidLanguageWord]: [boolean, Function] =
    React.useState(true);

  return (
    <div>
      <GameOverModal
        isModalOpenInitially={isModalOpen}
        isSuccess={isSuccess}
      ></GameOverModal>
      <div className="word--container">
        {words.map((word, index) => {
          const extraClass =
            !isValidLanguageWord && currentWordIndex === index
              ? "word--mispelled"
              : "";
          return (
            <Word key={index} letters={word} extraClass={extraClass}></Word>
          );
        })}
        <Keyboard
          enterLetter={enterLetter}
          submittedLetters={submittedLetters}
        />
        {/* <AddWordForm addWord={addWord} /> */}
      </div>
    </div>
  );
}

export default Game;
