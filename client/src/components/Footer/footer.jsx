import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Contacto from "../../views/Contacto/contacto";
import style from "./footer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className={style.footer}>
            <div className={style.container}>
                <section className={style.mapContainer}>
                    <Contacto />
                </section>
                <section className={style.redes}>
                    <h3 className={style.title}>Nuestras redes: </h3>
                    <div className={style.icons}>
                        <a
                            href="https://www.instagram.com/batallon11/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon
                                sx={{
                                    color: "rgb(243, 250, 255)",
                                    fontSize: "clamp(12px, 10vw, 3.5rem)",
                                }}
                            />
                        </a>
                        <a
                            href="https://web.facebook.com/Batallon11Cordoba"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon
                                sx={{
                                    color: "rgb(243, 250, 255)",
                                    fontSize: "clamp(12px, 10vw, 3.5rem)",
                                }}
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/@Batallon11Cba"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <YouTubeIcon
                                sx={{
                                    color: "rgb(243, 250, 255)",
                                    fontSize: "clamp(12px, 10vw, 3.5rem)",
                                }}
                            />
                        </a>
                        <a
                            href="https://wa.me/+5493518599377"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppIcon
                                sx={{
                                    color: "rgb(243, 250, 255)",
                                    fontSize: "clamp(12px, 10vw, 3.5rem)",
                                }}
                            />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;
