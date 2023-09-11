import { Request } from "express";
export interface verifiedToken extends Request {
  username: string;
  userID: number;
}
