import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
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
