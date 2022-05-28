import AppMenu from "./components/AppMenu";
import Game, { MAX_LETTERS } from "./components/Game";

function App() {
  return (
    <main>
      <div className="title">
        <ul className="title--container">
          <li className="title--box">
            <AppMenu isModalOpenInitially={false}></AppMenu>
          </li>
          <li>
            <h1 className="heading heading--title">Wordle</h1>
          </li>
          <li className="heading title--box">
            <p>(English)</p>
          </li>
        </ul>
        <h2 className="heading heading--desc">The popular daily word game</h2>
      </div>
      <div className="content game--container">
        <p className="game--box">A different word every day</p>
        <p className="game--box description">
          Can you guess which word{" "}
          <span className="description--highlight">
            has {MAX_LETTERS} letters
          </span>
          ?
        </p>
        <Game></Game>
      </div>
      <div className="content">
        <a href="https://github.com/marinarierav">
          <button className="btn">Follow me on GitHub</button>
        </a>
      </div>
    </main>
  );
}

export default App;
