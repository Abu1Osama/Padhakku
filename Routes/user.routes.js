const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');


/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User-related operations
 */

/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: User Sign-Up API
 *     description: Allows users to sign up using their name and email.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful user sign-up.
 *       400:
 *         description: Bad Request - Invalid input data.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all users.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users.
 *       500:
 *         description: Internal server error.
 */


router.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const user = new User({ name, email });
    await user.save();

    res.status(200).json({ message: 'Successfull User sign-up ', userId: user._id });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
  
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
module.exports = router;
