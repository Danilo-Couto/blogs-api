const express = require('express');
const { createLoginController } = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/validators');

const loginRoute = express.Router();

loginRoute
.post('/', loginValidation, createLoginController);

module.exports = loginRoute;
