import express from "express";
import homeController from "../controller/home.controller.js";
const homeRouter = express.Router();

homeRouter.get("/", homeController);

export default homeRouter;
