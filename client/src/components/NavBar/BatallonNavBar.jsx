import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./batallonNavBar.module.css";

const BatallonNavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOptionChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    if (selected === "batallon") {
      window.location.href = "/batallon";
    } else if (selected === "banda") {
      window.location.href = "/banda";
    }
  };

  const handleOptionChangeN = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    if (selected === "E.A.D.B.") {
      window.location.href = "https://eadb.org.ar/";
    } else if (selected === "M.J.S") {
      window.location.href = "/mjs";
    }
  };

  return (
    <div className={style.navBar}>
      <div className={style.container}>
        <div className={style.batallon}>
          <h1>Batallón 11</h1>
          <h3>Gral. José María Paz</h3>
        </div>
      </div>
      <div className={style.links}>
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
        <Link to="/bandaM" className={style.link} onClick={handleClick}>
          Banda
        </Link>

        <select
          value={selectedOption}
          onChange={handleOptionChangeN}
          className={style.select}
        >
          <option value="" disabled hidden className={style.option}>
            Nosotros
          </option>
          <option value="E.A.D.B." className={style.option}>
            E.A.D.B.
          </option>
          <option value="M.J.S" className={style.option}>
            M.J.S
          </option>
        </select>

        <Link to="/mistica" className={style.link} onClick={handleClick}>
          Mistica
        </Link>

        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={style.select}
        >
          <option value="" disabled hidden className={style.option}>
            Historia
          </option>
          <option value="batallon" className={style.option}>
            Batallón
          </option>
          <option value="banda" className={style.option}>
            Banda
          </option>
        </select>
      </div>
    </div>
  );
};

export default BatallonNavBar;
