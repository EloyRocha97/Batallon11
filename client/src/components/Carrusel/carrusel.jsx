import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper/modules";
import banda from "./img/bANDA.jpeg";
import fut from "./img/20240106_114320.jpg";
import guerr from "./img/Banderas.png";
import Heros from "./img/Heros.jpg";
import Tierra from "./img/Tierra.jpg";
import Buso from "./img/Buso.jpg";
import Juego from "./img/MiniCarri.png";
import style from "./carrusel.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Carrusel = () => {
    return (
        <div className={style.contenedorCarrusel}>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className={style.swiperSlide}
            >
                <SwiperSlide>
                    <img
                        src={banda}
                        alt="img_not_found"
                        className={style.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fut} alt="img_not_found" className={style.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={guerr}
                        alt="img_not_found"
                        className={style.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Tierra}
                        alt="img_not_found"
                        className={style.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Buso} alt="img_not_found" className={style.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Heros}
                        alt="img_not_found"
                        className={style.img}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Juego}
                        alt="img_not_found"
                        className={style.img}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carrusel;
