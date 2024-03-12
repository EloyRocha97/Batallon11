import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/navBar";
import Logo from "./LandingFotos/bata11.png";
import LogoExp from "./LandingFotos/LogoExp.png";
import db from "./LandingFotos/Don Bosco.png";
import Bata from "./LandingFotos/Todoss.jpg";
import Ig from "./svg/instagram-color.svg";
import Yt from "./svg/youtube-color.svg";
import Face from "./svg/facebook-color.svg";
import style from "./landing.module.css";
import Contacto from "../Contacto/contacto";
import Button from "@mui/material/Button";

const Inicio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div className={style.loading}>
          <img
            src="./LandingFotos/Landig Carga.png"
            className={style.loadingImage}
            alt="Loading"
          />
        </div>
      ) : (
        <div>
          <div className={style.presentacion}>
            <div className={style.overlay}>
              <div className={style.logoContainer}>
                <img src={Logo} className={style.imageLogo} alt="Logo" />
              </div>
              {/* <div className={style.titleContainer}>
                <h1 className={style.titulo}>Batallon 11 Gral. Jose Maria Paz</h1>
              </div> */}
              <div className={`${style.logoContainer} ${style.overlay2}`}>
                <img src={db} className={style.imageLogoDb} alt="Logo" />
              </div>
              <div className={`${style.logoContainer} ${style.overlay3}`}>
                <img src={LogoExp} className={style.imageLogo2} alt="Logo" />
              </div>
            </div>
            <img src={Bata} className={style.imageBata} alt="bata11" />
          </div>
          <NavBar />
          <div className={style.homeText}>
            <h3 className={style.items}>Quienes somos?</h3>
            <p className={style.parrafo11}>
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoText
              oTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTexto
            </p>
            <h3 className={style.items}>Que hacemos?</h3>
            <p className={style.parrafo11}>
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoText
              oTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTexto
            </p>
            <h3 className={style.items}>Nuestra banda de musica</h3>
            <p className={style.parrafo111}>
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoText
              oTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTexto
            </p>
          </div>
          <div className={style.final}>
            <div className={style.buttons}>
              <a
                href="https://forms.gle/4uE4jaSe5oTspBZg7"
                className={style.link}
              >
                Pre-Inscripciones
              </a>
              <a
                href="https://drive.google.com/drive/folders/1JZPIIWZyK9-_nTSL7fK8CHGDzJH1S240"
                className={style.link}
              >
                Nuestras Fotos
              </a>
            </div>
            <Contacto />
          </div>
          <div className={style.redes}>
            <div>
              <p>No te olvides de visitarnos por nuestras redes</p>
            </div>
            <div className={style.redesIcon}>
              <a
                href="https://www.instagram.com/batallon11/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Ig} alt="Mi ig" className={style.redesIconTam} />
              </a>

              <a
                href="https://www.facebook.com/Batallon11Cordoba/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Face} alt="Mi face" className={style.redesIconTam} />
              </a>
              <a
                href="https://www.youtube.com/user/Batallon11Cba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Yt} alt="Mi Yt" className={style.redesIconTam} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
