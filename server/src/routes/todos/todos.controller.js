const { 
  getUserActiveTodos,
  getUserCompletedTodos,
  getAllTodos,
  putUserTodos
} = require('../../models/todos.model');

async function httpGetAllTodos(req, res){
  console.log(req.query);
  const todos = await getAllTodos(req.userID);
  return res.status(200).json(todos);
}

async function httpGetUserActiveTodos(req, res){

  const todos = await getUserActiveTodos(req.userID);
  return res.status(200).json(todos);
  
}

async function httpGetUserCompletedTodos(req, res){

  const todos = await getUserCompletedTodos(req.userID);
  return res.status(200).json(todos);
  
}

async function httpPutUserTodos(req, res){

  const todo = await putUserTodos(req.params.id);
  return res.status(200).json(todo);
}

module.exports = {
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpPutUserTodos
}