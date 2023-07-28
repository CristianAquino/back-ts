import express from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers";
import { logMiddleware } from "../middleware/log.middleware";

const itemRouter = express.Router();

itemRouter.get("/", logMiddleware, getItems);
itemRouter.get("/:id", getItem);
itemRouter.post("/", postItem);
itemRouter.put("/:id", updateItem);
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
