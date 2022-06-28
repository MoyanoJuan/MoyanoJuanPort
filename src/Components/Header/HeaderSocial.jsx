import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function HeaderSocial() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/juanimoyano/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/MoyanoJuan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}
