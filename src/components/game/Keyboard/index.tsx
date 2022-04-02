import Letter from "./Letter";

function Keyboard({ enterLetter }: { enterLetter: Function }): JSX.Element {
  const LetterRow = ({ letters }) => {
    return (
      <ul className="letter--container">
        {[...letters].map((letter, index) => {
          return (
            <li className="letter-list letter-list--keyboard">
              <Letter letter={letter} enterLetter={enterLetter} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul className="keyboard--container">
      {["QWERTYUIOP", "ASDFGHJKL", "⌫ZXCVBNM↩"].map((letters, index) => {
        return (
          <li>
            <LetterRow letters={letters} />
          </li>
        );
      })}
    </ul>
  );
}

export default Keyboard;
