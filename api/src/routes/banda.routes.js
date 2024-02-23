const { Router } = require("express");
const { newinscriptionBanda } = require("../handlers/bandaHandler");

const bandaRouter = Router();

bandaRouter.post("/", newinscriptionBanda);

module.exports = bandaRouter;
