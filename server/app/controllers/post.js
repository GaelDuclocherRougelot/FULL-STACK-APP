const postModel = require('../models/post.model');

module.exports = {
  async getAllPosts(req,res) {
    try {
      const posts = await postModel.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addPost(req,res) {
    const post = new postModel(req.body);
    try {
      await post.save();
      res.status(201).json({message: "Post created"});
    } catch (error) {
      res.json(error.message)
    }
  },
  async removePost(req,res) {
    postModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log('Failed to Delete the post: ' + err);
    } else {
      res.status(200).json({message: "Post deleted"});
    }
    });
  },
  async updatePost(req,res) {
      postModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if(err) {
          console.log('Failed to Update the post:'+ err);
        }else {
          res.status(200).json({message: "Post updated"});
        }
      });
  }
};