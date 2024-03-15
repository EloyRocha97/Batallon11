import NavBar from "../../components/NavBar/navBar";
import style from "./landing.module.css";
import logo11 from "./LandingFotos/bata11.png";
import Footer from "../../components/Footer/footer";

const Inicio = () => {
    return (
        <div className={style.landing}>
            <NavBar />
            <div className={style.homeText}>
                <img src={logo11} alt="logo_11" className={style.logo11} />
                <div>
                    <h2 className={style.titles}>Quienes somos?</h2>
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
                    <h2 className={style.titles}>Qué hacemos?</h2>
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
                    <h2 className={style.titles}>Nuestra banda de música</h2>
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
            <Footer />
        </div>
    );
};

export default Inicio;
