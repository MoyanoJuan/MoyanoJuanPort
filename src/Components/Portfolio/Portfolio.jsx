import React from "react";
import "./Portfolio.css";
import R1 from "../../assets/Capture4.png";
import R2 from "../../assets/Capture2.PNG";
import R3 from "../../assets/Capture3.png";

export default function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>Mis Proyectos recientes</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={R1} alt="Repo 1" />
          </div>
          <h3>Infusion Store</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MoyanoJuan/pf-gp1-deploy"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://pf-gp1-deploy.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={R3} alt="Repo 1" />
          </div>
          <h3>Infusion Store Mobile</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MoyanoJuan/pf-gp1-deploy"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={R2} alt="Repo 2" />
          </div>
          <h3>Food SPA</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MoyanoJuan/Part04---PI-FOODS"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
