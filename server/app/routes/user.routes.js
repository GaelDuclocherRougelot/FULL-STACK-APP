const express = require('express');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const router = express.Router();

// auth
router.route('/register')
  .post(authController.register);

// user
router.route('/')
  .get(userController.getAllUsers)
  
router.route('/:id')
  .get(userController.getOneUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

router.route('/follow/:id')
  .patch(userController.follow)
router.route('/unfollow/:id')
  .patch(userController.unfollow)



module.exports = router;