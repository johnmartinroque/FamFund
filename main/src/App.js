import React from "react";
import Register from "./screens/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./others/Header";
import Home from "./screens/Home";
import Login from "./screens/Login";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
