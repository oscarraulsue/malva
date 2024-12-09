import React from "react";
import "./homePage.css";
export const HomePage = () => {
  return (
    <main
      id="MainContent"
      className="content-for-layout focus-none"
      role="main"
    >
      <section className="section_home_types">
        <div
          id="shopify-section-template--18174503911657__main"
          className="shopify-section"
        >
          <section className="section main-section">
            <a className="item-menu-gender item-img" href="/pages/mujer">
              <div className="img-wrapper">
                <img
                  className="img-main img-mobile"
                  src="//malvaonline.com/cdn/shop/files/Banner_Mujer_Voie_1.webp?v=1728662235"
                  alt="mujer"
                  width="auto"
                  height="auto"
                />
                <img
                  className="img-main img-desktop"
                  src="//malvaonline.com/cdn/shop/files/Banner_Mujer_Voie.webp?v=1728662235"
                  alt="mujer"
                  width="auto"
                  height="auto"
                />
              </div>

              <div className="container-text-option full-center">
                <h2 style={{ color: "#ffffff" }} className="title">
                  MUJER
                </h2>
              </div>
            </a>

            <a className="item-menu-gender item-img" href="/pages/hombre">
              <div className="img-wrapper">
                <img
                  className="img-main img-mobile"
                  src="//malvaonline.com/cdn/shop/files/Banner_Hombre_Scalpers_spring_summer.webp?v=1721915371"
                  alt="hombre"
                  width="auto"
                  height="auto"
                />
                <img
                  className="img-main img-desktop"
                  src="//malvaonline.com/cdn/shop/files/Banner_Hombre_scalpers_spring_summer_8e4b5aee-9018-46b9-9906-09797a39ff08.webp?v=1721915525"
                  alt="hombre"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="container-text-option full-center">
                <h2 style={{ color: "#ffffff" }} className="title">
                  HOMBRE
                </h2>
              </div>
            </a>
            <a className="item-menu-gender item-img" href="/pages/world-brands">
              <div className="img-wrapper">
                <img
                  className="img-main img-mobile"
                  src="//malvaonline.com/cdn/shop/files/Banner_International_Spring_2024_Simkhai.webp?v=1721915372"
                  alt="world-brands"
                  width="auto"
                  height="auto"
                />
                <img
                  className="img-main img-desktop"
                  src="//malvaonline.com/cdn/shop/files/Banner_International_spring2024_simkhai.webp?v=1721915525"
                  alt="world-brands"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="container-text-option full-center">
                <h2 style={{ color: "#ffffff" }} className="title">
                  GLOBAL BRANDS
                </h2>
              </div>
            </a>
            <a className="item-menu-gender item-img" href="/pages/local-brands">
              <div className="img-wrapper">
                <img
                  className="img-main img-mobile"
                  src="//malvaonline.com/cdn/shop/files/Banner_Local_Sarakiniko_SS24_Baobab.webp?v=1721915371"
                  alt="local-brands"
                  width="auto"
                  height="auto"
                />
                <img
                  className="img-main img-desktop"
                  src="//malvaonline.com/cdn/shop/files/Banner_Local_Sarakiniko_SS24_baobab_21215d41-8267-4e1f-bca9-9bd8e3c46a13.webp?v=1721915524"
                  alt="local-brands"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="container-text-option full-center">
                <h2 style={{ color: "#ffffff" }} className="title">
                  LOCAL BRANDS
                </h2>
              </div>
            </a>
          </section>
        </div>
        <div
          id="shopify-section-template--18174503911657__tags-malva"
          className="shopify-section"
        >
          <section className="section">
            <div className="container-malva-tags">
              <div className="tag">
                <img
                  className="img-tag"
                  src="//malvaonline.com/cdn/shop/files/MALVA_LOGO.svg?v=1719595977"
                  alt="MALVA"
                  width="auto"
                  height="auto"
                />
                <h1 className="title">MALVA</h1>
                <p className="text">La alquimia de la moda</p>
              </div>

              <div className="tag">
                <img
                  className="img-tag"
                  src="//malvaonline.com/cdn/shop/files/tipo_tipo44.svg?v=1719596220"
                  alt="MALVA EDITION"
                  width="auto"
                  height="auto"
                />
                <p className="title">MALVA EDITION</p>
                <p className="text">
                  En colaboración con los mejores diseñadores
                </p>
              </div>

              <div className="tag">
                <img
                  className="img-tag"
                  src="//malvaonline.com/cdn/shop/files/tipo_M_Exclusive.svg?v=1719596220"
                  alt="MALVA EXCLUSIVE"
                  width="auto"
                  height="auto"
                />
                <p className="title">MALVA EXCLUSIVE</p>
                <p className="text">
                  Encuentra productos que solo consigues en Malva
                </p>
              </div>

              <div className="tag">
                <img
                  className="img-tag"
                  src="//malvaonline.com/cdn/shop/files/tipo_Sostenible.svg?v=1719596220"
                  alt="SOSTENIBILIDAD"
                  width="auto"
                  height="auto"
                />
                <p className="title">SOSTENIBILIDAD</p>
                <p className="text">
                  Apoyamos a diseñadores con prácticas sostenibles
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};
