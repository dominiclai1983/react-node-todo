/*
const express = require('express');

const { httpGetLogoutUser } = require('./users.controller');

const logoutRouter = express.Router();

logoutRouter.get('/', httpGetLogoutUser);

module.exports = logoutRouter;
*/

import express, { Router } from "express";
import { httpGetLogoutUser } from "./users.controller";

export const logoutRouter: Router = express.Router();

logoutRouter.get("/", httpGetLogoutUser);
