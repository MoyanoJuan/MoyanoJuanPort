import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_06sgwlp",
      "template_qbbybjo",
      form.current,
      "wXwQo4a3IRDISoK9L"
    );
    e.target.reset();
  };
  return (
    <section id="Contact">
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>juan.moyar@gmail.com</h5>
            <a href="mailto:juan.moyar@gmail.com">Enviame un mail!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
