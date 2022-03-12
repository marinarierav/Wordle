import React from "react";
import { MAX_LETTERS } from "./Word";

function AddWordForm({ addWord, className }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    if (text.length !== MAX_LETTERS) return;
    addWord(text.toUpperCase());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={className}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default AddWordForm;
