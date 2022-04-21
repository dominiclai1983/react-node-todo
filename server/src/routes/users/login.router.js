const express = require('express');

const { httpPostLoginUser} = require('./users.controller');

const loginRouter = express.Router();

loginRouter.post('/', httpPostLoginUser);

module.exports = loginRouter;