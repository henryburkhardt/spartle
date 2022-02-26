import React, { useEffect, useRef } from "react";

function KeyLisitner({ currentKey }) {
  useEffect(() => {
    function handleKeyDown(e) {
      currentKey(e);
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <></>;
}

export default KeyLisitner;
