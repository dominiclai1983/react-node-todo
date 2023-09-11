//const express = require("express");
import express from "express";
//it is one level down from server: api-> server

const todosRouter = require("./todos/todos.router");
import { usersRouter } from "./users/users.router";
import { loginRouter } from "./users/login.router";
import { logoutRouter } from "./users/logout.router";

export const api = express.Router();

api.use("/tasks", todosRouter);
api.use("/users", usersRouter);
api.use("/login", loginRouter);
api.use("/logout", logoutRouter);
