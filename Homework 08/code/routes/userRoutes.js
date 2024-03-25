import express from "express";
import { UserController } from "../controller/userController.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/register", async (req, res) => {
  await userController.registerController(req, res);
});

userRouter.post("/login", async (req, res) => {
  await userController.loginController(req, res);
});

userRouter.post("/logout", async (req, res) => {
  await userController.logoutController(req, res);
});

export default userRouter;
