import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/components/Authentication/Register";
import LandingPage from "../src/components/LandingPage/LandingPage";
import Login from "../src/components/Authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
