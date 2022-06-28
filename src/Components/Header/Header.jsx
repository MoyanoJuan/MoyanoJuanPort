import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Me.jpg";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, Soy</h5>
        <h1>Juan Ignacio Moyano</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="foto" />
        </div>
        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
