const express = require('express');
const { createPost, getAllPosts } = require('../controllers/postController');
const { createPostValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

const postRoute = express.Router();

postRoute
.post('/', auth, createPostValidation, createPost)
.get('/', auth, getAllPosts);

module.exports = postRoute;
