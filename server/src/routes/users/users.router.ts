/*
const express = require("express");

const { httpPostNewUser } = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", httpPostNewUser);

module.exports = usersRouter;
*/

import express, { Router, Request, Response } from "express";
import { httpPostNewUser } from "./users.controller";

export const usersRouter = express.Router();

usersRouter.post("/", httpPostNewUser);
