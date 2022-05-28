import Letter, { LetterInterface } from "./Letter";

function Word({
  letters,
  extraClass,
}: {
  letters: LetterInterface[];
  extraClass: string;
}): JSX.Element {
  return (
    <ul className="letter--container">
      {letters.map((letter, index) => {
        return (
          <li key={index} className="letter-list">
            <Letter
              letter={letter.letter}
              type={letter.type}
              extraClass={extraClass}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Word;
