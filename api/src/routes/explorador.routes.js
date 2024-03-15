const { Router } = require("express");
const {
  newExplorer,
  getExplorador,
  editExplorador,
  deleteExplorador,
} = require("../handlers/explorador.handler");

const exploradorRouter = Router();

exploradorRouter.post("/", newExplorer);
exploradorRouter.delete("/:id", deleteExplorador);
exploradorRouter.get("/:etapa?", getExplorador);
exploradorRouter.put("/:id", editExplorador);

module.exports = exploradorRouter;
