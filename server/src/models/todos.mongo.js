const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  item:{
    type: String,
    required: true,
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  user_id: {
    type: Number,
    require: true
  }
})

module.exports = mongoose.model('Todo', todosSchema);
