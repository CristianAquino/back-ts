import express from "express";
import { getInfoAPI } from "../controllers";

const infoRouter = express.Router();

infoRouter.get("/", getInfoAPI);

export default infoRouter;
