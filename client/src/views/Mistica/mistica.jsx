import nacional from "../Landing/LandingFotos/LogoExp.png";
import style from "./mistica.module.css";
import Footer from "../../components/Footer/footer";
import pdfFile from "./Mística del Ser Explorador.pdf";
import pdfIcon from "./pdf_icon.png";
import NavBar from "../../components/NavBar/navBar";

const Mistica = () => {
    return (
        <div className={style.mistica}>
            <NavBar />
            <div className={style.misticaText}>
                <img
                    src={nacional}
                    alt="logo_db"
                    className={style.logonacional}
                />
                <div className={style.misticaTextContainer}>
                    <h2 className={style.titles}>
                        Mística del movimiento exploradoril salesiano
                    </h2>
                    <h1 className={style.text2}>
                        Nuestra mística es entendida “como un modo de ser”,
                        expresado en el “modo de hacer” que caracteriza,
                        identifica y distingue a los Exploradores Salesianos de
                        cualquier otro grupo o institución.
                    </h1>
                    <p className={style.text}>
                        Un Lema: <span>¡Siempre listo!</span>
                        <br />
                        Que se traduce en una actitud básica:{" "}
                        <span>de Servicio (Solidaridad)</span> <br />
                        la que se hace cotidiana con:{" "}
                        <span>la Buena Acción Diaria,</span> <br />
                        por un compromiso formal:{" "}
                        <span>la Promesa y su Reafirmación:</span> <br />
                        de cumplir un código de conducta:{" "}
                        <span>la Ley de Honor</span> <br />y un plan de vida
                        expresado en: <span>la Oración del Explorador/a</span>{" "}
                        <br />
                        vivido con espíritu de: <span>Superación</span> <br />y
                        si es necesario de: <span>Sacrificio</span> <br />
                        teniendo en los acontecimientos diarios:{" "}
                        <span>una Visión de Fe</span> <br />y sintiendo en su
                        corazón un profundo:{" "}
                        <span>amor a Dios, a la Patria y al Hogar,</span> <br />
                        hasta asumir una responsabilidad concreta de:{" "}
                        <span>Compromiso Apostólico</span> <br />
                        cuando realice su: <span>Partida de "Sol"</span>.
                        <br />
                        <br />
                        Su proceso de formación se basa en una metodología:{" "}
                        <span className={style.spanes}>
                            el Sistema de Patrulla
                        </span>
                        ,
                        <br />
                        en la que tiene prioridad:{" "}
                        <span className={style.spanes}>
                            la Corresponsabilidad
                        </span>
                        ,
                        <br />
                        dando lugar al:{" "}
                        <span className={style.spanes}>Liderazgo Juvenil</span>,
                        <br />
                        teniendo por centro la:{" "}
                        <span className={style.spanes}>
                            educación del Joven por el Joven mismo
                        </span>
                        <br />y desarrolla su actividad en un clima de:{" "}
                        <span className={style.spanes}>Aventura</span>,
                        <br />
                        convirtiéndolo todo en un:{" "}
                        <span className={style.spanes}>Juego Educativo</span>
                        .
                        <br />
                        <br />
                        Muchos de estos elementos se expresan a través de:{" "}
                        <span className={style.espanes}>
                            las Insignias y el Uniforme
                        </span>
                        <br />y los celebra en:{" "}
                        <span className={style.espanes}>
                            las Canciones, Ceremonias y Experiencias
                            Espirituales
                        </span>
                        <br />y con estos ideales y principios:{" "}
                        <span className={style.espanes}>
                            ORIENTA TODA SU VIDA
                        </span>
                        .
                    </p>

                    <h2 className={style.titles}>Oración del explorador</h2>

                    <p className={style.text}>
                        Señor Jesús, tu que me has dado el aviso de estar
                        siempre listo
                        <br />
                        y me has hecho la gracia de tomarlo por lema
                        <br />
                        concédeme cumplir con él
                        <br />
                        que en todas las circunstancias de la vida me hallen
                        listo para el deber
                        <br />
                        amando lo que es verdadero
                        <br />
                        haciendo lo que es bueno
                        <br />
                        fiel a la iglesia leal a la patria
                        <br />
                        siempre listo a perdonar, siempre pronto a socorrer
                        <br />
                        alegre y sonriente en el sufrir, casto y puro de corazón
                        <br />
                        estas son, Señor, las huellas de tus pasos;
                        <br />
                        yo quiero seguirte a través de todo sin miedo y sin
                        tacha,
                        <br />
                        con el alma fuerte y la frente levantada.
                        <br />
                        esta es mi promesa de cristiana y explorador.
                        <br />
                        por mi honor no la traicionaré jamás
                        <br />
                        confiando Señor en tu bondad y en tu gracia,
                        <br />
                        y con el auxilio maternal de María.
                        <br />
                        Amén.
                    </p>

                    <div>
                        <h1 className={style.titles}>Ley de Honor</h1>
                        <h2 className={style.text3}>
                            El explorador/ La exploradora:
                        </h2>
                    </div>
                    <ol className={style.text}>
                        <li>
                            Vive íntegramente su fe, siendo testigo de Cristo y
                            miembro activo de su Iglesia.
                        </li>
                        <li>
                            Quiere a su Patria; desea y busca la paz, por eso
                            trabaja por la justicia.
                        </li>
                        <li>
                            Ama y obedece pronta y alegremente a sus padres y
                            superiores, se siente corresponsable con ellos.
                        </li>
                        <li>
                            Está siempre listo para servir, colabora en toda
                            iniciativa buena.
                        </li>
                        <li>
                            Es amigo y hermano de todos, porque en ellos ve a
                            Cristo.
                        </li>
                        <li>
                            Es educado y limpio en sus pensamientos, palabras y
                            acciones.
                        </li>
                        <li>
                            Es noble, generoso y alegre, aún en las
                            dificultades.
                        </li>
                        <li>
                            Es leal, veraz y digno de confianza, no realiza nada
                            a medias.
                        </li>
                        <li>
                            Admira, respeta y perfecciona la naturaleza, por ser
                            obra de Dios.
                        </li>
                        <li>
                            Es artífice de su vida y constructor de un mundo
                            mejor en su comunidad.
                        </li>
                    </ol>

                    <h2 className={style.titles}>Canción siempre listo:</h2>
                    <h1 className={style.text}>
                        La semilla va brotando desde horneros,
                        <br />
                        va creciendo y despacito se hace flor.
                        <br />
                        Adalides la acompañan y nace del corazón,
                        <br />
                        un compromiso como un puente hacia Dios.
                        <br />
                        Alegría y oración, viviendo el SIEMPRE MEJOR.
                        <br />
                        ¡Siempre Listo!, Yo soy explorador, explorador... (x2)
                    </h1>

                    <h1 className={style.text}>
                        Mi mochila guardará mis anhelos,
                        <br />
                        mi promesa, mi rosario y mis sueños;
                        <br />
                        toda mi vida explorador... Explorador.
                        <br />
                        Caminante yo seré por las estrellas,
                        <br />
                        un Pionero en la galaxia del amor,
                        <br />
                        y a través del universo un valiente Rastreador,
                        <br />
                        con la audacia de un Baquiano rumbo al Sol.
                        <br />
                        De Don Bosco un batallón, de Argentina y para Dios.
                        <br />
                        ¡Siempre Listo!, Yo soy explorador, explorador... (x2)
                    </h1>

                    <h1 className={style.text}>
                        Una Chispita yo seré por las estrellas,
                        <br />
                        una Fuego, en la galaxia del amor,
                        <br />
                        y a través del universo una Hoguera un corazón,
                        <br />
                        con la audacia de una Antorcha rumbo al Sol.
                        <br />
                        De Don Bosco un batallón, de Argentina y para Dios.
                        <br />
                        ¡Siempre Listo!, Yo soy explorador, explorador... (x2)
                    </h1>

                    <h1 className={style.text}>
                        Treparemos más allá de las tormentas.
                        <br />
                        Nuestra carpa la noche desafiará y ataremos la patrulla
                        <br />
                        con un nudo de amistad, y un mangrullo alto y fuerte
                        crecerá.
                        <br />
                        Entrenándonos así, aprendemos a vivir.
                        <br />
                        ¡Siempre Listo!, Yo soy explorador, explorador...
                    </h1>
                    <h2 className={style.titles}>Himno del explorador/a</h2>
                    <p className={style.text}>
                        Cuando desfilas Batallón levantas alma y corazón.
                        <br />
                        Hoy te preparas a sufrir las arduas luchas del vivir.
                        <br />
                        Dentro del alma la virtud, fuera, en el cuerpo, la
                        salud;
                        <br />
                        entre la turba juvenil hay siempre luz primaveril
                        primaveril primaveril.
                        <br />
                        <br />
                        Por todas partes el honor de ser un digno Explorador!
                        <br />
                        Siempre bizarro Batallón, y siempre listo el corazón,
                        corazón
                        <br />
                        <br />
                        Somos aurora que al abrir el gran celaje del vivir,
                        <br />
                        pone su nota de beldad en nuestra pálida heredad.
                        <br />
                        A los redobles del tambor marcha alegre Explorador
                        <br />
                        rumbo al mañana, hacia el ideal que es nuestra cumbre
                        terminal.
                        <br />
                        <br />
                        Con la mirada puesta en Dios, y de la enseña siempre en
                        pos,
                        <br />
                        vamos triunfantes a subir la cumbre ideal del porvenir.
                        <br />
                        Nuestra bandera es la virtud que hace inmortal a la
                        juventud,
                        <br />
                        bandera pura, bandera angelical, como una brisa matinal.
                    </p>

                    <h2 className={style.titles}>
                        Para mas acerca de la Mistica:
                    </h2>
                    <div className={style.moreInfo}>
                        <a href={pdfFile} download>
                            <img
                                src={pdfIcon}
                                alt="Icono PDF"
                                className={style.pdfIcon}
                            />
                        </a>
                        <div className={style.pdfInfo}>
                            <p className={style.pdfTitle}>
                                Mística del Ser Explorador
                            </p>
                            <p className={style.textP}>
                                Mística del Ser Explorador.pdf
                                <br />
                                Documento Adobe Acrobat 385.5 KB
                            </p>
                            <a
                                href={pdfFile}
                                download
                                className={style.downloadLink}
                            >
                                Descargar
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Mistica;
