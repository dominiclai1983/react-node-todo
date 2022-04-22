const express = require('express');
const { 
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpPutUserTodos
} = require('./todos.controller');
const path = require('path');
const auth = require(path.join(__dirname, '..', '..', '..', 'src', 'services', 'auth'));

const todosRouter = express.Router();

todosRouter.get('/', auth, httpGetAllTodos);
todosRouter.get('/active', auth, httpGetUserActiveTodos);
todosRouter.get('/completed', auth, httpGetUserCompletedTodos);
todosRouter.put('/:id/completed', auth, httpPutUserTodos);
todosRouter.put('/:id/active', auth, httpPutUserTodos);

module.exports = todosRouter;