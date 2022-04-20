const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config({path: path.resolve(__dirname, '../.env')});
//checkout the path.join() method for node.js

//const MONGO_URL = 'mongodb+srv://dominic-todo-admin:7MDeadxUDaM6zNQz@todos.ez2wr.mongodb.net/todos?retryWrites=true&w=majority'

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
  console.log(process.env.something);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}