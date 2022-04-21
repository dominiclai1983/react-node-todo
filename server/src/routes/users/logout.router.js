const express = require('express');

const { httpGetLogoutUser } = require('./users.controller');

const logoutRouter = express.Router();

logoutRouter.get('/', httpGetLogoutUser);

module.exports = logoutRouter;