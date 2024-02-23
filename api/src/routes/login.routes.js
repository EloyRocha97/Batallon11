const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middleware/token.middleware");
const { signUp, login, protected } = require("../handlers/loginHandlers");

const loginRouter = Router();

loginRouter.post("/signup", signUp);
loginRouter.post("/login", login);
loginRouter.get("/protected", verifyToken, protected);

module.exports = loginRouter;
