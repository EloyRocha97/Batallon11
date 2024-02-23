const { Banda } = require("../db");

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

module.exports = { newinscriptionBanda };
