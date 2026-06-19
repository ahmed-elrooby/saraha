import express from "express";
import {
  handleMessage,
  userController,
} from "../controller/user.controller.js";
const userRouter = express.Router();
userRouter.get("/user/:id", userController);
userRouter.post("/user/handleMessage", handleMessage);
export { userRouter };
