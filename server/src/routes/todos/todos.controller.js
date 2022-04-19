const { getAllTodos } = require('../../models/todos.model');

async function httpGetAllTodos(req, res){
  console.log(req.query);
  const todos = await getAllTodos();
  return res.status(200).json(todos);
}



module.exports = {
  httpGetAllTodos
}