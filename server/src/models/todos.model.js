const axios = require('axios');

const todosDatabase = require('./todos.mongo');

const DEFAULT_FLIGHT_NUMBER = 1000;

async function getAllTodos(){
  return await todosDatabase
    .find({}, {'__v':0});
}

module.exports = {
  getAllTodos
}