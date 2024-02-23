const { Router } = require("express");
const {
  newExplorer,
  getExplorador,
  editExplorador,
} = require("../handlers/explorador.handler");

const exploradorRouter = Router();

exploradorRouter.post("/", newExplorer);
exploradorRouter.get("/:etapa?", getExplorador);
exploradorRouter.put("/:id", editExplorador);

module.exports = exploradorRouter;
