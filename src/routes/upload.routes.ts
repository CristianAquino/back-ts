import express from "express";
import { getFile } from "../controllers";

const uploadRouter = express.Router();

uploadRouter.post("/", getFile);

export default uploadRouter;
