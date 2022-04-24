const { 
  getUserActiveTodos,
  getUserCompletedTodos,
  getAllTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo
} = require('../../models/todos.model');

async function httpPutUserTodo(req, res){

  console.log(req.body);
  console.log(req.userID);
  console.log(req.body.item);

  const updateTodo = await putUserTodo(req.userID, req.body);
}

async function httpPostNewTodo(req, res){
  console.log(req.body);
  console.log(req.userID);
  console.log(req.body.item)

  const todo = await postNewTodo(req.userID, req.body.item);

  return res.status(200).json(todo);
}

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
  console.log(req.query);
  console.log(req.params.id)
  console.log(req.body);
  //const todo = await putUserTodos(req.params.id);
  const todo = await putUserTodos(req.params.id,req.body);
  return res.status(200).json(todo);
}

async function httpGetCompletedTodos(req, res){
  console.log(req.query);
  console.log(req.params.id)
  const todo = await getCompletedTodos(req.params.id);

  return res.status(200).json(todo);
}

module.exports = {
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpPutUserTodos,
  httpGetCompletedTodos,
  httpPostNewTodo,
  httpPutUserTodo
}