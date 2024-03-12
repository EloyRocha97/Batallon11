import style from "./salidas.module.css";
import { useState } from "react";
import Paint from "./Fotos/PaintBall.jpeg";
import Campa from "./Fotos/Campamento.jpg";
import Banda from "./Fotos/Banda.png";
import Desfile from "./Fotos/Desfile.jpg";
import Sabado from "./Fotos/Sabados.jpg";

const Salidas = () => {
  // const [redirectTo, setRedirectTo] = useState("");

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.circle} ${style.topRight}`}
        // onClick={() => handleRedirect("")}
      >
        <img src={Desfile} alt="Desfile" />
        <p>Desfile</p>
      </div>
      <div
        className={`${style.circle} ${style.topLeft}`}
        onClick={() =>
          handleRedirect(
            "https://drive.google.com/drive/folders/1JZPIIWZyK9-_nTSL7fK8CHGDzJH1S240"
          )
        }
      >
        <img src={Campa} alt="Campamento" />
        <p>Campamento</p>
      </div>
      <div className={`${style.circle} ${style.center}`}>
        <img src={Sabado} alt="Sábado" />
        <p>Sábado</p>
      </div>
      <div className={`${style.circle} ${style.bottomRight}`}>
        <img src={Banda} alt="Eventos" />
        <p>Banda</p>
      </div>
      <div className={`${style.circle} ${style.bottomLeft}`}>
        <img src={Paint} alt="Salidas" />
        <p>Salidas</p>
      </div>
    </div>
  );
};

export default Salidas;
