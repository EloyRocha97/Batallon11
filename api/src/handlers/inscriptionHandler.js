const { Inscription } = require("../db");
const { Op } = require("sequelize");

const newInscription = async (req, res) => {
  const {
    nameChildren,
    ageChildren,
    dni,
    etapa,
    nameTutor,
    dniTutor,
    contact,
    gmail,
  } = req.body;
  try {
    const inscription = await Inscription.create({
      nameChildren,
      ageChildren,
      dni,
      etapa,
      nameTutor,
      dniTutor,
      contact,
      gmail,
    });

    res
      .status(201)
      .json({ message: "Inscripción creada exitosamente", inscription });
  } catch (error) {
    console.error("Error al crear la inscripción:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const getInscription = async (req, res) => {
  try {
    let whereClause = {};

    if (req.params.search) {
      const { search } = req.params;

      if (!isNaN(search)) {
        whereClause.ageChildren = search;
      } else {
        whereClause.nameChildren = {
          [Op.like]: `%${search}%`,
        };
      }
    }
    // Obtener las inscripciones de acuerdo a los filtros
    const inscriptions = await Inscription.findAll({
      where: whereClause,
    });

    res.status(200).json(inscriptions);
  } catch (error) {
    console.error("Error al obtener las inscripciones:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const deleteInscription = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar la inscripción por su ID
    await Inscription.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Inscripción eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la inscripción:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const editInscription = async (req, res) => {
  const { id } = req.params;
  const {
    nameChildren,
    ageChildren,
    dni,
    etapa,
    nameTutor,
    dniTutor,
    contact,
    gmail,
  } = req.body;

  try {
    const explorer = await Inscription.findByPk(id);

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
    if (gmail) {
      explorer.gmail = gmail;
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

module.exports = {
  getInscription,
  newInscription,
  deleteInscription,
  editInscription,
};
