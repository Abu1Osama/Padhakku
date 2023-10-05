const express = require("express");
const app = express();
const connectDB =require("./config/db") ;
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require('./Routes/user.routes');
const postRoutes = require('./Routes/Post.route');

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Post management API! swith routes to perform opration' });
});
app.use('/api', userRoutes);
app.use('/api', postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});