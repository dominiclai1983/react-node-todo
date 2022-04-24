const express = require('express');
const { 
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpPutUserTodos,
  httpGetCompletedTodos,
  httpPostNewTodo,
  httpPutUserTodo
} = require('./todos.controller');
const path = require('path');
const auth = require(path.join(__dirname, '..', '..', '..', 'src', 'services', 'auth'));

const todosRouter = express.Router();

todosRouter.get('/', auth, httpGetAllTodos);
todosRouter.post('/', auth, httpPostNewTodo);
todosRouter.put('/', auth, httpPutUserTodo);
todosRouter.get('/active', auth, httpGetUserActiveTodos);
todosRouter.get('/completed', auth, httpGetUserCompletedTodos);
todosRouter.put('/:id', auth, httpPutUserTodos);
todosRouter.get('/:id/deleted', auth, httpGetCompletedTodos);


module.exports = todosRouter;