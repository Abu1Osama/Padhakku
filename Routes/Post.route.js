const express = require('express');
const router = express.Router();
const Post = require('../Models/PostModel');


router.post('/posts', async (req, res) => {
  try {
    const { userId, content } = req.body;
    const post = new Post({ userId, content });
    await post.save();
    res.status(200).json({ message: 'Successfully created' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.delete('/deletepost/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: 'Successfully Post deletion ' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/posts/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const posts = await Post.find({ userId });
  
      if (posts.length === 0) {
        return res.status(404).json({ message: 'No posts found for the user' });
      }
  
      res.status(200).json({ message: 'All the posts from the user', posts });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;
