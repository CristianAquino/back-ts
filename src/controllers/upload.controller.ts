import { Request, Response } from "express";
import path from "path";
import { uploadImage } from "../services";
import fileUpload, { UploadedFile } from "express-fileupload";

const getFile = async (req: Request, res: Response) => {
  console.log(req.files);
  //   const response = await uploadImage(req);
  res.send("Hello World");
};

export { getFile };
