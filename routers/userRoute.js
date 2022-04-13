const express = require('express');
const { createUserController } = require('../controllers/userController');

const userRoute = express.Router();
// const rescue = require('express-rescue');
const { createUserValidation } = require('../middlewares/validators');

userRoute
.post('/', createUserValidation, createUserController);

module.exports = userRoute;
