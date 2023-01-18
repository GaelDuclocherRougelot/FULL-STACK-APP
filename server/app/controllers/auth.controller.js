const userModel = require('../models/user.model');
const auth = require('../middlewares/auth.middleware');

module.exports = {
  async register(req, res) {
    const { nickname, email, password } = req.body;
    try {
      const user = await userModel.create({ nickname, email, password });
      res.status(201).json({ user: user._id });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    const maxAge = 3 * 24 * 60 * 60 * 1000;
    try {
      const user = await userModel.login(email, password);
      const token = auth.createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
      res.status(200).json({ user: user._id})
        
      } catch (error) {
        res.status(500).json(error.message);
      }
  },
  async logout(req, res) {
    res.clearCookie('jwt');
    res.redirect('/');
  }
}