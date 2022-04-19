const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = 'mongodb+srv://dominic-todo-admin:7MDeadxUDaM6zNQz@todos.ez2wr.mongodb.net/todos?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}