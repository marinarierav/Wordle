import Wordle from "./components/Wordle";
import { FLAVOR_CLASSIC } from "./config/flavors";

function App() {
  return (
    <main>
      <Wordle flavor={FLAVOR_CLASSIC}></Wordle>
    </main>
  );
}

export default App;
