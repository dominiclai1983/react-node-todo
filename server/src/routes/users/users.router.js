const express = require('express');

const { httpPostNewUser } = require('./users.controller');

const userRouter = express.Router();

userRouter.post('/', httpPostNewUser);

module.exports = userRouter;