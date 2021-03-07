import React, { useState } from "react";
import "./App.scss";
import DescSection from "./components/DescSection";
import LoginForm from "./components/LoginForm";
import MenuBar from "./components/MenuBar";

function App() {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className="App">
      <MenuBar setLogin={setLogin} />
      {login && <LoginForm setLogin={setLogin} />}
      <DescSection />
    </div>
  );
}

export default App;
