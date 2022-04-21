const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    default: null,
  },
  email: { 
    type: String, 
    unique: true,
  },
  password: { 
    type: String,
  },
  userID:{
    type: Number
  },
  token: { 
    type: String 
  },
});

module.exports = mongoose.model('User', userSchema);