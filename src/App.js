import React from "react";
import MainComponent from "./Components/MainComponent";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <MainComponent />
      </HashRouter>
    </>
  );
}

export default App;
