const express = require('express');
const { createLogin } = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/validators');

const loginRoute = express.Router();

loginRoute
.post('/', loginValidation, createLogin);

module.exports = loginRoute;
