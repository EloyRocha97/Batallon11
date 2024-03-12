import React from "react";
import Direccion from "./svg/direcIcon.svg";
import style from "./contacto.module.css";

const Contacto = () => {
  return (
    <div className={style.container}>
      <div className={style.contacto}>
        <h1 className={style.items1}>Nos encontramos en...</h1>
      </div>
      <div className={style.todo}>
        <div className={style.fakes}>
          <div className={style.medios}>
            <div className={style.info}>
              <img src={Direccion} alt="Mi dire" className={style.icons} />
              <h4 className={style.items2}>
                {" "}
                Av. Colón 6500, Don Bosco,<br></br> X5003DFW, 5000 Córdoba
              </h4>
            </div>
          </div>
          <iframe
            className={style.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.8755230165964!2d-64.27033804357053!3d-31.393427364725447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f1ee5ef67b7%3A0xd59e5978f38ad3!2sBatall%C3%B3n%2011%20Gral.%20Jos%C3%A9%20Mar%C3%ADa%20Paz.!5e0!3m2!1ses-419!2sar!4v1708197371125!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
