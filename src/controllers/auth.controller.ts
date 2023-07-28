import { Request, Response } from "express";
import { loginUser, registerUser } from "../services";
import { errorHandler } from "../utils";

const signin = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await loginUser(body);

    return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_LOGIN_USER");
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await registerUser(body);
    return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_REGISTER_USER");
  }
};

export { signin, signup };

// para guardar un id en el request lo que se debe hacer
// es extender Request mediante un interface
// y agregarle el id al Request
// interface RequestWithUserId extends Request {
//   userId: string;
// }
// luego podemos proceder a realizar lo sgte.
// req.id = jwt.id;
//
