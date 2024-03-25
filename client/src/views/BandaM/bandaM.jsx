import BandaLogo from "../Banda/img/BandaLogo.png";
import style from "./bandaM.module.css";
import BandaNavBar from "../../components/NavBar/bandaNavBar";
import Footer from "../../components/Footer/footer";

const BandaM = () => {
  return (
    <div className={style.banda}>
      <BandaNavBar />
      <div className={style.bandaText}>
        <img src={BandaLogo} alt="logo_banda" className={style.logoBanda} />
        <div>
          <h2 className={style.titles}>Nuestra banda de música</h2>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et numquam
            omnis harum accusantium, delectus voluptates sit voluptate illo
            reprehenderit consequatur, molestias doloribus beatae dolor eum est
            voluptas iste earum distinctio. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quibusdam commodi aperiam corporis at
            asperiores nemo esse, quia aspernatur rem. Perferendis illum a quis
            quidem numquam dolore, sint suscipit culpa asperiores! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequuntur nihil
            vitae velit harum, in temporibus eveniet obcaecati laboriosam sit
            accusantium dolores quis amet, mollitia iusto consectetur! Incidunt
            autem vero pariatur?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit, iusto beatae dolor et voluptatum, nemo
            asperiores accusamus, provident commodi aperiam quibusdam! Cum iure
            exercitationem vero doloribus qui, error odit! Aperiam!
          </p>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et numquam
            omnis harum accusantium, delectus voluptates sit voluptate illo
            reprehenderit consequatur, molestias doloribus beatae dolor eum est
            voluptas iste earum distinctio. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quibusdam commodi aperiam corporis at
            asperiores nemo esse, quia aspernatur rem. Perferendis illum a quis
            quidem numquam dolore, sint suscipit culpa asperiores! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequuntur nihil
            vitae velit harum, in temporibus eveniet obcaecati laboriosam sit
            accusantium dolores quis amet, mollitia iusto consectetur! Incidunt
            autem vero pariatur?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit, iusto beatae dolor et voluptatum, nemo
            asperiores accusamus, provident commodi aperiam quibusdam! Cum iure
            exercitationem vero doloribus qui, error odit! Aperiam!
          </p>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et numquam
            omnis harum accusantium, delectus voluptates sit voluptate illo
            reprehenderit consequatur, molestias doloribus beatae dolor eum est
            voluptas iste earum distinctio. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quibusdam commodi aperiam corporis at
            asperiores nemo esse, quia aspernatur rem. Perferendis illum a quis
            quidem numquam dolore, sint suscipit culpa asperiores! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequuntur nihil
            vitae velit harum, in temporibus eveniet obcaecati laboriosam sit
            accusantium dolores quis amet, mollitia iusto consectetur! Incidunt
            autem vero pariatur?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit, iusto beatae dolor et voluptatum, nemo
            asperiores accusamus, provident commodi aperiam quibusdam! Cum iure
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

export default BandaM;
