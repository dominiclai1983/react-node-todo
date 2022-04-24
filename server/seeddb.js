//a db seeding file only 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Todo = require(path.join(__dirname, '.', 'src', 'models', 'todos.mongo'));

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
    user_id: 1001
  },
  {
    item: 'JS is my mate!',
    user_id: 1001
  },
  {
    item: 'JS is my king!',
    user_id: 1001
  },
  {
    item: 'JS is my friend!',
    user_id: 1001
  },
  {
    item: 'JS is super star!',
    user_id: 1002
  },
  {
    item: 'JS is my mate!',
    user_id: 1002
  },
  {
    item: 'JS is my king!',
    user_id: 1002
  },
  {
    item: 'JS is my friend!',
    user_id: 1002
  },
]

const seedDB = async () => {
  await Todo.deleteMany({});
  await Todo.insertMany(seedProducts);
}

seedDB().then(() => {
  mongoose.connection.close();
  console.log(`seeding completed! DOM!`)
});

