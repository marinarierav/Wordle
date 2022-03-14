import Game from "./components/game/Game";

function App() {
  return (
    <div>
      <ul className="title title--container">
        <li className="title--box">
          <h1>Wordle</h1>
        </li>
        <li className="title--box">
          <p>(Català)</p>
        </li>
      </ul>
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
