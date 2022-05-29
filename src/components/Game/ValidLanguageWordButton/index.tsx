import React from "react";
import { data4letters } from "../data/4letters";
import { data5letters } from "../data/5letters";
import { data6letters } from "../data/6letters";

const ENABLED_TEXT = "Enabled";
const DISABLED_TEXT = "Disabled";

const data = {
  "4": data4letters,
  "5": data5letters,
  "6": data6letters,
};

export function validateLanguageWord(text: string): boolean {
  return data[text.length].indexOf(text) >= 0;
}

export function isValidateLanguageWordEnabled(): boolean {
  return localStorage.getItem("isValidateLanguageWord") === ENABLED_TEXT;
}

function ValidLanguageWordButton(): JSX.Element {
  const initialIsValidateLanguageWord = localStorage.getItem(
    "isValidateLanguageWord"
  );
  const [isValidateLanguageWord, setIsValidateLanguageWord] = React.useState(
    initialIsValidateLanguageWord ?? DISABLED_TEXT
  );

  function setIsValidateLanguageWordHandler(): void {
    const newValue =
      isValidateLanguageWord === ENABLED_TEXT ? DISABLED_TEXT : ENABLED_TEXT;
    localStorage.setItem("isValidateLanguageWord", newValue);
    setIsValidateLanguageWord(newValue);
  }
  return (
    <button className="btn" onClick={setIsValidateLanguageWordHandler}>
      Only allow English words: {isValidateLanguageWord}
    </button>
  );
}

export default ValidLanguageWordButton;
