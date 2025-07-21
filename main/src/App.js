import React from "react";
import Register from "./components/authentication/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./others/Header";
import Home from "./others/Home";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
