//a db seeding file only 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./src/models/todos/todos.mongo')

const MONGO_URL = 'mongodb+srv://dominic-todo-admin:7MDeadxUDaM6zNQz@todos.ez2wr.mongodb.net/todos?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL)
  .then( () => {
    console.log('connected to MongoDB...');
  })
  .catch( (err) => {
    console.log(err);
  })

const seedProducts = [
  {
    item: 'JS is super star!',
    user_id: 1000
  },
  {
    item: 'JS is my mate!',
    user_id: 1000
  },
  {
    item: 'JS is my king!',
    user_id: 1000
  },
  {
    item: 'JS is my friend!',
    user_id: 1000
  },
]

const seedDB = async () => {
  await Todo.deleteMany({});
  await Todo.insertMany(seedProducts);
}

seedDB().then(() => {
  mongoose.connection.close();
});

