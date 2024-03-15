import React from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import Bata from "../../views/Landing/LandingFotos/bata11.png";
import LogoExp from "../../views/Landing/LandingFotos/LogoExp.png";

const NavBar = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                <Link to="/banda" className={style.link} onClick={handleClick}>
                    Banda
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
