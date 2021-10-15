import React from "react";
import "./App.css";
import Saludo from "./components/views/saludo/Saludo";
import Home from "./components/views/home/Home";
import Vehiculos from "./components/views/vehiculos/Vehiculos";
import WebNav from "./components/navigation/WebNav";

function App() {
  return (
    <>
      <WebNav />
      <Vehiculos />
    </>
  );
}

export default App;
