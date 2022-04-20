const axios = require('axios');

const Todo = require('./todos.mongo');
//this one is the database

const DEFAULT_FLIGHT_NUMBER = 1000;

async function getAllTodos(){
  return await Todo
    .find({}, {'__v':0});
}

module.exports = {
  getAllTodos
}