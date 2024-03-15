const { FichaMedica, Inscription } = require("../db");

const newFichaMedica = async (req, res) => {
  const { dni, image } = req.body;
  try {
    const existInscription = await Inscription.findOne({ where: { dni } });

    if (existInscription) {
      const {
        nameChildren,
        ageChildren,
        etapa,
        nameTutor,
        dniTutor,
        contact,
        gmail,
      } = existInscription;

      console.log(existInscription);

      const fichaMedica = await FichaMedica.create({
        dni,
        image,
        nameChildren,
        ageChildren,
        etapa,
        nameTutor,
        dniTutor,
        contact,
        gmail,
      });

      res
        .status(200)
        .json({ message: "Ficha médica creada con éxito", fichaMedica });
    } else {
      res.status(404).json({
        message: "No se encontró ninguna inscripción con el DNI proporcionado",
      });
    }
  } catch (error) {
    console.error("Error al crear la ficha:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const getFicha = async (req, res) => {
  try {
    let whereClause = {};

    if (req.params.search) {
      const { search } = req.params;

      if (!isNaN(search)) {
        whereClause.dni = search;
      }
    }

    const ficha = await FichaMedica.findAll({
      where: whereClause,
    });

    res.status(200).json(ficha);
  } catch (error) {
    console.error("Error al obtener las fichas médicas:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

const deleteFicha = async (req, res) => {
  try {
    const { id } = req.params;

    await FichaMedica.destroy({ where: { id: id } });
    res.status(200).json({ message: "Ficha Medica eliminada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editFicha = async (req, res) => {
  const { id } = req.params;
  const { dni } = req.body;
  try {
    const editFichaM = await FichaMedica.findByPk(id);

    if (!editFichaM) res.send(404).json({ message: "Ficha no encontrada" });

    if (dni) {
      editFichaM.dni = dni;
    }

    await editFichaM.save();

    res.status(200).json({ message: "Ficha editada con exito", editFichaM });
  } catch (error) {
    res.status(400).json({ message: "Error al procesar solicitud" });
  }
};

module.exports = { newFichaMedica, getFicha, deleteFicha, editFicha };
