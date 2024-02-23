const { Router } = require("express");
const { verifyToken } = require("../middleware/token.middleware");

const {
  createPublication,
  deletePublication,
  getPublications,
} = require("../handlers/publicationHandler");

publicationsRouter = Router();

publicationsRouter.post("/", verifyToken, createPublication);
publicationsRouter.get("/", getPublications);
publicationsRouter.delete("/:id", verifyToken, deletePublication);

module.exports = publicationsRouter;
