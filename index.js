const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./Routes/user.routes");
const postRoutes = require("./Routes/Post.route");

dotenv.config();
connectDB();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for Padhakku Post Management system",
    version: "1.0.0",
    description:
      "This is a Padhakku API application made with Express. It retrieves data from Padhakku Post Mangement System.",
    contact: {
      name: "Padhakku",
      url: "https://jsonplaceholder.typicode.com",

    },
  },
  servers: [
    {
      url: "https://padhakku-post-management.onrender.com",
      description: "Production server",
    },
    {
      url: "http://localhost:7788",
      description: "Development server",
    },
   
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./Routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Welcome to the Post management API! swith routes to perform opration",
    });
});
app.use("/api", userRoutes);
app.use("/api", postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
