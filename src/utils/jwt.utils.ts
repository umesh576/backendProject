import jwt from "jsonwebtoken";
import { IPayload } from "../@types/jwt.interface";

const JWT_SECRET = process.env.JWT_SECRET || "";
const TOKEN_EXPIRES_IN = process.env.JWT_TOKEN_EXPIRES_IN || "1d";

export const generateToken = (payload: IPayload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  });
};
