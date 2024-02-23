const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const mainRouter = require("./routes");

const app = express();

// Configura multer para manejar la carga de archivos
const upload = multer({ dest: "../uploads" });

// Middleware para registrar las solicitudes
app.use(morgan("dev"));

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Middleware para manejar la carga de archivos
app.use(upload.single("image"));

// Middleware para permitir solicitudes CORS desde cualquier origen
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Rutas principales
app.use(mainRouter);

module.exports = app;
