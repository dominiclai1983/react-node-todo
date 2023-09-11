/*
const express = require('express');

const { httpPostLoginUser} = require('./users.controller');

const loginRouter = express.Router();

loginRouter.post('/', httpPostLoginUser);

module.exports = loginRouter;
*/

import express, { Router } from "express";
import { httpPostLoginUser } from "./users.controller";

export const loginRouter: Router = express.Router();

loginRouter.post("/", httpPostLoginUser);
