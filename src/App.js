import logo from "./logo.svg";
import Game from "./components/Game";
import "./App.css";
import Keyboard from "./components/Keyboard";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Spartle</title>
      </Helmet>
      <div className="header">
        <div className="header-left">
          <a href="https://github.com/henryburkhardt/spartle">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
        <h1 className="title">Spartle</h1>
        <div className="header-right">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
      </div>
      <Game className="game" />
    </div>
  );
}

export default App;
