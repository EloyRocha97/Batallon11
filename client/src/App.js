import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { Banda, Fichas, Inicio, Salidas, Batallon } from "./views";
import NavBar from "./components/NavBar/navBar";
import style from "./app.module.css";
import BackToTop from "./components/BackToTop/backToTop";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/" ||
    location.pathname === "/banda" ||
    location.pathname === "/batallon" ||
    location.pathname === "/fotos";

  return (
    <div className={style.body}>
      <BackToTop />
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/fotos" element={<Salidas />} />
        <Route path="/banda" element={<Banda />} />
        <Route path="/batallon" element={<Batallon />} />
      </Routes>
    </div>
  );
}

export default App;
