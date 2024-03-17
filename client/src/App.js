import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { Banda, Fichas, Inicio, Salidas } from "./views";
import NavBar from "./components/NavBar/navBar";
import style from "./app.module.css";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
    const location = useLocation();
    const hideNavBar =
        location.pathname === "/" ||
        location.pathname === "/banda" ||
        location.pathname === "/fotos";

    return (
        <div className={style.body}>
            {!hideNavBar && <NavBar />}
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/fichas" element={<Fichas />} />
                <Route path="/fotos" element={<Salidas />} />
                <Route path="/banda" element={<Banda />} />
            </Routes>
        </div>
    );
}

export default App;
