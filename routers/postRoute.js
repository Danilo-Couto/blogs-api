const express = require('express');
const { createPost, getAllPosts, getPostById } = require('../controllers/postController');
const { createPostValidation, idValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

const postRoute = express.Router();

postRoute
.post('/', auth, createPostValidation, createPost)
.get('/', auth, getAllPosts)
.get('/:id', auth, idValidation, getPostById);

module.exports = postRoute;
