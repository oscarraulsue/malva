import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "../categories.css";
import { Sections } from "./Sections";
import { dataProducts } from "src/data/dataProducts";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export const Woman = () => {
  const titleElement = document.head.querySelector("title");
  if (titleElement) {
    titleElement.innerHTML = "Mujeres";
  }
  return (
    <div
      id="shopify-section-template--18174505156841__banner_home_D8g6Tb"
      className="shopify-section"
    >
      <Sections
        slug="/pages/herencia-verde"
        title=""
        image="//malvaonline.com/cdn/shop/files/Banner_Desk.webp?v=1733241602"
        mobileImage="//malvaonline.com/cdn/shop/files/Banner_Mobile.webp?v=1733241602"
        description=""
        descriptionBanner=""
      />
      <Sections
        slug="https://malvaonline.com/collections/holiday"
        title="The Holiday Collection"
        image="//malvaonline.com/cdn/shop/files/Desk_Missoni.webp?v=1731708001"
        mobileImage="//malvaonline.com/cdn/shop/files/Mobile_Missoni.webp?v=1731708007"
        description="Shop the season’s most stunning dresses"
        descriptionBanner="Buy now"
      />
      <Sections
        slug="/collections/common-area"
        subTitle="NEW IN"
        title="SILVER CITY"
        image="//malvaonline.com/cdn/shop/files/Banner1_NewIn_CommonArea.webp?v=1728662327"
        mobileImage="//malvaonline.com/cdn/shop/files/Banner1_NewIn_CommonArea_1.webp?v=1728662327"
        description="The newest collection that brings the city to life"
        descriptionBanner="Buy now"
      />
      <section style={{ marginTop: "50px" }}>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          navigation={true}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {dataProducts.map((product) => (
            <SwiperSlide
              className="swiper-slide"
              style={{ width: "510px", margin: "5px" }}
            >
              <div className="swiper-slide">
                <a href={product.slug} className="container-img">
                  <img
                    src={product.image}
                    alt=""
                    height="auto"
                    width="auto"
                    loading="lazy"
                  />
                </a>
                <div className="product-info">
                  <p className="product-vendor">
                    <a
                      href="/collections/common-area"
                      style={{ textDecoration: "none" }}
                    >
                      {product.salesman}
                    </a>
                  </p>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price">
                    <p className="original-price"> {product.price}</p>
                    <p className="compare-price">{product.comparePirce}</p>
                  </div>
                  <div className="container-tags">
                    {product.tags.map((tag) => (
                      <p>{tag}</p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="section">
        <div className="container-half">
          <a href="/collections/andrea-landa" className="ctn-img-text">
            <img
              className="img-mobile"
              src="//malvaonline.com/cdn/shop/files/Banner3_NewIn_AndreaLanda_1.webp?v=1728662327"
              alt="ANDREA LANDA"
              width="auto"
              height="auto"
            />
            <img
              className="img-desktop"
              src="//malvaonline.com/cdn/shop/files/Banner3_NewIn_AndreaLanda.webp?v=1728662327"
              alt="ANDREA LANDA"
              width="auto"
              height="auto"
            />
            <div className="texts-banner  full-center">
              <p className="sub-title" style={{ color: "#ffffff" }}>
                NEW
              </p>
              <h2 className="title" style={{ color: "#ffffff" }}>
                ANDREA LANDA
              </h2>
              <p className="description-banner" style={{ color: "#ffffff" }}>
                A handmade Brand that brings all of their roots to life in their
                latest collection
              </p>
              <p className="description" style={{ color: "#ffffff" }}>
                Buy now
              </p>
            </div>
          </a>

          <a
            href="/collections/vestidos-de-bano-swimwear"
            className="ctn-img-text"
          >
            <img
              className="img-mobile"
              src="//malvaonline.com/cdn/shop/files/Banner4_Swimwear_1.webp?v=1728662327"
              alt="SWIMWEAR"
              width="auto"
              height="auto"
            />
            <img
              className="img-desktop"
              src="//malvaonline.com/cdn/shop/files/Banner4_Swimwear.webp?v=1728662327"
              alt="SWIMWEAR"
              width="auto"
              height="auto"
            />
            <div className="texts-banner  full-center">
              <p className="sub-title" style={{ color: "#ffffff" }}></p>
              <h2 className="title" style={{ color: "#ffffff" }}>
                SWIMWEAR
              </h2>
              <p className="description-banner" style={{ color: "#ffffff" }}>
                Vacations, summer, or any ocassion with the latest swimwear
              </p>
              <p className="description" style={{ color: "#ffffff" }}>
                Buy now
              </p>
            </div>
          </a>
        </div>
      </section>
      <section className="section section-banner-home">
        <a className="imgs-new-banner" href="/collections/bolsos-mujer">
          <img
            className="img-new-banner-desktop"
            src="//malvaonline.com/cdn/shop/files/Banner5_Bolsos.webp?v=1728662327"
            alt="BAGS &amp; PURSES"
            height="auto"
            width="auto"
            loading="lazy"
          />
          <img
            className="img-new-banner-mobile"
            src="//malvaonline.com/cdn/shop/files/Banner5_Bolsos_1.webp?v=1728662327"
            alt="BAGS &amp; PURSES"
            height="auto"
            width="auto"
            loading="lazy"
          />
          <div className="texts-banner full-center ">
            <p className="sub-title" style={{ color: "#ffffff" }}></p>
            <h2 className="title" style={{ color: "#ffffff" }}>
              BAGS &amp; PURSES
            </h2>
            <p className="description-banner" style={{ color: "#ffffff" }}>
              Give Your look that special touch with the coolest purses around
            </p>
            <p className="description" style={{ color: "#ffffff" }}>
              Buy now
            </p>
          </div>
        </a>
      </section>
      <div
        id="shopify-section-template--18174505156841__banner-home-3"
        className="shopify-section"
      >
        <section className="section section-banner-home">
          <a
            className="imgs-new-banner"
            href="/collections/sneakers-para-mujer"
          >
            <img
              className="img-new-banner-desktop"
              src="//malvaonline.com/cdn/shop/files/Banner6_Sneakers.webp?v=1728662327"
              alt="DEFINE YOUR STYLE"
              height="auto"
              width="auto"
              loading="lazy"
            />
            <img
              className="img-new-banner-mobile"
              src="//malvaonline.com/cdn/shop/files/Banner6_Sneakers_1.webp?v=1728662327"
              alt="DEFINE YOUR STYLE"
              height="auto"
              width="auto"
              loading="lazy"
            />
            <div className="texts-banner full-center">
              <p className="sub-title" style={{ color: "#ffffff" }}></p>
              <h2 className="title" style={{ color: "#ffffff" }}>
                DEFINE YOUR STYLE
              </h2>
              <p className="description-banner" style={{ color: "#ffffff" }}>
                Sneakers that Will never disappoint
              </p>
              <p className="description" style={{ color: "#ffffff" }}>
                Buy now
              </p>
            </div>
          </a>
        </section>
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
    </div>
  );
};
