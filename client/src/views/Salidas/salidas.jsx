import style from "./salidas.module.css";
import { useState } from "react";
import fondo from "./Fondo/4a05b176175fe8ace75e68262057ab25.jpg";

const Salidas = () => {
  const [redirectTo, setRedirectTo] = useState("");

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.circle} ${style.topRight}`}
        onClick={() => handleRedirect("")}
      >
        <img
          src="https://img-9gag-fun.9cache.com/photo/aNgMzNG_460s.jpg"
          alt="Desfile"
        />
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
        <img
          src="https://pbs.twimg.com/media/FaX-z0FWQAAgbTs.jpg:large"
          alt="Campamento"
        />
        <p>Campamento</p>
      </div>
      <div className={`${style.circle} ${style.center}`}>
        <img
          src="https://viapais.com.ar/resizer/zNjbzh8S_zhNK1aDAdIRKea9qRY=/1023x1023/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/SUY5E3ZBZJATNHKNKQRMZI3F2M.jpg"
          alt="Sábado"
        />
        <p>Sábado</p>
      </div>
      <div className={`${style.circle} ${style.bottomRight}`}>
        <img
          src="https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d5ef07a92606148a7b8027e9235a5f82.jpeg"
          alt="Eventos"
        />
        <p>Eventos</p>
      </div>
      <div className={`${style.circle} ${style.bottomLeft}`}>
        <img
          src="https://i0.wp.com/panoramadirecto.com/wp-content/uploads/2020/01/Mia.jpg?fit=597%2C585&ssl=1"
          alt="Salidas"
        />
        <p>Salidas</p>
      </div>
    </div>
  );
};

export default Salidas;
