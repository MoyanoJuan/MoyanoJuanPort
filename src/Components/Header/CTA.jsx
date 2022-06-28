import React from "react";
import CV from "../../assets/Moyano.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Contacto
      </a>
    </div>
  );
}
