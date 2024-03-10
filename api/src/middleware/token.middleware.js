const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../db");

const verifyToken = async (req, res, next) => {
  console.log("Middleware de verificación de token ejecutándose");
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ msg: "No se proporcionó un token" });
  }
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SING);

    // Verifica si el usuario asociado con el token existe en la base de datos
    const user = await User.findOne({ where: { id: decodedToken.userId } });
    // console.log("hlanda", decodedToken);
    if (!user) {
      return res.status(401).send({ msg: "Usuario no encontrado" });
    }
    req.user = user; // Establece el usuario en req.user
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { verifyToken };