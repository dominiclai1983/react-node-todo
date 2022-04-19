const express = require('express');
//it is one level down from server: api-> server

const todosRouter = require('./todos/todos.router');

const api = express.Router();

api.use('/tasks', todosRouter);

module.exports = api;