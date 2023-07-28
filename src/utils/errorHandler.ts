import { Response } from "express";

const errorHandler = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw.message);

  res.status(500).json({
    message: error,
  });
};

export { errorHandler };
