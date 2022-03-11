import Letter from "./Letter";

function Word({ text }) {
  const getLetters = function () {
    const letters = [];
    for (let i = 1; i <= 5; i++) {
      letters.push(
        <li>
          <Letter id={i} key={i} />
        </li>
      );
    }
    return letters;
  };

  const letters = getLetters();

  return (
    <div>
      <ul>{letters}</ul>
    </div>
  );
}

export default Word;
