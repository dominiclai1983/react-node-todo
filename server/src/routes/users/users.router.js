const express = require('express');

const { 
  httpPostNewUser, 
} = require('./users.controller');

const usersRouter = express.Router();

usersRouter.post('/', httpPostNewUser);

module.exports = usersRouter;