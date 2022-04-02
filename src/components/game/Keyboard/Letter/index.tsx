function Letter({
  letter,
  enterLetter,
}: {
  letter: string;
  enterLetter: Function;
}): JSX.Element {
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (letter === "↩") {
    //   if (!currentText) return;
    //   if (currentText.length !== MAX_LETTERS) return;
    //   if (/[^a-z]/i.test(currentText)) return;
    //   setCurrentText({ text: currentText.toUpperCase() });
    // }
    enterLetter(letter.toUpperCase());
  };

  return (
    <div className="letter letter--keyboard">
      <button className="button--keyboard" onClick={handleSubmit}>
        {letter}
      </button>
    </div>
  );
}

export default Letter;
