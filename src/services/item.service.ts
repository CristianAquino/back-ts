import { Car } from "../interfaces";
import { Item } from "../models";

const insertCar = async (item: Car) => {
  const newItem = await Item.create(item);
  return newItem;
};

const getCars = async () => {
  const items = await Item.find({});
  return items;
};

const getCarById = async (id: string) => {
  const car = await Item.findById(id);
  return car;
};

const updateCar = async (id: string, item: Car) => {
  const updatedCar = await Item.findByIdAndUpdate({ _id: id }, item, {
    new: true,
  });
  return updatedCar;
};

const deleteCar = async (id: string) => {
  await Item.findByIdAndDelete(id);
};

export { insertCar, getCars, getCarById, updateCar, deleteCar };
