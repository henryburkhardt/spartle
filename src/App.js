import logo from "./logo.svg";
import Game from "./components/Game";
import "./App.css";
import Keyboard from "./components/Keyboard";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Spartle</title>
      </Helmet>
      <div className="header">
        <h1 className="title">Spartle</h1>
      </div>
      <Game className="game" />

      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
