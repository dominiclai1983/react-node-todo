const express = require('express');
const { 
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpGetCompletedTodos,
  httpPutUserTodos,
  httpPutUserTodo,
  httpPostNewTodo
} = require('./todos.controller');
const path = require('path');
const auth = require(path.join(__dirname, '..', '..', '..', 'src', 'services', 'auth'));

const todosRouter = express.Router();

todosRouter.get('/', auth, httpGetAllTodos);
todosRouter.get('/active', auth, httpGetUserActiveTodos);
todosRouter.get('/completed', auth, httpGetUserCompletedTodos);
todosRouter.get('/:id/deleted', auth, httpGetCompletedTodos);
todosRouter.put('/', auth, httpPutUserTodo);
todosRouter.put('/:id', auth, httpPutUserTodos);
todosRouter.post('/', auth, httpPostNewTodo);


module.exports = todosRouter;