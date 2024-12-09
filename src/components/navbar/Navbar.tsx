import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Sidebar } from "../sidebar/Sidebar";
import { CartIcon, Logo, SearchIcon, UserIcon } from "src/assets";

export const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const isNotFound = window.location.pathname === "/not-found";
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });
  return (
    <div
      className={`${styles["header-wrapper"]} ${
        scroll < 100 ? styles["show-header"] : ""
      } ${scroll > 150 ? styles["hidden-header"] : ""}`}
      style={{ zIndex: 1000 }}
    >
      <nav className={styles.navbar}>
        <div>
          <Sidebar scroll={scroll} isNotFound={isNotFound} />
        </div>

        <a
          href="/"
          className={styles.logo}
          style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
        >
          <Logo />
        </a>
        <div className={styles.containerSearch}>
          <a
            href="/"
            style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
          >
            <SearchIcon />
          </a>
          <a
            href="/"
            className={styles.userIcon}
            style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
          >
            <UserIcon />
          </a>

          <a
            href="/"
            style={{ color: scroll >= 100 || isNotFound ? "black" : "white" }}
          >
            <CartIcon />
          </a>
        </div>
      </nav>
    </div>
  );
};
