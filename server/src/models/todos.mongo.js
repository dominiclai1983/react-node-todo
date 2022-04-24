const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    item:{
      $type: String,
      required: true,
    }, 
    completed: {
      $type: Boolean,
      default: false
    },
    deleted:{
      $type: Boolean,
      default: false
    },
    user_id: {
      $type: Number,
      required: true,
    }
  },
  { typeKey: '$type' }
);

module.exports = mongoose.model('Todo', todosSchema);
