import style from "./style.module.css";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    alert("Menu toggled");
  };

  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        style={{ cursor: "pointer" }}
        onClick={toggleMenu}
        className={style.hamburger}
      >
        <path fill="#fff" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
      </svg>
      <ul
        id="mainNav"
        className={style.ul + (isActive ? " " + style.active : "")}
        tabIndex={-1}
        style={{
          display: isActive ? "flex" : "none",
        }}
      >
        <li className={style.li}>
          <a href="/" className={style.a}>
            Inicio
          </a>
        </li>
        <li className={style.li}>
          <a href="/AboutMe" className={style.a}>
            Sobre Mí
          </a>
        </li>
        <li className={style.li}>
          <a href="/Experience" className={style.a}>
            Proyectos
          </a>
        </li>
        <li className={style.li}>
          <a href="/Contact" className={style.a}>
            Contactame
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
