import nacional from "../Landing/LandingFotos/LogoExp.png";
import style from "./mistica.module.css";
import Footer from "../../components/Footer/footer";
import MjsNav from "../../components/NavBar/mjsNav";

const Mistica = () => {
  return (
    <div className={style.mistica}>
      <MjsNav />
      <div className={style.misticaText}>
        <img src={nacional} alt="logo_db" className={style.logonacional} />
        <div>
          <h2 className={style.titles}>
            Mística del movimiento exploradoril salesiano
          </h2>
          <h1 className={style.text2}>
            Nuestra mística es entendida “como un modo de ser”, expresado en el
            “modo de hacer” que caracteriza, identifica y distingue a los
            Exploradores Salesianos de cualquier otro grupo o institución.
          </h1>
          <p className={style.text}>
            Un Lema: <span>¡Siempre listo!</span>
            <br />
            Que se traduce en una actitud básica:{" "}
            <span>de Servicio (Solidaridad)</span> <br />
            la que se hace cotidiana con: <span>
              la Buena Acción Diaria,
            </span>{" "}
            <br />
            por un compromiso formal: <span>
              la Promesa y su Reafirmación:
            </span>{" "}
            <br />
            de cumplir un código de conducta: <span>la Ley de Honor</span>{" "}
            <br />y un plan de vida expresado en:{" "}
            <span>la Oración del Explorador/a</span> <br />
            vivido con espíritu de: <span>Superación</span> <br />y si es
            necesario de: <span>Sacrificio</span> <br />
            teniendo en los acontecimientos diarios:{" "}
            <span>una Visión de Fe</span> <br />y sintiendo en su corazón un
            profundo: <span>amor a Dios, a la Patria y al Hogar,</span> <br />
            hasta asumir una responsabilidad concreta de:{" "}
            <span>Compromiso Apostólico</span> <br />
            cuando realice su: <span>Partida de "Sol"</span>.
            <br />
            <br />
            Su proceso de formación se basa en una metodología:{" "}
            <span>el Sistema de Patrulla</span>,
            <br />
            en la que tiene prioridad: <span>la Corresponsabilidad</span>,
            <br />
            dando lugar al: <span>Liderazgo Juvenil</span>,
            <br />
            teniendo por centro la:{" "}
            <span>educación del Joven por el Joven mismo</span>
            <br />y desarrolla su actividad en un clima de:{" "}
            <span>Aventura</span>,
            <br />
            convirtiéndolo todo en un: <span>Juego Educativo</span>
            .
            <br />
            <br />
            Muchos de estos elementos se expresan a través de:{" "}
            <span>las Insignias y el Uniforme</span>
            <br />y los celebra en:{" "}
            <span>las Canciones, Ceremonias y Experiencias Espirituales</span>
            <br />y con estos ideales y principios:{" "}
            <span>ORIENTA TODA SU VIDA</span>.
          </p>

          <h2 className={style.titles}>Oración del explorador</h2>

          <p className={style.text}>
            Señor Jesús, tu que me has dado el aviso de estar siempre listo
            <br />
            y me has hecho la gracia de tomarlo por lema
            <br />
            concédeme cumplir con él
            <br />
            que en todas las circunstancias de la vida me hallen listo para el
            deber
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
            yo quiero seguirte a través de todo sin miedo y sin tacha,
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

          <h2 className={style.titles}>Ley de Honor</h2>
          <h1 className={style.text3}> El explorador/ La exploradora:</h1>
          <p className={style.text}>
            1. Vive íntegramente su fe, siendo testigo de Cristo y miembro
            activo de su Iglesia.
            <br />
            2. Quiere a su Patria; desea y busca la paz, por eso trabaja por la
            justicia. <br />
            3. Ama y obedece pronta y alegremente a sus padres y superiores. Se
            siente corresponsable con ellos. <br />
            4. Está siempre listo para servir, colabora en toda iniciativa
            buena. <br />
            5. Es amigo y hermano de todos, porque en ellos ve a Cristo. <br />
            6. Es educado y limpio en sus pensamientos, palabras y acciones.{" "}
            <br />
            7. Es noble, generoso y alegre, aún en las dificultades.
            <br />
            8. Es leal, veraz y digno de confianza, no realiza nada a medias.{" "}
            <br />
            9. Admira, respeta y perfecciona la naturaleza, por ser obra de
            Dios.
            <br />
            10. Es artífice de su vida y constructor de un mundo mejor en su
            comunidad.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mistica;
