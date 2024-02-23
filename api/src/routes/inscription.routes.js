const { Router } = require("express");
const {
  getInscription,
  newInscription,
  deleteInscription,
} = require("../handlers/inscriptionHandler");

const inscriptRouter = Router();

inscriptRouter.get("/:search?", getInscription);
inscriptRouter.post("/", newInscription);
inscriptRouter.delete("/:id", deleteInscription);

module.exports = inscriptRouter;
