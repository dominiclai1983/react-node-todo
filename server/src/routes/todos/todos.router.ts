const express = require("express");
const {
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpGetCompletedTodos,
  httpPutUserTodos,
  httpPutUserTodo,
  httpPostNewTodo,
} = require("./todos.controller");
/*
const path = require('path');
const auth = require(path.join(__dirname, '..', '..', '..', 'src', 'services', 'auth'));
*/

import { verifyToken } from "../../services/authts";

const todosRouter = express.Router();

todosRouter.get("/", verifyToken, httpGetAllTodos);
todosRouter.get("/active", verifyToken, httpGetUserActiveTodos);
todosRouter.get("/completed", verifyToken, httpGetUserCompletedTodos);
todosRouter.get("/:id/deleted", verifyToken, httpGetCompletedTodos);
todosRouter.put("/", verifyToken, httpPutUserTodo);
todosRouter.put("/:id", verifyToken, httpPutUserTodos);
todosRouter.post("/", verifyToken, httpPostNewTodo);

module.exports = todosRouter;
