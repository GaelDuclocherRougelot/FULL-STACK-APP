const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();


router.route('/')
  .get(postController.getAllPosts);

router.route('/create')
  .post(postController.addPost);

router.route('/:id')
  .delete(postController.removePost)
  .patch(postController.updatePost)


module.exports = router;
