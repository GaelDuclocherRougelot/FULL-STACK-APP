const router = require('express').Router();
const postController = require('../controllers/post.controller');


router.route('/')
  .get(postController.getPosts)
  .post(postController.createPost);
  
router.route('/:id')
  .put(postController.updatePost)
  .delete(postController.deletePost);


module.exports = router;
