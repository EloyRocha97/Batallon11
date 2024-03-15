const { Inscription } = require("../db");
const { FichaMedica } = require("../db");
const { Explorador } = require("../db");
const { sequelize } = require("../db");

const newExplorer = async (req, res) => {
  const { dni } = req.body; // Obtener el DNI del cuerpo de la solicitud
  try {
    // Buscar en FichaMedica por el DNI e incluir la imagen
    const fichaMedica = await FichaMedica.findOne({
      where: { dni },
    });

    // Buscar en Inscription por el DNI
    const inscription = await Inscription.findOne({ where: { dni } });

    if (fichaMedica && inscription) {
      // Si existen registros en ambos modelos con el mismo DNI, unificar los datos para crear el explorador
      const explorerData = {
        dni: inscription.dni,
        nameChildren: inscription.nameChildren,
        ageChildren: inscription.ageChildren,
        etapa: inscription.etapa,
        nameTutor: inscription.nameTutor,
        dniTutor: inscription.dniTutor,
        contact: inscription.contact,
        gmail: inscription.gmail,
        image: fichaMedica.image,
      };

      const explorer = await Explorador.create(explorerData);

      res
        .status(201)
        .json({ message: "Explorador creado exitosamente", explorer });
    } else {
      // Si no se encuentra un registro en uno de los modelos, devolver un mensaje de error
      res.status(404).json({
        message:
          "No se encontró ningún registro con el DNI proporcionado en ambos modelos",
      });
    }
  } catch (error) {
    console.error("Error al crear el explorador:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const getExplorador = async (req, res) => {
  try {
    const { etapa } = req.params;

    if (etapa) {
      const exploradores = await Explorador.findAll({
        where: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("etapa")),
          sequelize.fn("LOWER", etapa)
        ),
      });
      res.status(200).json(exploradores);
    } else {
      const exploradores = await Explorador.findAll();
      res.status(200).json(exploradores);
    }
  } catch (error) {
    console.error("Error al obtener los exploradores:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const editExplorador = async (req, res) => {
  const { id } = req.params;
  const {
    nameChildren,
    ageChildren,
    dni,
    etapa,
    nameTutor,
    dniTutor,
    contact,
    image,
  } = req.body;

  try {
    const explorer = await Explorador.findByPk(id);

    if (!explorer) {
      return res.status(404).json({ message: "Explorador no encontrado" });
    }

    if (nameChildren) {
      explorer.nameChildren = nameChildren;
    }
    if (ageChildren) {
      explorer.ageChildren = ageChildren;
    }
    if (dni) {
      explorer.dni = dni;
    }
    if (etapa) {
      explorer.etapa = etapa;
    }
    if (nameTutor) {
      explorer.nameTutor = nameTutor;
    }
    if (dniTutor) {
      explorer.dniTutor = dniTutor;
    }
    if (contact) {
      explorer.contact = contact;
    }
    if (image) {
      explorer.image = image;
    }

    await explorer.save();

    res
      .status(200)
      .json({ message: "Explorador actualizado exitosamente", explorer });
  } catch (error) {
    console.error("Error al editar el explorador:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const deleteExplorador = async (req, res) => {
  const { id } = req.params;
  try {
    await Explorador.destroy({ where: { id: id } });
    res.status(200).json({ message: "Explorador eliminado" });
  } catch (error) {
    res.status(404).json({ message: "No se pudo realizar la operacion" });
  }
};

module.exports = {
  newExplorer,
  getExplorador,
  editExplorador,
  deleteExplorador,
};
