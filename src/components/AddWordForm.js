import React from "react";

function AddWordForm({ addWord, className }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    if (text.length !== 5) return;
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
