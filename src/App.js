// import Game from "./components/Game";
// import ReactGA from "react-ga";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Component, useEffect } from "react";
// import "./App.css";
// ReactGA.initialize("UA-132829761-3");

// class App extends Component {
//   state = {
//     currentKey: "",
//   };

//   infoToast() {
//     toast.info(
//       "Spartle is an open source SPA-themed version of Wordle. A new Spartle word (relating to SPA) will be created every week day.",
//       {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         draggable: false,
//         toastId: "info",
//       }
//     );
//   }
//   componentDidMount() {
//     let contents;
//     contents = window.location.pathname + window.location.search;
//     ReactGA.pageview(contents);
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="app-header">
//           <div className="app-header-left">
//             <a href="https://github.com/henryburkhardt/spartle" target="_blank">
//               <FontAwesomeIcon icon={faCode} />
//             </a>
//           </div>
//           <h1 className="app-header-title">Spartle</h1>
//           <div className="app-header-right">
//             <a onClick={() => this.infoToast()}>
//               <FontAwesomeIcon icon={faQuestionCircle} />
//             </a>
//           </div>
//         </div>
//         <Game showKeyboard={true} />
//       </div>
//     );
//   }
// }

// export default App;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Spartle from "./pages/Spartle.js";
import SpartleEmbed from "./pages/SpartleEmbed.js";
import Row from "./components/Row.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Spartle />} />
        <Route exact path="/embed" element={<SpartleEmbed />} />
      </Routes>
    </>
  );
}
