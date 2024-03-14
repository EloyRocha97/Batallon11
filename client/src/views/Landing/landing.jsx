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

const Inicio = () => {
    return (
        <div className={style.landing}>
            <NavBar />
            <div className={style.homeText}>
                <div>
                    <h3 className={style.titles}>Quienes somos?</h3>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sunt veritatis error nisi quod quisquam. Sed
                        commodi impedit adipisci dolorem voluptatibus,
                        consectetur architecto maxime eaque quibusdam odit.
                        Autem eaque tempora repellat! Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Unde officiis vel
                        dignissimos beatae esse! Pariatur odio dolores eveniet
                        atque enim suscipit repellat? Fugit cumque dignissimos
                        illo odit officiis amet non! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Id alias cupiditate neque
                        maiores cumque ex aliquam fuga. Numquam sed dolorem
                        necessitatibus consequatur eos. Delectus temporibus illo
                        eos perspiciatis! Alias, repellendus? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Sequi aperiam
                        consectetur impedit perferendis, natus dolor cum nam.
                        Saepe, laboriosam illum numquam aperiam dolore fuga,
                        quisquam ullam unde esse nemo accusamus!
                    </p>
                </div>
                <div>
                    <h3 className={style.titles}>Que hacemos?</h3>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sunt veritatis error nisi quod quisquam. Sed
                        commodi impedit adipisci dolorem voluptatibus,
                        consectetur architecto maxime eaque quibusdam odit.
                        Autem eaque tempora repellat! Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Unde officiis vel
                        dignissimos beatae esse! Pariatur odio dolores eveniet
                        atque enim suscipit repellat? Fugit cumque dignissimos
                        illo odit officiis amet non! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Id alias cupiditate neque
                        maiores cumque ex aliquam fuga. Numquam sed dolorem
                        necessitatibus consequatur eos. Delectus temporibus illo
                        eos perspiciatis! Alias, repellendus? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Sequi aperiam
                        consectetur impedit perferendis, natus dolor cum nam.
                        Saepe, laboriosam illum numquam aperiam dolore fuga,
                        quisquam ullam unde esse nemo accusamus!
                    </p>
                </div>
                <div>
                    <h3 className={style.titles}>Nuestra banda de musica</h3>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sunt veritatis error nisi quod quisquam. Sed
                        commodi impedit adipisci dolorem voluptatibus,
                        consectetur architecto maxime eaque quibusdam odit.
                        Autem eaque tempora repellat! Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Unde officiis vel
                        dignissimos beatae esse! Pariatur odio dolores eveniet
                        atque enim suscipit repellat? Fugit cumque dignissimos
                        illo odit officiis amet non! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Id alias cupiditate neque
                        maiores cumque ex aliquam fuga. Numquam sed dolorem
                        necessitatibus consequatur eos. Delectus temporibus illo
                        eos perspiciatis! Alias, repellendus? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Sequi aperiam
                        consectetur impedit perferendis, natus dolor cum nam.
                        Saepe, laboriosam illum numquam aperiam dolore fuga,
                        quisquam ullam unde esse nemo accusamus!
                    </p>
                </div>
            </div>
            <div className={style.final}>
                <div className={style.buttons}>
                    <a
                        href="https://forms.gle/4uE4jaSe5oTspBZg7"
                        className={style.link}
                    >
                        Pre-Inscripciones
                    </a>
                    <a href="/salidas" className={style.link}>
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
                        <img
                            src={Ig}
                            alt="Mi ig"
                            className={style.redesIconTam}
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/Batallon11Cordoba/?locale=es_LA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Face}
                            alt="Mi face"
                            className={style.redesIconTam}
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/user/Batallon11Cba"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Yt}
                            alt="Mi Yt"
                            className={style.redesIconTam}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
