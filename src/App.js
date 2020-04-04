import React from "react";
import "./App.css";

import Search from "./Search";
import CurrentInfo from "./CurrentInfo";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
