import React from "react";
import "../categories.css";

export const Sections = ({
  slug,
  title,
  image,
  mobileImage,
  description,
  descriptionBanner,
  subTitle,
}: {
  slug: string;
  title: string;
  image: string;
  mobileImage: string;
  description: string;
  descriptionBanner: string;
  subTitle?: string;
}) => {
  return (
    <section className="section section-banner-home">
      <a className="imgs-new-banner" href={slug}>
        <img
          className="img-new-banner-desktop"
          src={image}
          alt="img-new-banner-desktop"
          height="auto"
          width="auto"
          loading="lazy"
        />
        <img
          className="img-new-banner-mobile"
          src={mobileImage}
          alt="img-new-banner-mobile"
          height="auto"
          width="auto"
          loading="lazy"
        />
        <div className="texts-banner y-center-left">
          <p className="sub-title" style={{ color: "#ffffff" }}>
            {subTitle}
          </p>
          <h2 className="title" style={{ color: "#ffffff" }}>
            {title}
          </h2>
          <p className="description-banner" style={{ color: "#ffffff" }}>
            {descriptionBanner}
          </p>
          <p className="description" style={{ color: "#ffffff" }}>
            {description}
          </p>
        </div>
      </a>
    </section>
  );
};
