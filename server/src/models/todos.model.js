const axios = require('axios');

const Todo = require('./todos.mongo');
//this one is the database

async function postNewTodo(userID, item){

  return await Todo.create([{user_id: userID, item: item}], {'__v':0});
}

async function putUserTodo(taskID, item){

  return await Todo
    .findOneAndUpdate(
      taskID, 
      item,
      {new: true}
    )
    
}

async function getAllTodos(userID){
  return await Todo
    .find({
      user_id: userID,
      deleted: false
    }, {'__v':0})
    .sort({'_id': -1});
}

async function getUserActiveTodos(userID){
  return await Todo
    .find({
      user_id: userID, 
      completed: false,
      deleted: false
    }, {'__v':0})
    .sort({'_id': -1});
}

async function getUserCompletedTodos(userID){

  return await Todo
    .find({
      user_id: userID, 
      completed: true,
      deleted: false
    }, {'__v':0})
    .sort({'_id': -1});
}

async function putUserTodos(taskID, completed){

  return await Todo
    .findByIdAndUpdate(
      taskID,
      completed,
      {new: true}
    )

  //TODO: updategrade to findOnebyid and adding params completed
}

async function getCompletedTodos(taskID){

  return await Todo
    .findByIdAndUpdate(
      taskID,
      {deleted: true}
    )
}

module.exports = {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos,
  getCompletedTodos,
  postNewTodo,
  putUserTodo
}