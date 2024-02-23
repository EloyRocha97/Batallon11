const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const { email, password, name, rol } = req.body;
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) {
      return res.status(400).send({ message: "El corre ya esta registrado" });
    }
    // hashamos la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //guardar el usuario
    const newUser = await User.create({
      name,
      email,
      rol,
      password: hashedPassword,
    });
    // crear y firmar el token
    const token = jwt.sign(
      {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        rol: newUser.rol,
      },
      process.env.JWT_SING
    );

    res.json({ token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Hubo un error al procesar la solicitud" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validacion del usuario
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).send({ message: "Credenciales invalidas" });
    //verificar q la contraseña sea la misma q la de la db
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Credenciales invalidas." });
    //firmar el jwt con el id del user
    const token = jwt.sign(
      { userId: user.id, name: user.name, rol: user.rol },
      process.env.JWT_SING
    );
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const protected = (req, res) => {
  const user = req.user;
  console.log(user);
  if (user && user.rol && user.rol === "admin") {
    res.json({ msg: "Llevas protección ;)" });
  } else {
    res
      .status(403)
      .json({ message: "No tienes permiso para acceder a esta función." });
  }
};

module.exports = {
  signUp,
  login,
  protected,
};
