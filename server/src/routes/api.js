const express = require('express');
//it is one level down from server: api-> server

const todosRouter = require('./todos/todos.router');
const usersRouter = require('./users/users.router');
const loginRouter = require('./users/login.router');
const logoutRouter = require('./users/logout.router');

const api = express.Router();

api.use('/tasks', todosRouter);
api.use('/users', usersRouter);
api.use('/login', loginRouter);
api.use('/logout', logoutRouter);

module.exports = api;