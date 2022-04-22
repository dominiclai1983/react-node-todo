const axios = require('axios');

const Todo = require('./todos.mongo');
//this one is the database

const DEFAULT_FLIGHT_NUMBER = 1000;

async function getAllTodos(userID){
  return await Todo
    .find({user_id: userID}, {'__v':0});
}

async function getUserActiveTodos(userID){
  return await Todo
    .find({
      user_id: userID, 
      completed: false    
    }, {'__v':0});
}

async function getUserCompletedTodos(userID){

  return await Todo
    .find({
      user_id: userID, 
      completed: true,    
    }, {'__v':0});
}

async function putUserTodos(taskID){

  const taskCompleted = await Todo.findOne({'_id': taskID}).completed;

  const updateTaskCompleted = !taskCompleted;

  return await Todo
    .findOneAndUpdate({
      '_id': taskID,
    }, updateTaskCompleted)
}

module.exports = {
  getAllTodos,
  getUserActiveTodos,
  getUserCompletedTodos,
  putUserTodos
}