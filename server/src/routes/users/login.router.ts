import express, { Router } from "express";
import { httpPostLoginUser } from "./users.controller";

export const loginRouter: Router = express.Router();

loginRouter.post("/", httpPostLoginUser);
