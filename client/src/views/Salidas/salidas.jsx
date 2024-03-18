import style from "./salidas.module.css";
import { useState } from "react";
import Paint from "./Fotos/PaintBall.jpeg";
import Campa from "./Fotos/Campamento.jpg";
import Banda from "./Fotos/Banda.png";
import Desfile from "./Fotos/Desfile.jpg";
import Sabado from "./Fotos/Sabados.jpg";
import NavBar from "../../components/NavBar/navBar";
import Footer from "../../components/Footer/footer";

const Salidas = () => {
    // const [redirectTo, setRedirectTo] = useState("");

    const handleRedirect = (url) => {
        window.location.href = url;
    };

    return (
        <div className={style.container}>
            <NavBar />

            <div className={style.fotos}>
                <div className={style.fotoContainer}>
                    <h2 className={style.h2}>Desfiles</h2>
                    <img
                        src={Desfile}
                        alt="desfiles"
                        className={style.foto}
                    />
                </div>
                <div className={style.fotoContainer}>
                    <h2 className={style.h2}>Sábados</h2>
                    <img
                        src={Sabado}
                        alt="Sabados"
                        className={style.foto}
                    />
                </div>
                <div
                    onClick={() =>
                        handleRedirect(
                            "https://drive.google.com/drive/folders/1JZPIIWZyK9-_nTSL7fK8CHGDzJH1S240"
                        )
                    }
                    className={style.fotoContainer}
                >
                    <h2 className={style.h2}>Campamentos</h2>
                    <img
                        // src={Sabado}
                        // alt="Sabados"
                        className={style.foto}
                    />
                </div>
                <div className={style.fotoContainer}>
                    <h2 className={style.h2}>Eventos</h2>
                    <img
                        // src={Sabado}
                        // alt="Sabados"
                        className={style.foto}
                    />
                </div>
                <div className={style.fotoContainer}>
                    <h2 className={style.h2}>Salidas</h2>
                    <img
                        // src={Sabado}
                        // alt="Sabados"
                        className={style.foto}
                    />
                </div>
                <div className={style.fotoContainer}>
                    <h2 className={style.h2}>Banda</h2>
                    <img
                        // src={Sabado}
                        // alt="Sabados"
                        className={style.foto}
                    />
                </div>
            </div>
            <Footer />
            {/* <div
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
            </div> */}
        </div>
    );
};

export default Salidas;
