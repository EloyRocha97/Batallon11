import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import banda from "./bANDA.jpeg";
import fut from "./20240106_114320.jpg";
import guerr from "./Guerra.png";
import pain from "./PaintBall.jpeg";
import "./carrusel2.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="contenedor-carrusel">
      {" "}
      {/* Agregamos una clase al div contenedor */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={banda} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fut} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={guerr} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pain} alt="" className="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
