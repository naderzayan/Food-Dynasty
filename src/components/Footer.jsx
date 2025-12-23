import React from "react";
import "../style/components/_footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>Food Dynasty</h2>
          <p>Building modern web experiences.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/homepage">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/branches">Branches</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h4>Follow Us</h4>
          <div className="footer__icons">
            <NavLink>Facebook</NavLink>
            <NavLink>Instagram</NavLink>
            <NavLink>Snapchat</NavLink>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Food Dynasty. All rights reserved.
      </div>
    </footer>
  );
}
