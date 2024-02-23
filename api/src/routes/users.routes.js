const { Router } = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../handlers/users.handler");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
