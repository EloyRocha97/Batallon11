import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";

const NavBar = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.navBar}>
      <Link to="/" className={style.link} onClick={handleClick}>
        Inicio
      </Link>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSconCnaQC6sToSQrx7B1rWyb2GCpP3OuGnzLS5FUN48nhow4Q/viewform"
        className={style.link}
        onClick={handleClick}
      >
        Inscripciones
      </a>
      <Link to="/banda" className={style.link} onClick={handleClick}>
        Banda
      </Link>
      <Link className={style.link} onClick={handleClick}>
        Ficha Medica
      </Link>
    </div>
  );
};

export default NavBar;
