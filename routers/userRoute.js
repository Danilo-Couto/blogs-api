const express = require('express');
const { getAllUsers, createUserController, getUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const { createUserValidation } = require('../middlewares/validators');

const userRoute = express.Router();

userRoute
.get('/', auth, getAllUsers)
.post('/', createUserValidation, createUserController)
.get('/:id', auth, getUser);

module.exports = userRoute;
