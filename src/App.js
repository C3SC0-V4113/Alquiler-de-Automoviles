import React from "react";
import "./App.css";
import Saludo from "./components/views/saludo/Saludo";
import Home from "./components/views/home/Home";
import WebNav from "./components/navigation/WebNav";

function App() {
  return (
    <>
      <WebNav />
      <Home />
    </>
  );
}

export default App;
