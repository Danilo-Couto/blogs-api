const express = require('express');
const { createPost } = require('../controllers/postController');
const { createPostValidation } = require('../middlewares/validators');
const auth = require('../middlewares/auth');

const postRoute = express.Router();

postRoute
.post('/', auth, createPostValidation, createPost);

module.exports = postRoute;
