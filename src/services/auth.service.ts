import { Auth, User } from "../interfaces";
import { UserModel } from "../models";
import { encryptPassword, generateToken, verifyPassword } from "../utils";

const registerUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return "ALREADY_USER";

  const passwordCryp = await encryptPassword(password);

  const registerUser = await UserModel.create({
    email,
    password: passwordCryp,
    name,
  });
  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const userFound = await UserModel.findOne({ email });

  const matchPassword =
    userFound == null
      ? false
      : await verifyPassword(password, userFound.password);

  if (!(userFound && matchPassword)) return "PASSWORD_O_USER_INCORRECT";

  const signToken = {
    id: userFound.id,
    email: userFound.email,
  };
  const token = generateToken(signToken);
  return token;
};
export { loginUser, registerUser };
