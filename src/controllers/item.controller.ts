import { Request, Response } from "express";
import { errorHandler } from "../utils";
import {
  deleteCar,
  getCarById,
  getCars,
  insertCar,
  updateCar,
} from "../services/item.service";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCarById(id);
    return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await updateCar(id, body);
    return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    return res.status(201).json({ message: "Item created" });
  } catch (error) {
    errorHandler(res, "ERROR_POST_ITEM", error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCar(id);
    return res.status(200).json({ message: `Item deleted ${id}` });
  } catch (error) {
    errorHandler(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
