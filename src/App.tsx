import "./App.scss";
import useSound from "use-sound";
const mainTheme = require("./assets/bg_music.mp3");

function App() {
  const [play] = useSound(mainTheme, { volume: 0.1 });

  return <div className="App" onClick={() => play()}></div>;
}

export default App;
