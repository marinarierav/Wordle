import Game, { MAX_LETTERS } from "./components/game/Game";
import GameContextProvider from "./components/game/GameContext";

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
        <div className="content">
          <p className="">Mixed countries, different difficulty levels...</p>
          <p className="description">
            Can you guess which country has {MAX_LETTERS} letters?
          </p>
          <Game></Game>
        </div>
        <div className="content content--row">
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
