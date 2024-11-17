# Padhakku Post Management System

Padhakku Post Management System provides you the post for multiple users

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [API Endpoints](#API-Endpoints)

## Getting Started
### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- NPM or Yarn installed

### Installation

To install and set up the project, follow these steps:

1. Clone the repository:
   git clone https://github.com/Abu1Osama/Padhakku
2. Change to the project's directory:
   - cd your-project
3. Install dependencies:
   - npm install
## Usage
  npm run server
  
## API Documentation
- API documentation is provided using Swagger UI. Access the Swagger documentation at https://padhakku-post-management.onrender.com/docs when the server is running(Production Server):
- Open your web browser and navigate to http://localhost:3000/api/docs (for the Development server).
Here, you will find detailed information about the available API endpoints, request parameters, and responses.

## API Endpoints

List and describe the API endpoints your Node.js and Express project provides, including their purpose and how to use them.

- `POST /api/signup`: 
  - **Description**: User Sign-Up API.
  - **Request Body**:
    - `name` (string): The user's name.
    - `email` (string): The user's email address.
  - **Response**:
    - `200 OK`: Successfully signed up.

- `POST /api/posts`: 
  - **Description**: Create Post API.
  - **Request Body**:
    - `userId` (string): The ID of the user creating the post.
    - `content` (string): The content of the post.
  - **Response**:
    - `200 OK`: Successfully created.

- `DELETE /api/deletepost/:postId`: 
  - **Description**: Delete Post API.
  - **Request Params**:
    - `postId` (string): The ID of the post to be deleted.
  - **Response**:
    - `200 OK`: Successfully deleted.

- `GET /api/posts/:userId`: 
  - **Description**: Fetch User's Posts API.
  - **Request Params**:
    - `userId` (string): The ID of the user whose posts are to be fetched.
  - **Response**:
    - `200 OK`: All the posts from the user.
    - `404 Not Found`: No posts found for the user.


