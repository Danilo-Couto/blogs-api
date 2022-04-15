const express = require('express');
const { createPost, getAllPosts, getPostById, editPost } = require('../controllers/postController');
const { createPostValidation,
    idValidation, editPostValidation, authAuthor } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

const postRoute = express.Router();

postRoute
.post('/', auth, createPostValidation, createPost)
.get('/', auth, getAllPosts)
.get('/:id', auth, idValidation, getPostById)
.put('/:id', auth, idValidation, authAuthor, editPostValidation, editPost);

module.exports = postRoute;
