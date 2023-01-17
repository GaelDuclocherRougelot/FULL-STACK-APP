const express = require('express');
const postController = require('../controllers/post');
const router = express.Router();


router.route('/')
  .get(postController.getAllPosts);

router.route('/create')
  .post(postController.addPost);

router.route('/delete/:id')
  .delete(postController.removePost);


module.exports = router;
