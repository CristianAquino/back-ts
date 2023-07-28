import { sign, verify } from "jsonwebtoken";

const { SECRET_WORD } = process.env;

const generateToken = (payload: any) => {
  const token = sign(payload, SECRET_WORD as string, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
};
const verifyToken = (token: string) => {};

export { generateToken, verifyToken };
