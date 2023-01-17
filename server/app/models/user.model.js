const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isEmail }= require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    nickname: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },
    picture: {
      type: String,
      default: "./uploads/profile/random-user.png"
    },
    bio: {
      type: String,
      maxlength: 1024
    },
    followers: {
      type: [String]
    },
    following: {
      type: [String]
    },
    likes: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;