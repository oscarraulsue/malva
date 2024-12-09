import React from "react";
import "./footer.css";
import { dataSocialMedia } from "src/data/dataFooter";

export const Footer = () => {
  return (
    <footer>
      <div className="site-footer">
        <div className="footer-container">
          <div className="footer-section social-media-section">
            <p>Síguenos</p>
            <ul className="social-media">
              {dataSocialMedia.map((item) => (
                <li key={item.id} className="icon-social-media">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section newsletter-section">
            <p className="text">Suscríbete a nuestro Newsletter</p>
            <p className="text">
              Regístrate para recibir 10% de descuento en tu primera orden y
              ofertas exclusivas a lo largo del año.
            </p>
            <form id="ContactFooter" className="contact-form">
              <div className="preferences">
                <input
                  type="radio"
                  id="female"
                  name="Preferencia"
                  value="Mujer"
                />
                <label htmlFor="female">Mujer</label>
                <input
                  type="radio"
                  id="male"
                  name="Preferencia"
                  value="Hombre"
                />
                <label htmlFor="male">Hombre</label>
                <input
                  type="radio"
                  id="kids"
                  name="Preferencia"
                  value="Niños"
                />
                <label htmlFor="kids">Niños</label>
              </div>
              <div className="container-input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                />
                <button type="submit" id="button-form">
                  Suscribirme
                </button>
              </div>
              <div className="container-authorization">
                <input
                  type="checkbox"
                  id="authorization"
                  name="AutorizoDatosPersonales"
                />
                <label htmlFor="authorization">
                  Autorizo el tratamiento de{" "}
                  <a href="/pages/autorizacion-de-tratamiento-de-datos-personales-2">
                    datos personales
                  </a>
                </label>
              </div>
            </form>
          </div>
          <details className="footer-section">
            <summary>
              Servicio al cliente
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8032 8.08879L15.8432 15.1888L8.74322 8.22879C8.63322 8.11879 8.46321 8.12879 8.35321 8.22879C8.24321 8.33879 8.25321 8.50879 8.35321 8.61879L15.6532 15.7688C15.7132 15.8288 15.7932 15.8488 15.8632 15.8488C15.9532 15.8488 15.9932 15.8088 16.0432 15.7688L23.2032 8.46879C23.2532 8.41879 23.2832 8.3488 23.2832 8.2688C23.2832 8.1988 23.2532 8.12879 23.2032 8.07879C23.0932 7.96879 22.9232 7.97879 22.8132 8.07879L22.8032 8.08879Z"
                  fill="#B0B0B0"
                  stroke="#B0B0B0"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <ul>
              <li>
                <a href="/pages/contactanos">Contáctanos/PQRS</a>
              </li>

              <li>
                <a href="/pages/recoge-en-tienda">Recoge en tienda</a>
              </li>
              <li>
                <a href="/pages/encuentra-tu-tienda">Localizador de tiendas</a>
              </li>
            </ul>
          </details>
          <details className="footer-section">
            <summary>
              Quienes Somos
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8032 8.08879L15.8432 15.1888L8.74322 8.22879C8.63322 8.11879 8.46321 8.12879 8.35321 8.22879C8.24321 8.33879 8.25321 8.50879 8.35321 8.61879L15.6532 15.7688C15.7132 15.8288 15.7932 15.8488 15.8632 15.8488C15.9532 15.8488 15.9932 15.8088 16.0432 15.7688L23.2032 8.46879C23.2532 8.41879 23.2832 8.3488 23.2832 8.2688C23.2832 8.1988 23.2532 8.12879 23.2032 8.07879C23.0932 7.96879 22.9232 7.97879 22.8132 8.07879L22.8032 8.08879Z"
                  fill="#B0B0B0"
                  stroke="#B0B0B0"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <ul>
              <li>
                <a href="/pages/quienes-somos">Nuestro equipo</a>
              </li>
            </ul>
          </details>
          <details className="footer-section section-legal">
            <summary>
              Legal
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8032 8.08879L15.8432 15.1888L8.74322 8.22879C8.63322 8.11879 8.46321 8.12879 8.35321 8.22879C8.24321 8.33879 8.25321 8.50879 8.35321 8.61879L15.6532 15.7688C15.7132 15.8288 15.7932 15.8488 15.8632 15.8488C15.9532 15.8488 15.9932 15.8088 16.0432 15.7688L23.2032 8.46879C23.2532 8.41879 23.2832 8.3488 23.2832 8.2688C23.2832 8.1988 23.2532 8.12879 23.2032 8.07879C23.0932 7.96879 22.9232 7.97879 22.8132 8.07879L22.8032 8.08879Z"
                  fill="#B0B0B0"
                  stroke="#B0B0B0"
                  strokeWidth="0.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </summary>
            <ul>
              <li>
                <a href="/pages/politicas-de-privacidad">
                  Política de tratamiento de datos
                </a>
              </li>
              <li>
                <a href="/pages/terminos-y-condiciones">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="https://www.sic.gov.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SIC
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="/pages/politicas-de-privacidad">
              Política de tratamiento de datos
            </a>
            <a href="/pages/terminos-y-condiciones">Términos y condiciones</a>
            <a href="https://www.sic.gov.co/" target="_blank" rel="noreferrer">
              SIC
            </a>
          </div>
          <p>© 2024, MALVA ONLINE</p>
        </div>
      </div>
    </footer>
  );
};
