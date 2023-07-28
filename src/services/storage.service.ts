import { Storage } from "../interfaces";
import { StorageModel } from "../models";

const uploadImage = async ({ fileName, path, isUser }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, path });
  return responseItem;
};

export { uploadImage };
