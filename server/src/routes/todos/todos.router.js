const express = require('express');

const { httpGetAllTodos } = require('./todos.controller');

const todosRouter = express.Router();

todosRouter.get('/', httpGetAllTodos);

module.exports = todosRouter;