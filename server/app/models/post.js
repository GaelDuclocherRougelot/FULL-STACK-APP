const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {type: String,required: true},
  creator: String,
  description: String,
  tags: [String],
  comments: {type: [String], default: []},
  likes: { type: [String], default: []},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
