import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Square.css";

class SpartleMobilePreview extends Component {
  infoToast() {
    toast.info(
      "Spartle is an open source SPA-themed version of Wordle. A new Spartle word (relating to SPA) will be created every week day.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        toastId: "info",
      }
    );
  }
  render() {
    return (
      <>
        <div>
          <div className="game-row-square preview-squares preview-animate preview-squares-1">
            S
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-2">
            P
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-3">
            A
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-4">
            R
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-5">
            T
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-6">
            L
          </div>
          <div className="game-row-square preview-squares preview-animate preview-squares-7">
            E
          </div>
        </div>

        <a href="https://henryburkhardt.github.io/spartle/" target="_blank">
          <button className="preview-button-mobile">PLAY NOW</button>
        </a>
      </>
    );
  }
}

export default SpartleMobilePreview;
