const express = require('express');
const { createCategory, getAllCategories,
    getCategory } = require('../controllers/categoryController');
const auth = require('../middlewares/auth');
const { createCategoryValidation } = require('../middlewares/validators');

const categoryRoute = express.Router();

categoryRoute
.post('/', auth, createCategoryValidation, createCategory)
.get('/', auth, getAllCategories)
.get('/:id', auth, getCategory);

module.exports = categoryRoute;
