import NavBar from "../../components/NavBar/navBar";
import Logo from "../Landing/LandingFotos/bata11.png";
import BandaLogo from "./img/BandaLogo.png";
import BandaM from "./img/Bandan.png";
import Ig from "../Landing/svg/instagram-color.svg";
import Yt from "../Landing/svg/youtube-color.svg";
import Face from "../Landing/svg/facebook-color.svg";
import style from "./banda.module.css";

const Banda = () => {
  return (
    <div>
      <div className={style.overlay}>
        <div className={`${style.logoContainer} ${style.left}`}>
          <img src={Logo} className={style.imageLogo} alt="Logo" />
        </div>
        <div className={style.titleContainer}>
          <h1 className={style.titulo}>Batallon 11 Gral. Jose Maria Paz</h1>
        </div>
        <div className={`${style.logoContainer2} ${style.right}`}>
          <img src={BandaLogo} className={style.imageLogo} alt="BandaLogo" />
        </div>
      </div>
      <div className={style.nav}>
        <NavBar />
      </div>

      <div className={style.all}>
        <img src={BandaM} className={style.imageBanda1} alt="BandaM" />
        <h2 className={style.items}>Nuestra Historia</h2>
        <p className={style.parrafoBanda}>
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoText
          oTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
          TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
        </p>

        <a href="https://forms.gle/Y3r6F3pAbE6dvMmk9" className={style.link}>
          Inscripciones
        </a>
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
  );
};

export default Banda;
