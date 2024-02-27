const { Banda } = require("../db");
const { Op } = require("sequelize");

const newinscriptionBanda = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
    const {
      nameExplo,
      ageExplo,
      dateOfBirth,
      dni,
      schoolTime,
      institution,
      etapa,
      expMusical,
      instrument,
      mobility,
      practice,
      nameTutor,
      dniTutor,
      contact,
      gmail,
    } = req.body;

    const newBanda = await Banda.create({
      nameExplo,
      ageExplo,
      dateOfBirth,
      dni,
      schoolTime,
      institution,
      etapa,
      expMusical,
      instrument,
      mobility,
      practice,
      nameTutor,
      dniTutor,
      contact,
      gmail,
    });

    res
      .status(201)
      .json({ message: "Inscripción creada exitosamente", newBanda });
  } catch (error) {
    // Manejo de errores
    console.error("Error al crear la inscripción:", error);
    res
      .status(500)
      .json({ error: "Hubo un problema al procesar la solicitud" });
  }
};

const getInscriptionBanda = async (req, res) => {
  try {
    let whereClause = {};

    if (req.params.search) {
      const { search } = req.params;

      if (!isNaN(search)) {
        whereClause.nameExplo = search;
      } else {
        whereClause.nameExplo = {
          [Op.like]: `%${search}%`,
        };
      }
    }
    // Obtener las inscripciones de acuerdo a los filtros
    const newBanda = await Banda.findAll({
      where: whereClause,
    });

    res.status(200).json(newBanda);
  } catch (error) {
    console.error("Error al obtener las inscripciones:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const deleteInscriptionBanda = async (req, res) => {
  try {
    const { id } = req.params;

    // Eliminar la inscripción por su ID
    await Banda.destroy({
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

const editInscriptionBanda = async (req, res) => {
  const { id } = req.params;
  const {
    nameExplo,
    ageExplo,
    dateOfBirth,
    dni,
    schoolTime,
    institution,
    etapa,
    instrument,
    nameTutor,
    dniTutor,
    contact,
    gmail,
  } = req.body;

  try {
    const explorer = await Banda.findByPk(id);

    if (!explorer) {
      return res.status(404).json({ message: "Explorador no encontrado" });
    }

    if (nameExplo) {
      explorer.nameExplo = nameExplo;
    }
    if (ageExplo) {
      explorer.ageExplo = ageExplo;
    }
    if (dateOfBirth) {
      explorer.dateOfBirth = dateOfBirth;
    }
    if (dni) {
      explorer.dni = dni;
    }
    if (schoolTime) {
      explorer.schoolTime = schoolTime;
    }
    if (institution) {
      explorer.institution = institution;
    }
    if (etapa) {
      explorer.etapa = etapa;
    }
    if (instrument) {
      explorer.instrument = instrument;
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
  newinscriptionBanda,
  getInscriptionBanda,
  deleteInscriptionBanda,
  editInscriptionBanda,
};
