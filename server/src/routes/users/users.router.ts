/*
const express = require("express");

const { httpPostNewUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", httpPostNewUser);

module.exports = usersRouter;
*/

import express, { Router } from "express";
import { httpPostNewUser } from "./users.controller";

export const usersRouter: Router = express.Router();

usersRouter.post("/", httpPostNewUser);
