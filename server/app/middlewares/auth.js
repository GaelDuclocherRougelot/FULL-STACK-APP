const jwt = require('jsonwebtoken');

module.exports = {
  async createToken(user_id) {
    const token = jwt.sign(user_id, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
  },
};
