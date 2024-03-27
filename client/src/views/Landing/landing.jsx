import NavBar from "../../components/NavBar/navBar";
import style from "./landing.module.css";
import logo11 from "./LandingFotos/bata11.png";
import Footer from "../../components/Footer/footer";
import Carrusel from "../../components/Carrusel/carrusel";

const Inicio = () => {
    return (
        <div className={style.landing}>
            <NavBar />
            <div className={style.homeText}>
                <img src={logo11} alt="logo_11" className={style.logo11} />
                <div>
                    <h2 className={style.titles}>Quienes somos?</h2>
                    <p className={style.text}>
                        “El batallón” está formado principalmente por
                        adolescentes y jóvenes que desean recibir y completar su
                        formación humano-cristiana, según el espíritu de Don
                        Bosco, patrono del Movimiento, unidos por ideales de
                        autorrealización y servicio al prójimo, viviendo en
                        comunidad y grupos, en un ambiente sereno, alegre y
                        familiar, preferentemente en contacto con la naturaleza.
                        Actúan su lema y Ley de Honor como modos concretos de
                        realizar su vocación y compromiso bautismal. Los
                        Exploradores Argentinos de Don Bosco, se subdividen en
                        cerca de 100 batallones de exploradores. La finalidad de
                        los exploradores. es ayudar a la promoción educación
                        integral de los adolescentes y jóvenes, como honrados
                        ciudadanos y buenos cristianos. El movimiento reafirma
                        con Don Bosco y la Madre Mazzarello, su preferencia por
                        la adolescencia y juventud más pobre, que tiene menos
                        posibilidades de realizarse, está más expuesta al
                        peligro, y tiene mayor necesidad de ser querida y
                        evangelizada. Trabaja sobre todo en los lugares de mayor
                        pobreza y en los ambientes populares.
                    </p>
                </div>
                <div>
                    <h2 className={style.titles}>Qué hacemos?</h2>
                    <p className={style.text}>
                        El batallón de exploradores en su estructura interna
                        cuenta con una “comunidad de animadores”. Siguiendo la
                        idea del “joven por el joven”, estos son los encargados
                        de la preparación de los juegos, deportes,
                        construcciones, cabuyería y las reflexiones que se viven
                        durante la tarde del sábado. Además el batallón realiza
                        dos campamentos anuales, salidas, encuentros con otros
                        grupos juveniles, etc. Sin contar que cuenta con una
                        banda musical infanto-juvenil, en la cual los
                        exploradores pueden aprender a tocar un instrumento. El
                        batallón cuenta con más de 40 instrumentos musicales,
                        por lo que los aspirantes pueden sumarse sin la
                        necesidad de contar con uno. Además no se requieren
                        conocimientos previos.
                    </p>
                </div>

                {/* <div>
          <h2 className={style.titles}>Nuestra banda de música</h2>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            veritatis error nisi quod quisquam. Sed commodi impedit adipisci
            dolorem voluptatibus, consectetur architecto maxime eaque quibusdam
            odit. Autem eaque tempora repellat! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Unde officiis vel dignissimos beatae
            esse! Pariatur odio dolores eveniet atque enim suscipit repellat?
            Fugit cumque dignissimos illo odit officiis amet non! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Id alias cupiditate
            neque maiores cumque ex aliquam fuga. Numquam sed dolorem
            necessitatibus consequatur eos. Delectus temporibus illo eos
            perspiciatis! Alias, repellendus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi aperiam consectetur impedit
            perferendis, natus dolor cum nam. Saepe, laboriosam illum numquam
            aperiam dolore fuga, quisquam ullam unde esse nemo accusamus!
          </p>
        </div> */}
            </div>
            <Carrusel />
            <div className={style.buttons}>
                <a
                    href="https://forms.gle/4uE4jaSe5oTspBZg7"
                    className={style.link}
                >
                    Pre-Inscripciones
                </a>
                <a href="/fotos" className={style.link}>
                    Nuestras Fotos
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default Inicio;
