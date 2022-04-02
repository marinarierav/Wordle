import React from "react";
import { MAX_LETTERS } from "../..";

function AddWordForm({ addWord }): JSX.Element {
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
    <div className="keyboard--container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a country... (e.g. Spain)"
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
