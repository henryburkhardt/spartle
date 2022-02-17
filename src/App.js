import logo from "./logo.svg";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">SPARTLE</h1>
      </div>
      <Game />
    </div>
  );
}

export default App;
