import Game, { MAX_LETTERS } from "./components/Game";
import GameContextProvider from "./components/Game/GameContext";

function App() {
  return (
    <GameContextProvider>
      <main>
        <div className="title">
          <ul className="title--container">
            <li className="title--box"></li>
            <li>
              <h1>Worldle 🌎</h1>
            </li>
            <li className="title--box">
              <p>(English)</p>
            </li>
          </ul>
          <h2>A Wordle of the World!</h2>
        </div>
        <div className="content game--container">
          <p className="game--box">A different country every day</p>
          <p className="game--box description">
            Can you guess which country{" "}
            <span className="description--highlight">
              has {MAX_LETTERS} letters
            </span>
            ?
          </p>
          <Game></Game>
        </div>
        <div className="content">
          <p>Creator: marinarierav</p>
          <a href="https://github.com/marinarierav">
            <button className="btn">@GitHub</button>
          </a>
        </div>
      </main>
    </GameContextProvider>
  );
}

export default App;
