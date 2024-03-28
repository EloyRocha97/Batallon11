import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css";
import {
    FormControl,
    TextField,
    MenuItem,
    Box,
    Button,
    Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo11 from "../../views/Landing/LandingFotos/Batallon 11 Gral Jose M Paz.png";
import inicio from "../../views/Landing/LandingFotos/FotoRegional.jpg";
import fotoBanda from "../../views/Banda/img/Bandan.jpg";

const NavBar = () => {
    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const [navBarPhoto, setNavBarPhoto] = useState("");

    useEffect(() => {
        if (location.pathname === "/") {
            setNavBarPhoto(style.navBar);
        } else if (location.pathname.startsWith("/banda")) {
            setNavBarPhoto(style.navBarBanda);
        } else if (location.pathname.startsWith("/batallon")) {
            setNavBarPhoto(style.navBarBatallon);
        } else if (location.pathname.startsWith("/mistica")) {
            setNavBarPhoto(style.navBarMistica);
        } else if (location.pathname.startsWith("/mjs")) {
            setNavBarPhoto(style.navBarMjs);
        } else {
            setNavBarPhoto(style.navBar);
        }
    }, [location.pathname]);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    const isPhone = useMediaQuery("(max-width:500px)");

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleOptionChange = (event) => {
        const selected = event.target.value;
        setSelectedOption(selected);
        if (selected === "batallon") {
            window.location.href = "/batallon";
        } else if (selected === "banda") {
            window.location.href = "/banda";
        }
    };

    const handleOptionChangeN = (event) => {
        const selected = event.target.value;
        setSelectedOption(selected);
        if (selected === "E.A.D.B.") {
            window.location.href = "https://eadb.org.ar/";
        } else if (selected === "M.J.S") {
            window.location.href = "/mjs";
        }
    };

    return (
        <Box
            sx={{
                minWidth: "100%",
            }}
        >
            {isPhone ? (
                <Box>
                    <Box
                        sx={{
                            display: isPhone ? "flex" : "none",
                            minWidth: "100%",
                            height: "71px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "rgba(0, 20, 78)",
                            // zIndex: 10,
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleOpenMenu}
                            sx={{
                                display: isPhone ? "flex" : "none",
                                minWidth: "60px",
                                height: "69px",
                                borderRadius: "0px",
                                backgroundColor: "rgba(0, 20, 78)",
                                color: "rgba(0, 20, 78)",

                                "&:hover": {
                                    backgroundColor: "rgba(0, 20, 78)",
                                },
                            }}
                        >
                            {isOpen ? (
                                <CloseOutlinedIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            ) : (
                                <MenuOutlinedIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            )}
                        </Button>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "white",
                                    fontSize: "clamp(1px, 4vw, 3.5rem)",
                                }}
                            >
                                Batallón 11
                            </Typography>
                            <Typography
                                sx={{
                                    color: "white",
                                    fontSize: "clamp(1px, 3vw, 3rem)",
                                }}
                            >
                                Gral. José María Paz
                            </Typography>
                        </Box>

                        <img
                            src={logo11}
                            alt="logo11"
                            className={style.logo11}
                        />
                    </Box>
                    {isOpen && (
                        <Box
                            sx={{
                                height: "200px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "start",
                                gap: "10px",
                                backgroundColor: "rgba(0, 20, 78, 0.9)",
                                padding: "20px",
                            }}
                        >
                            <Link
                                to="/"
                                className={style.phoneLink}
                                onClick={handleClick}
                            >
                                Inicio
                            </Link>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSconCnaQC6sToSQrx7B1rWyb2GCpP3OuGnzLS5FUN48nhow4Q/viewform"
                                className={style.phoneLink}
                                onClick={handleClick}
                            >
                                Inscripciones
                            </a>
                            <Link
                                to="/banda"
                                className={style.phoneLink}
                                onClick={handleClick}
                            >
                                Banda
                            </Link>

                            <Link
                                to="/mistica"
                                className={style.phoneLink}
                                onClick={handleClick}
                            >
                                Mistica
                            </Link>

                            <select
                                value={selectedOption}
                                onChange={handleOptionChange}
                                className={style.phoneSelect}
                            >
                                <option
                                    value=""
                                    disabled
                                    hidden
                                    className={style.phoneOption}
                                >
                                    Historia
                                </option>
                                <option
                                    value="batallon"
                                    className={style.phoneOption}
                                >
                                    Batallón
                                </option>
                                <option
                                    value="banda"
                                    className={style.phoneOption}
                                >
                                    Banda
                                </option>
                            </select>
                            <select
                                value={selectedOption}
                                onChange={handleOptionChangeN}
                                className={style.phoneSelect}
                            >
                                <option
                                    value=""
                                    disabled
                                    hidden
                                    className={style.phoneOption}
                                >
                                    Nosotros
                                </option>
                                <option
                                    value="E.A.D.B."
                                    className={style.phoneOption}
                                >
                                    E.A.D.B.
                                </option>
                                <option
                                    value="M.J.S"
                                    className={style.phoneOption}
                                >
                                    M.J.S
                                </option>
                            </select>
                        </Box>
                    )}
                </Box>
            ) : (
                //este box
                <div className={navBarPhoto}>
                    <div className={style.container}>
                        <div className={style.batallon}>
                            <h1>Batallón 11</h1>
                            <h3>Gral. José María Paz</h3>
                        </div>
                    </div>
                    <div className={style.links}>
                        <Link
                            to="/"
                            className={style.link}
                            onClick={handleClick}
                        >
                            Inicio
                        </Link>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSconCnaQC6sToSQrx7B1rWyb2GCpP3OuGnzLS5FUN48nhow4Q/viewform"
                            className={style.link}
                            onClick={handleClick}
                        >
                            Inscripciones
                        </a>
                        <Link
                            to="/banda"
                            className={style.link}
                            onClick={handleClick}
                        >
                            Banda
                        </Link>

                        <Link
                            to="/mistica"
                            className={style.link}
                            onClick={handleClick}
                        >
                            Mistica
                        </Link>

                        <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            className={style.select}
                        >
                            <option
                                value=""
                                disabled
                                hidden
                                className={style.option}
                            >
                                Historia
                            </option>
                            <option value="batallon" className={style.option}>
                                Batallón
                            </option>
                            <option value="banda" className={style.option}>
                                Banda
                            </option>
                        </select>
                        <select
                            value={selectedOption}
                            onChange={handleOptionChangeN}
                            className={style.select}
                        >
                            <option
                                value=""
                                disabled
                                hidden
                                className={style.option}
                            >
                                Nosotros
                            </option>
                            <option value="E.A.D.B." className={style.option}>
                                E.A.D.B.
                            </option>
                            <option value="M.J.S" className={style.option}>
                                M.J.S
                            </option>
                        </select>
                    </div>
                </div>
            )}
        </Box>
    );
};

export default NavBar;
