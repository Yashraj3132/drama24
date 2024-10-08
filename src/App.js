// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome/:name" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
