import NavBar from "../../components/NavBar/navBar";
import Logo from "../Landing/LandingFotos/bata11.png";
import BandaLogo from "./img/BandaLogo.png";
import BandaM from "./img/Bandan.png";
import Ig from "../Landing/svg/instagram-color.svg";
import Yt from "../Landing/svg/youtube-color.svg";
import Face from "../Landing/svg/facebook-color.svg";
import style from "./banda.module.css";
import BandaNavBar from "../../components/NavBar/bandaNavBar";
import Footer from "../../components/Footer/footer";

const Banda = () => {
    return (
        <div className={style.banda}>
            <BandaNavBar />
            <div className={style.bandaText}>
                <img
                    src={BandaLogo}
                    alt="logo_banda"
                    className={style.logoBanda}
                />
                <div>
                    <h2 className={style.titles}>Nuestra Historia</h2>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Et numquam omnis harum accusantium, delectus
                        voluptates sit voluptate illo reprehenderit consequatur,
                        molestias doloribus beatae dolor eum est voluptas iste
                        earum distinctio. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quibusdam commodi aperiam
                        corporis at asperiores nemo esse, quia aspernatur rem.
                        Perferendis illum a quis quidem numquam dolore, sint
                        suscipit culpa asperiores! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Consequuntur nihil vitae
                        velit harum, in temporibus eveniet obcaecati laboriosam
                        sit accusantium dolores quis amet, mollitia iusto
                        consectetur! Incidunt autem vero pariatur?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Odit, iusto
                        beatae dolor et voluptatum, nemo asperiores accusamus,
                        provident commodi aperiam quibusdam! Cum iure
                        exercitationem vero doloribus qui, error odit! Aperiam!
                    </p>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Et numquam omnis harum accusantium, delectus
                        voluptates sit voluptate illo reprehenderit consequatur,
                        molestias doloribus beatae dolor eum est voluptas iste
                        earum distinctio. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quibusdam commodi aperiam
                        corporis at asperiores nemo esse, quia aspernatur rem.
                        Perferendis illum a quis quidem numquam dolore, sint
                        suscipit culpa asperiores! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Consequuntur nihil vitae
                        velit harum, in temporibus eveniet obcaecati laboriosam
                        sit accusantium dolores quis amet, mollitia iusto
                        consectetur! Incidunt autem vero pariatur?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Odit, iusto
                        beatae dolor et voluptatum, nemo asperiores accusamus,
                        provident commodi aperiam quibusdam! Cum iure
                        exercitationem vero doloribus qui, error odit! Aperiam!
                    </p>
                    <p className={style.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Et numquam omnis harum accusantium, delectus
                        voluptates sit voluptate illo reprehenderit consequatur,
                        molestias doloribus beatae dolor eum est voluptas iste
                        earum distinctio. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quibusdam commodi aperiam
                        corporis at asperiores nemo esse, quia aspernatur rem.
                        Perferendis illum a quis quidem numquam dolore, sint
                        suscipit culpa asperiores! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Consequuntur nihil vitae
                        velit harum, in temporibus eveniet obcaecati laboriosam
                        sit accusantium dolores quis amet, mollitia iusto
                        consectetur! Incidunt autem vero pariatur?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Odit, iusto
                        beatae dolor et voluptatum, nemo asperiores accusamus,
                        provident commodi aperiam quibusdam! Cum iure
                        exercitationem vero doloribus qui, error odit! Aperiam!
                    </p>
                </div>
            </div>
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

export default Banda;
