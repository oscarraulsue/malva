import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { ArrowIcon, CloseIcon, HamburgerIcon, LogoIcon } from "src/assets";
import { dataSubmenu } from "src/data";

export const Sidebar = ({
  scroll,
  isNotFound,
}: {
  scroll: number;
  isNotFound: boolean;
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [subMenuItemActive, setSubMenuItemActive] = useState("");
  const [menuItemGenderActive, setMenuItemGenderActive] = useState(
    dataSubmenu[0]
  );
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideInput = ref?.current?.contains(event.target as Node);
      if (!clickedInsideInput) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div
      className={`menu-drawer-container ${isOpenMenu ? ["menu-opening"] : ""}`}
    >
      <div className="menu-drawer-container">
        <div
          className={`header__icon ${isOpenMenu ? ["hidden-icon"] : ""}`}
          onClick={() => setIsOpenMenu(true)}
          style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
        >
          <HamburgerIcon />
        </div>
        <div
          className={`header__icon ${!isOpenMenu ? ["hidden-icon"] : ""}`}
          onClick={() => setIsOpenMenu(false)}
          style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="menu-drawer" id="menu-drawer" ref={ref}>
        <div className="btn-close" onClick={() => setIsOpenMenu(false)}>
          <CloseIcon />
        </div>
        <div className="menu-drawer-header">
          <a className="logo" href="/pages/local-brands">
            <svg
              width="25"
              height="11"
              viewBox="0 0 25 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.79 3.45784C24.79 1.61119 23.2791 0.15625 21.4884 0.15625C19.6417 0.15625 18.1868 1.66715 18.1868 3.45784C18.1868 3.5138 18.1868 3.62572 18.1868 3.68168V10.8445H24.79V3.68168C24.79 3.56976 24.79 3.5138 24.79 3.45784Z"
                fill="#3D3D3D"
              ></path>
              <path
                d="M6.65915 3.45784C6.65915 1.61119 5.14825 0.15625 3.35755 0.15625C1.56686 0.15625 0 1.61119 0 3.45784C0 3.5138 0 3.62572 0 3.68168V10.8445H6.60319V3.68168C6.65915 3.56976 6.65915 3.5138 6.65915 3.45784Z"
                fill="#3D3D3D"
              ></path>
              <path
                d="M15.7243 3.45784C15.7243 1.61119 14.2134 0.15625 12.4227 0.15625C10.576 0.15625 9.12109 1.66715 9.12109 3.45784C9.12109 3.5138 9.12109 3.62572 9.12109 3.68168V10.8445H15.7243V3.68168C15.7243 3.56976 15.7243 3.5138 15.7243 3.45784Z"
                fill="#3D3D3D"
              ></path>
            </svg>
          </a>
          <div className="btn-close ">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5301 13.995L21.1001 8.605C21.1701 8.535 21.2101 8.455 21.2101 8.355C21.2101 8.265 21.1801 8.175 21.1101 8.105C20.9801 7.965 20.7501 7.965 20.6101 8.105L15.0301 13.505L9.4501 8.105C9.3101 7.965 9.0801 7.975 8.9501 8.105C8.8801 8.175 8.8501 8.265 8.8501 8.355C8.8501 8.445 8.89009 8.535 8.96009 8.605L14.5301 13.995L8.96009 19.385C8.82009 19.525 8.82009 19.745 8.96009 19.885C9.03009 19.955 9.12009 19.995 9.21009 19.995C9.30009 19.995 9.39009 19.955 9.46009 19.895L15.0401 14.495L20.6201 19.895C20.6901 19.955 20.7701 19.995 20.8701 19.995C20.9701 19.995 21.0601 19.955 21.1201 19.885C21.2601 19.745 21.2501 19.515 21.1201 19.385L15.5501 13.995H15.5301Z"
                fill="black"
                stroke="black"
                strokeWidth="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className="menu-drawer__inner-container">
          <div className="list-menu-gender">
            <div className="option-menu">
              <a className="logo" href="/pages/mujer">
                <LogoIcon />
              </a>

              {dataSubmenu.map((item) => (
                <span
                  className={`item-menu-gender ${
                    menuItemGenderActive.id === item.id
                      ? ["item-menu-gender--active"]
                      : ""
                  }`}
                  data-menu={item.id}
                  key={item.id + item.slug + "item-menu-gender"}
                  onClick={() => setMenuItemGenderActive(item)}
                >
                  {item.title}
                </span>
              ))}
            </div>
            <ul
              className="menu-content"
              id={menuItemGenderActive.id}
              key={menuItemGenderActive.id}
              style={{ display: "block" }}
            >
              <a
                className="menu-item all-menu-item view-all"
                href={menuItemGenderActive.slug}
                style={{ display: subMenuItemActive ? "none" : "" }}
              >
                Ir a Inicio
              </a>
              {menuItemGenderActive.menu.map((subItem) => (
                <>
                  <span
                    key={subItem.slug + "span"}
                    className={`menu-item ${
                      subMenuItemActive ? ["menu-item--active"] : ""
                    }`}
                    onClick={() => {
                      setSubMenuItemActive(subItem.slug);
                    }}
                  >
                    <li className="title-item">{subItem.title}</li>
                    <ArrowIcon />
                  </span>
                  <div
                    style={{ width: "90%" }}
                    className={`sub-menu ${
                      subMenuItemActive === subItem.slug ? "active" : ""
                    }`}
                    key={subItem.slug}
                  >
                    <div
                      className="btn-back"
                      id="btn-back"
                      onClick={() => setSubMenuItemActive("")}
                    >
                      <span style={{ transform: "rotate(180deg)" }}>
                        <ArrowIcon />
                      </span>

                      <p className="text">
                        Volver a {menuItemGenderActive.title}
                      </p>
                    </div>
                    <div className="sub-item all-sub-item">
                      <a
                        href={subItem.slug}
                        data-value="mujer"
                        className="view-all"
                      >
                        <span>{subItem.title}</span>
                        <span>Ver todo </span>
                      </a>
                    </div>
                    {subItem.subItems.map((subSubItem) => (
                      <li key={subSubItem.slug} className="sub-item">
                        <a href={subSubItem.slug}>{subSubItem.title}</a>
                      </li>
                    ))}
                  </div>
                </>
              ))}

              <a
                className="container-featured-collection"
                href={menuItemGenderActive.featuredCollection.slug}
              >
                <img
                  className="img-featured-collection"
                  src={menuItemGenderActive.featuredCollection.image}
                  alt={menuItemGenderActive.featuredCollection.name}
                  width="auto"
                  height="auto"
                />
                <p
                  className="title-featured-collection"
                  style={{ textAlign: "left" }}
                >
                  {menuItemGenderActive.featuredCollection.name}
                </p>
              </a>
            </ul>
            <div
              className="bottom-menu"
              style={{ display: "grid", listStyle: "none" }}
            >
              <li>
                <a
                  id="HeaderDrawer-malva-exclusive"
                  href="/collections/malva-exclusive"
                  className="menu-drawer__menu-item list-menu__item link menu-drawer__menu-item--active"
                >
                  Malva Exclusive
                </a>
              </li>
              <li>
                <a
                  id="HeaderDrawer-malva-edition"
                  href="/collections/malva-edition"
                  className="menu-drawer__menu-item list-menu__item link menu-drawer__menu-item--active"
                  aria-current="page"
                >
                  Malva Edition
                </a>
              </li>
              <li>
                <a
                  id="HeaderDrawer-mi-cuenta"
                  href="https://malvaonline.com/account/login"
                  className="menu-drawer__menu-item list-menu__item link"
                >
                  Mi cuenta
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
