import { Routes, Route } from "react-router-dom";
import Spartle from "./pages/Spartle.js";
import SpartleEmbed from "./pages/SpartleEmbed.js";
import SpartlePreview from "./pages/SpartlePreview.js";
import SpartleMobilePreview from "./pages/SpartleMobilePreview.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Spartle />} />
        <Route exact path="/embed" element={<SpartleEmbed />} />
        <Route exact path="/preview" element={<SpartlePreview />} />
        <Route
          exact
          path="/preview-mobile"
          element={<SpartleMobilePreview />}
        />
      </Routes>
    </>
  );
}
