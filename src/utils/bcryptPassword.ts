import { genSalt, hash, compare } from "bcryptjs";

const encryptPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

const verifyPassword = async (password: string, passwordDB: string) => {
  return await compare(password, passwordDB);
};

export { encryptPassword, verifyPassword };
