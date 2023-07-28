import { Request, Response } from "express";
import pkg from "../../package.json";

const getInfoAPI = (req: Request, res: Response) => {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  });
};

export { getInfoAPI };
