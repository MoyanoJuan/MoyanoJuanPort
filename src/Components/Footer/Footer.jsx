import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        Moyano Juan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experiencia</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contacto</a>
        </li>
      </ul>
    </footer>
  );
}
