import express, { Router } from "express";
import { httpPostNewUser } from "./users.controller";

export const usersRouter: Router = express.Router();

usersRouter.post("/", httpPostNewUser);
