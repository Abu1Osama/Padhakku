const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');

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
