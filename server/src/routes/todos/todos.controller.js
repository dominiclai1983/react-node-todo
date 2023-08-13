const {
  getUserActiveTodos,
  getUserCompletedTodos,
  getAllTodos,
  getCompletedTodos,
  putUserTodos,
  putUserTodo,
  postNewTodo,
} = require("../../models/todos.model");

async function httpPutUserTodo(req, res) {
  const updateTodo = await putUserTodo(req.userID, req.body);
  return res.status(200).json(updateTodo);
}

async function httpPostNewTodo(req, res) {
  const todo = await postNewTodo(req.userID, req.body.item);

  return res.status(200).json(todo);
}

async function httpGetAllTodos(req, res) {
  const todos = await getAllTodos(req.userID);
  return res.status(200).json(todos);
}

async function httpGetUserActiveTodos(req, res) {
  const todos = await getUserActiveTodos(req.userID);
  return res.status(200).json(todos);
}

async function httpGetUserCompletedTodos(req, res) {
  const todos = await getUserCompletedTodos(req.userID);
  return res.status(200).json(todos);
}

async function httpPutUserTodos(req, res) {
  const todo = await putUserTodos(req.params.id, req.body);
  return res.status(200).json(todo);
}

async function httpGetCompletedTodos(req, res) {
  const todo = await getCompletedTodos(req.params.id);

  return res.status(200).json(todo);
}

module.exports = {
  httpGetUserActiveTodos,
  httpGetUserCompletedTodos,
  httpGetAllTodos,
  httpGetCompletedTodos,
  httpPutUserTodos,
  httpPutUserTodo,
  httpPostNewTodo,
};
