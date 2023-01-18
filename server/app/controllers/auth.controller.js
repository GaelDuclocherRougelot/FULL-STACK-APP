const userModel = require('../models/user.model');

module.exports = {
  async register(req, res) {
    const { nickname, email, password } = req.body;
    try {
      const user = await userModel.create({ nickname, email, password });
      res.status(201).json({ user: user._id });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}