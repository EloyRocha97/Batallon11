import BandaLogo from "../Banda/img/BandaLogo.png";
import BandaPic from "../Banda/img/BandaReg.jpeg";
import BandaPicRe from "../Banda/img/RedBanda.jpg";
import style from "./bandaHistoria.module.css";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";

const BandaM = () => {
    return (
        <div className={style.banda}>
            <NavBar />
            <div className={style.bandaText}>
                <img
                    src={BandaLogo}
                    alt="logo_banda"
                    className={style.logoBanda}
                />
                <div>
                    <h2 className={style.titles}>Nuestra banda de música</h2>
                    <p className={style.text}>
                        Una de las propuestas pastorales más importantes dentro
                        del batallón 11, es su banda de música infanto juvenil.
                        <br />
                        La Banda de Música es una propuesta educativa que invita
                        a los chicos del batallón a formarse musicalmente. La
                        participación es incentivada y motivada desde el
                        batallón, facilitando a los adolescentes y jóvenes, la
                        posibilidad de aprender a ejecutar un instrumento de
                        viento o percusión, complementariamente con una
                        formación teórico-práctica.
                        <br />
                        Asistir los sábados a las actividades del batallón, es
                        un requisito para cada músico que integra la banda. Cabe
                        aclara que en la misma no solo se aprenden conocimientos
                        musicales, sino que los jóvenes desarrollan habilidades
                        como, el trabajo en equipo, la inclusión, la
                        coordinación entre otras.
                        <br />
                        La banda no solo es un lugar de esparcimiento más, es un
                        auténtico espacio educativo el cual ha inspirado a
                        decenas de exploradores a seguir el camino de la música,
                        desde docentes en la materia, a músicos profesionales
                        que hoy en día forman parte de bandas militares,
                        policiales y populares.
                    </p>
                </div>
            </div>
            {/* <div>
                <img
                    src={BandaPic}
                    alt="foto_banda"
                    className={style.fotoBanda1}
                />
                <img
                    src={BandaPicRe}
                    alt="foto_bandare"
                    className={style.fotoBanda}
                />
            </div> */}
            <a
                href="https://forms.gle/Y3r6F3pAbE6dvMmk9"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
            >
                Inscripciones
            </a>
            <Footer />
        </div>
    );
};

export default BandaM;
