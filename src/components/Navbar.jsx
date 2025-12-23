import React from "react";
import { Link } from "react-router-dom";
import "../style/components/_navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="food-dynasty">
        <h1>Food Dynasty</h1>
      </div>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Branches">Branches</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
