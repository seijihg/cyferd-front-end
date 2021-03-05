import React from "react";
import "./App.scss";
import DescSection from "./components/DescSection";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <DescSection />
    </div>
  );
}

export default App;
