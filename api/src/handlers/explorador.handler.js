const { Inscription } = require("../db");
const { Explorador } = require("../db");
const { sequelize } = require("../db");

const newExplorer = async (req, res) => {
  const { dni, etapa } = req.body;
  try {
    const existingExplorer = await Explorador.findOne({ where: { dni } });

    if (existingExplorer) {
      return res.status(400).json({ message: "El explorador ya existe" });
    }

    const inscription = await Inscription.findOne({ where: { dni } });

    if (inscription) {
      // Si se encuentra una inscripción...
      const explorer = await Explorador.create({
        nameChildren: inscription.nameChildren,
        ageChildren: inscription.ageChildren,
        dni: inscription.dni,
        etapa: etapa || "?",
      });

      return res
        .status(201)
        .json({ message: "Explorador creado exitosamente", explorer });
    }

    // Si no se encuentra una inscripción...
    const explorer = await Explorador.create({
      nameChildren: req.body.nameChildren,
      ageChildren: req.body.ageChildren,
      dni,
      etapa: etapa || "?",
    });

    res
      .status(201)
      .json({ message: "Explorador creado exitosamente", explorer });
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
  const { nameChildren, ageChildren, dni, etapa } = req.body;

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

    await explorer.save();

    res
      .status(200)
      .json({ message: "Explorador actualizado exitosamente", explorer });
  } catch (error) {
    console.error("Error al editar el explorador:", error);
    res.status(500).json({ message: "Error al procesar la solicitud" });
  }
};

module.exports = { newExplorer, getExplorador, editExplorador };
