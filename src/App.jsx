import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/components/Authentication/Register";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Login from "../src/components/Authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
