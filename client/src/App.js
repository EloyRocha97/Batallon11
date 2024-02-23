import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { Banda, Fichas, Inicio } from "./views";
import NavBar from "./components/NavBar/navBar";
import style from "./app.module.css";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/" || location.pathname === "/banda";

  return (
    <div className={style.back}>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/banda" element={<Banda />} />
      </Routes>
    </div>
  );
}

export default App;
