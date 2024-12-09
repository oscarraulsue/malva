import React from "react";
import "./notFound.css";

export const NotFound = () => {
  if (window.location.pathname !== "/not-found") {
    window.location.replace("/not-found");
  }
  const titleElement = document.head.querySelector("title");
  if (titleElement) {
    titleElement.innerHTML = "Pagina No Encontrada - 404";
  }
  return (
    <div className="template-404">
      <p>404</p>
      <h1 className="title">Página no encontrada</h1>
      <a href="/collections/all" className="button">
        Seguir comprando
      </a>
    </div>
  );
};
