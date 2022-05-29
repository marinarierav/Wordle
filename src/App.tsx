import { Link } from "react-router-dom";
import Wordle from "./components/Wordle";

function App() {
  return (
    <main>
      <Wordle></Wordle>
      <nav
        style={{
          padding: "0.5rem",
        }}
      >
        <Link to="/worldle">Worldle</Link> |{" "}
        <Link to="/hogwarts">Hogwarts</Link> | <Link to="/disney">Disney</Link>
      </nav>
    </main>
  );
}

export default App;
