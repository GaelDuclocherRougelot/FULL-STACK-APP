const userModel = require('../models/user.model');

module.exports = {
  async register(req, res) {
    const user = new userModel(req.body);
    try {
      await user.save();
      res.status(201).json({message: "User created"});
    } catch (error) {
      res.json(error.message)
    }
  }
}