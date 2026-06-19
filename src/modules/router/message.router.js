import express from "express";
import { messageController } from "../controller/message.controller.js";

const messageRouter = express.Router();

messageRouter.get("/message", messageController);
export default messageRouter;
