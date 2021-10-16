import React from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Saludo from "./components/views/saludo/Saludo";
import Home from "./components/views/home/Home";
import Vehiculos from "./components/views/vehiculos/Vehiculos";
import WebNav from "./components/navigation/WebNav";

function App() {
  return (
    <>
    <BrowserRouter>
      <WebNav />
      </BrowserRouter>
    </>
  );
}

export default App;
