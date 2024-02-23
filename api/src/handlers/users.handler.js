const { User } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const users = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      res.status(200).json(users);
    } else {
      const users = await User.findAll();
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ borrado: true, user });
  } catch (error) {
    res.status(400).send("No se pude eliminar al usuario");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    // Elimino la contraseña del objeto user antes de actualizar
    const { password, ...updatedUser } = user;
    //hasheéar la contraseña antes de actualizar
    if (password) {
      const saltRounds = 10;
      updatedUser.password = await bcrypt.hash(password, saltRounds);
    }
    // Actualizar el usuario en la base de datos
    await User.update(updatedUser, {
      where: { id: id },
    });
    return res.json({ cambiado: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).send("No se pudo editar el usuario");
  }
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
