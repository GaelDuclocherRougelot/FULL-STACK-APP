const postModel = require('../models/post.model');
const objectId = require('mongoose').Types.ObjectId;

module.exports = {
  async getPosts(req,res) {
    try {
      const posts = await postModel.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createPost(req,res) {
    const post = new postModel({
      posterId: req.body.posterId,
      message: req.body.message,
      video: req.body.video,
      likers: [],
      comments: [],
    });

    try {
      await post.save();
      res.status(201).json({message: "Post created"});
    } catch (error) {
      res.json(error.message)
    }
  },
  async deletePost(req,res) {
    if(!objectId.isValid(req.params.id)) {
      return res.status(400).json({ message: `Post not found with id : ${req.params.id}` });
    };
    try {
      await postModel.deleteOne({_id: req.params.id});
      res.status(200).json({message: "Post deleted"}); 
    } catch (error) {
      res.status(500).json(error); 
    }
  },
  async updatePost(req,res) {
    if(!objectId.isValid(req.params.id)) {
      return res.status(400).json({ message: `Post not found with id : ${req.params.id}` });
    };
    const updatedRecord = {
      message: req.body.message
    };
      postModel.findByIdAndUpdate(
        req.params.id, 
        {$set: updatedRecord},
        {new: true}, 
        (err) => {
        if(err) {
          console.log('Failed to Update the post:'+ err);
        }else {
          res.status(200).json({message: "Post updated"});
        }
      });
  }
};