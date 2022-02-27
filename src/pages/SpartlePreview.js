import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SpartlePreview extends Component {
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
        <div className="header">
          <div className="header-left">
            <a href="https://github.com/henryburkhardt/spartle" target="_blank">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
          <h1 className="header-title">Spartle</h1>
          <div className="header-right">
            <a onClick={() => this.infoToast()}>
              <FontAwesomeIcon icon={faQuestionCircle} />
            </a>
          </div>
        </div>
        <a href="https://henryburkhardt.github.io/spartle/" target="_blank">
          <button className="preview-button">Play Spartle</button>
        </a>
        <ToastContainer />
      </>
    );
  }
}

export default SpartlePreview;
