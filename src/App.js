import React from "react";
import Bar from "./components/Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Bar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
