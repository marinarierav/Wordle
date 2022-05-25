import Letter, { LetterInterface } from "./Letter";

function Word({ letters }: { letters: LetterInterface[] }): JSX.Element {
  return (
    <ul className="letter--container">
      {letters.map((letter, index) => {
        return (
          <li key={index} className="letter-list">
            <Letter letter={letter.letter} type={letter.type} />
          </li>
        );
      })}
    </ul>
  );
}

export default Word;
