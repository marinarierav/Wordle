import Game from "./components/game/Game";

function App() {
  return (
    <div>
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
        <Game></Game>
      </div>
      <div className="content content--row">
        <p>Creator: marinarierav</p>
        <a href="https://github.com/marinarierav">
          <button className="btn">@GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default App;
