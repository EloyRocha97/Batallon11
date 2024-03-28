import db from "../Landing/LandingFotos/Don Bosco.png";
import style from "./mjs.module.css";
import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar/navBar";

const Mjs = () => {
    return (
        <div className={style.banda}>
            <NavBar />
            <div className={style.bandaText}>
                <img src={db} alt="logo_db" className={style.logoDb} />
                <div>
                    <h2 className={style.titles}>Parroquia</h2>
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
                    <h2 className={style.titles}>M.J.S.</h2>
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

            <Footer />
        </div>
    );
};

export default Mjs;
