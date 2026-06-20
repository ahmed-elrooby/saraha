import express from "express";
import logoutController from "../controller/logout.controller.js";

const logoutRouter = express.Router();

logoutRouter.get("/logout", logoutController);

export default logoutRouter;
