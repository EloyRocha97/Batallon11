import BatallonNavBar from "../../components/NavBar/BatallonNavBar";
import logo11 from "../Landing/LandingFotos/bata11.png";
import sedeVieja from "./img/NavBarBATALLON.jpeg";
import Footer from "../../components/Footer/footer";
import style from "./batallon.module.css";
import NavBar from "../../components/NavBar/navBar";

const Batallon = () => {
  return (
    <div className={style.banda}>
      <NavBar />
      <div className={style.bandaText}>
        <img src={sedeVieja} alt="sede_vieja" className={style.sedeVieja} />
        <img src={logo11} alt="logo_bata" className={style.logoBanda} />
        <div>
          <h2 className={style.titles}>Historia Del Batallon</h2>
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

      <Footer />
    </div>
  );
};

export default Batallon;
