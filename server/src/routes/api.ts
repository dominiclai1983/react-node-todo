const express = require("express");
//it is one level down from server: api-> server

const todosRouter = require("./todos/todos.router");
import { usersRouter } from "./users/users.router";
const loginRouter = require("./users/login.router");
const logoutRouter = require("./users/logout.router");

export const api = express.Router();

api.use("/tasks", todosRouter);
api.use("/users", usersRouter);
api.use("/login", loginRouter);
api.use("/logout", logoutRouter);

//module.exports = api;

/*
import express from "express";

import { usersRouter } from "./users/users.router";

export const api = express.Router();

api.use("/users", usersRouter);
*/
