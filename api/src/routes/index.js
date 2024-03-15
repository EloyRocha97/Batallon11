const { Router } = require("express");
const loginRouter = require("./login.routes");
const userRouter = require("./users.routes");
const publicationsRouter = require("./publications.routes");
const inscriptRouter = require("./inscription.routes");
const exploradorRouter = require("./explorador.routes");
const bandaRouter = require("./banda.routes");
const fichaRouter = require("./fichaMedica.routes");

const mainRouter = Router();

mainRouter.use("/user", loginRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/publications", publicationsRouter);
mainRouter.use("/inscription", inscriptRouter);
mainRouter.use("/explorador", exploradorRouter);
mainRouter.use("/banda", bandaRouter);
mainRouter.use("/ficha", fichaRouter);

module.exports = mainRouter;
