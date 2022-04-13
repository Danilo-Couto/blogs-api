const express = require('express');
const { createLoginController } = require('../controllers/loginController');
const { createloginValidate } = require('../middlewares/validators');

const loginRoute = express.Router();

loginRoute
.post('/', createloginValidate, createLoginController);

module.exports = loginRoute;
