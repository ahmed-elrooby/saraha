import express from "express";
import {
  loginController,
  handleLLogin,
} from "../controller/login.controller.js";

const loginRouter = express.Router();

loginRouter.get("/login", loginController);
loginRouter.post("/handleLogin", handleLLogin);

export default loginRouter;
