import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>juan.moyar@gmail.com</h5>
            <a href="mailto:juan.moyar@gmail.com">Enviame un mail!</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+5491124248907"
              target="_blank"
            >
              Enviame un mensaje!
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            required
          />
          <input type="text" name="email" placeholder="Mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}