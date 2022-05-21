import Main from "./components/main";
// ->*********   ************<- \\
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
  <div id="root">
    <Main/>
  </div>
  );
}

export default App;