import React from "react";
import "./App.scss";
import DescSection from "./components/DescSection";
import LoginForm from "./components/LoginForm";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <LoginForm />
      <DescSection />
    </div>
  );
}

export default App;
