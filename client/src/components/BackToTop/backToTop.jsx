import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <Button
                    variant="outlined"
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: "1000",
                        minWidth: "50px",
                        height: "66px",
                        transition: "backgroundColor 0.3s ease",
                        border: "2px solid rgb(0, 33, 131)",
                        borderRadius: "10px",
                        backgroundColor: "rgb(243, 250, 255, 0.8)",
                        color: "rgb(0, 33, 131)",

                        "&:hover": {
                            border: "2px solid rgb(0, 33, 131)",
                            backgroundColor: "rgb(243, 250, 255, 0.5)",
                        },
                    }}
                    onClick={scrollToTop}
                >
                    <KeyboardArrowUpIcon
                        sx={{
                            fontSize: "2rem",
                            padding: 0,
                            margin: 0,
                            color: "rgb(0, 33, 131)",
                        }}
                    />
                </Button>
            )}
        </div>
    );
};

export default BackToTop;
