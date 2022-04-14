const express = require('express');
const { login } = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/validators');

const loginRoute = express.Router();

loginRoute
.post('/', loginValidation, login);

module.exports = loginRoute;
