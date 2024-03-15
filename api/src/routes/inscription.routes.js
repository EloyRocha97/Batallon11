const { Router } = require("express");
const {
  getInscription,
  newInscription,
  deleteInscription,
  editInscription,
} = require("../handlers/inscriptionHandler");

const inscriptRouter = Router();

inscriptRouter.get("/:search?", getInscription);
inscriptRouter.post("/", newInscription);
inscriptRouter.delete("/:id", deleteInscription);
inscriptRouter.put("/:id", editInscription);

module.exports = inscriptRouter;
