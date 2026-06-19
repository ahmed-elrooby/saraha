import express from "express";
import {
  handleRegister,
  registerController,
} from "../controller/register.controller.js";
const registerRouter = express.Router();

registerRouter.get("/register", registerController);
registerRouter.post("/handleRegister", handleRegister);
export default registerRouter;
