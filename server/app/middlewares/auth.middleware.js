const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

module.exports = {
  async verifyToken(req, res, next) {
    try {
      const token = req.cookies.jwt;
      if(token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
          if(err) {
            req.user = null;
            res.clearCookie('jwt');
            return res.status(401).json({message: 'Invalid token'});
            }else{
              const user = await userModel.findById(decoded.id);
              req.user = user;
              next();
            }
        });
      }else {
        req.user = null;
        return res.status(401).json({message: 'Invalid token'});
      }
    } catch (error) {
      return res.status(401).json({ message: 'Token not found' });
    }
  }

};
