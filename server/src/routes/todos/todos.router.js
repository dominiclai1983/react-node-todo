const express = require('express');
const { httpGetAllTodos } = require('./todos.controller');
const path = require('path');
const auth = require(path.join(__dirname, '..', '..', '..', 'src', 'services', 'auth'));

const todosRouter = express.Router();

todosRouter.get('/', auth, httpGetAllTodos);

module.exports = todosRouter;