const express = require('express');
const router = express.Router();
const Post = require('../Models/PostModel');


/**
 * @swagger
 * tags:
 *   - name: Post
 *     description: Post-related operations
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create Post API
 *     description: Allows users to create a new post.
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully created.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/deletepost/{postId}:
 *   delete:
 *     summary: Delete Post API
 *     description: Allows users to delete a post by providing its postId.
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: The ID of the post to be deleted.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully Post deletion.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/posts/{userId}:
 *   get:
 *     summary: Fetch User's Posts API
 *     description: Retrieves all posts made by a specific user.
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the user whose posts are to be fetched.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: All the posts from the user.
 *       404:
 *         description: No posts found for the user.
 *       500:
 *         description: Internal server error.
 */

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
