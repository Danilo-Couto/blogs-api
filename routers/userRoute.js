const express = require('express');
const { getAllUsers, createUserController } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const { createUserValidation } = require('../middlewares/validators');

const userRoute = express.Router();

userRoute
.get('/', auth, getAllUsers)
.post('/', createUserValidation, createUserController);

module.exports = userRoute;
