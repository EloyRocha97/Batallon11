const { Router } = require("express");
const {
  newinscriptionBanda,
  getInscriptionBanda,
  deleteInscriptionBanda,
  editInscriptionBanda,
} = require("../handlers/bandaHandler");

const bandaRouter = Router();

bandaRouter.post("/", newinscriptionBanda);
bandaRouter.delete("/:id", deleteInscriptionBanda);
bandaRouter.put("/:id", editInscriptionBanda);
bandaRouter.get("/:search?", getInscriptionBanda);

module.exports = bandaRouter;
