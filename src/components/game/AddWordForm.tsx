import React from "react";
import { MAX_LETTERS } from "./Game";

function AddWordForm({ addWord }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    if (text.length !== MAX_LETTERS) return;
    if (/[^a-z]/i.test(text)) return;

    addWord(text.toUpperCase());
    setText("");
  };

  return (
    <div className="content--row">
      <form onSubmit={handleSubmit}>
        <input
          className="keyboard"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddWordForm;
