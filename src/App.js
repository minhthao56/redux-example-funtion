import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { HeaderBar } from "./components";
import { Home } from "./containers";

function App() {
  const color = useSelector((state) => state.changeColors);

  return (
    <div className="App">
      <HeaderBar backgroundColor={color.color} />
      <Home />
    </div>
  );
}

export default App;
