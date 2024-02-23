import { Link } from "react-router-dom";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <Link to="/" className={style.link}>
        Inicio
      </Link>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSconCnaQC6sToSQrx7B1rWyb2GCpP3OuGnzLS5FUN48nhow4Q/viewform"
        className={style.link}
      >
        Inscripciones
      </a>
      <Link to="/banda" className={style.link}>
        Banda
      </Link>
      <Link className={style.link}>Ficha Medica</Link>
    </div>
  );
};

export default NavBar;
