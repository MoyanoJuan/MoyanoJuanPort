import React from "react";
import ME from "../../assets/me2.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";
import "./About.css";

export default function About() {
  return (
    <section id="About">
      <h5>Conóceme!</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Foto 2" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experiencia</h5>
              <small>8 meses de experiencia academica</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Soft Skills</h5>
              <small>Experiencia de 3 años trabajando con un equipo.</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Proyectos</h5>
              <small>3</small>
            </article>
          </div>
          <p>
            📢Soy Abogado desde 2017, trabajo en el Poder judicial de Argentina,
            especializándome en el derecho de la familia. Después de más de 4
            años de experiencia, decidí hacer un cambio en mi carrera. En el
            2021 me adentré en el mundo de la programación a través de cursos en
            distintas plataformas. Este aprendizaje autogestionado me preparó
            para luego poder dar un paso más y comenzar el bootcamp de Henry, en
            donde pude pasar por + 800hs de experiencia en programacion, tanto
            academica como en proyectos individuales y grupales.
          </p>
          <a href="#Contact" className="btn btn-primary">
            Contactame!
          </a>
        </div>
      </div>
    </section>
  );
}
