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

  return (
    <div className={style.navBar}>
      <div className={style.container}>
        <div className={style.batallon}>
          <h1>Batallón 11</h1>
          <h1>Gral. José María Paz</h1>
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
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={style.select}
        >
          <option value="" disabled hidden>
            Historia
          </option>
          <option value="batallon">Batallón</option>
          <option value="banda">Banda</option>
        </select>
      </div>
    </div>
  );
};

export default BatallonNavBar;
