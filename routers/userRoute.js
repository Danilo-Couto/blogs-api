const express = require('express');
const { getAllUsers, createUserController,
    getUser, deleteUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const { createUserValidation, idValidation } = require('../middlewares/validators');

const userRoute = express.Router();

userRoute
.get('/', auth, getAllUsers)
.post('/', createUserValidation, createUserController)
.get('/:id', auth, idValidation, getUser)
.delete('/me', auth, deleteUser);

module.exports = userRoute;
