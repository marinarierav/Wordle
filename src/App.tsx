import Game from "./components/game/Game";

function App() {
  return (
    <div>
      <h1 className="title">Wordle</h1>
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
