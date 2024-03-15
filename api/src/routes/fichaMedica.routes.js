const { Router } = require("express");

const {
  newFichaMedica,
  getFicha,
  deleteFicha,
  editFicha,
} = require("../handlers/fichaMedicaHandler");

const fichaRouter = Router();

fichaRouter.post("/", newFichaMedica);
fichaRouter.delete("/:id", deleteFicha);
fichaRouter.put("/:id", editFicha);
fichaRouter.get("/:ficha?", getFicha);

module.exports = fichaRouter;
