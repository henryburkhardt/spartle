import logo from "./logo.svg";
import Game from "./components/Game";
import "./App.css";
import Keyboard from "./components/Keyboard";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const info = () => {
    toast.info(
      "Welcome to Spartle! Spartle is an open source clone of the popular game Wordle, personalized for SPA. A new Spartle word (relating to SPA) will be set every week day.",
      {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        toastId: "info",
      }
    );
  };
  return (
    <div className="App">
      <Helmet>
        <title>Spartle</title>
      </Helmet>
      <div className="header">
        <div className="header-left">
          <a href="https://github.com/henryburkhardt/spartle" target="_blank">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
        <h1 className="title">Spartle</h1>
        <div className="header-right">
          <a onClick={() => info()}>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </a>
        </div>
      </div>
      <Game className="game" />
    </div>
  );
}

export default App;
