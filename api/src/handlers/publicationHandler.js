const { Publications, User } = require("../db");
const fs = require("fs");

const createPublication = async (req, res) => {
  try {
    const { body, image } = req.body;
    const userId = req.user.id;
    const userName = req.user.name;
    const userImage = req.user.image;

    const newPublication = await Publications.create({
      userId: userId,
      username: userName,
      userimage: userImage,
      image: image,
      body: body,
    });

    res.status(201).json({ publication: newPublication });
  } catch (error) {
    console.error("Error al crear la publicación:", error);
    res.status(500).json({ error: "Hubo un error al crear la publicación." });
  }
};

const deletePublication = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    // si la publicacion pertenece al usuario
    const publication = await Publications.findOne({
      where: { id: id, userId: userId },
    });

    if (!publication) {
      return res.status(404).json({
        error: "Publicación no encontrada o no autorizada para eliminarla",
      });
    }
    await publication.destroy();
    res.status(200).json({ message: "Publicación eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la publicación:", error);
    res
      .status(500)
      .json({ error: "Hubo un error al eliminar la publicación." });
  }
};

const getPublications = async (req, res) => {
  try {
    const publications = await Publications.findAll({
      include: User,
    });

    const formattedPublications = publications.map((publication) => ({
      id: publication.id,
      image: publication.image,
      body: publication.body,
      user: {
        id: publication.User.id,
        name: publication.User.name,
        userimage: publication.User.name,
      },
    }));

    res.status(200).json(formattedPublications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPublication,
  deletePublication,
  getPublications,
};
