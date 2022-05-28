import React from "react";
import { data5letters } from "../data/5letters";

const ENABLED_TEXT = "Enabled";
const DISABLED_TEXT = "Disabled";

export function validateLanguageWord(text: string): boolean {
  return data5letters.indexOf(text.toLocaleLowerCase()) >= 0;
}

export function isValidateLanguageWordEnabled(): boolean {
  console.log();
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
      Validate word exists: {isValidateLanguageWord}
    </button>
  );
}

export default ValidLanguageWordButton;
