import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Contacto from "../../views/Contacto/contacto";
import style from "./footer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
    const isTablet = useMediaQuery("(min-width:550px)");
    const isLaptop = useMediaQuery("(min-width:1366px)");

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <section className={style.mapContainer}>
                    <Contacto />
                </section>
                <section className={style.redes}>
                    <h3 className={style.title}>Nuestras redes: </h3>
                    <div className={style.icons}>
                        <InstagramIcon
                            sx={{
                                color: "rgb(243, 250, 255)",
                                fontSize: "clamp(12px, 10vw, 3.5rem)",

                                // ...(isTablet && { fontSize: "2.5rem" }),

                                // ...(isLaptop && {
                                //     fontSize: "clamp(12px, 4vw, 32px)",
                                // }),
                            }}
                        />
                        <FacebookIcon
                            sx={{
                                color: "rgb(243, 250, 255)",
                                fontSize: "clamp(12px, 10vw, 3.5rem)",

                                // ...(isTablet && { fontSize: "2.5rem" }),

                                // ...(isLaptop && { fontSize: "3.5rem" }),
                            }}
                        />
                        <YouTubeIcon
                            sx={{
                                color: "rgb(243, 250, 255)",
                                fontSize: "clamp(12px, 10vw, 3.5rem)",

                                // ...(isTablet && { fontSize: "2.5rem" }),

                                // ...(isLaptop && { fontSize: "3.5rem" }),
                            }}
                        />
                        <WhatsAppIcon
                            sx={{
                                color: "rgb(243, 250, 255)",
                                fontSize: "clamp(12px, 10vw, 3.5rem)",

                                // ...(isTablet && { fontSize: "2.5rem" }),

                                // ...(isLaptop && { fontSize: "3.5rem" }),
                            }}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;
