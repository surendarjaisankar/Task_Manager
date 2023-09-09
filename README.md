# MERN Stack Task Management Web Application Documentation

This documentation provides a comprehensive guide to setting up and understanding the MERN stack Task Management Web Application. The application is built using React.js for the front end, Node.js for the backend, and MongoDB for the database. The front end is created using the Vite app build tool.

## Table of Contents

1. Introduction
2. Prerequisites
3. Project Structure
4. Front End (React.js with Vite)
5. Backend (Node.js)
6. Database (MongoDB)
7. Getting Started
8. Features
9. Deployment
10. Conclusion
11. Resources

## 1. Introduction

The MERN stack Task Management Web Application is designed to help users manage their tasks efficiently. It allows users to create, read, update, and delete tasks, as well as mark tasks as complete.

## 2. Prerequisites

Before setting up the application, ensure you have the following prerequisites installed on your system:

- Node.js
- MongoDB
- Git
- Text Editor (e.g., Visual Studio Code)
- Command Line Interface (CLI)

## 3. Project Structure

The project has the following structure:

```
mern-task-management/
|-- backend/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- server.js
|-- frontend/
|   |-- src/
|   |-- index.html
|   |-- vite.config.js
|-- .gitignore
|-- package.json
|-- README.md
```

## 4. Front End (React.js with Vite)

The front end is built using React.js and the Vite app build tool. The `src` folder inside the `frontend` directory contains the React components and other necessary files.

## 5. Backend (Node.js)

The backend is built using Node.js and Express.js. The `controllers` folder contains the logic for handling API requests, the `models` folder defines the MongoDB schemas, and the `routes` folder defines the API routes. The `server.js` file initializes the server and connects to the database.

## 6. Database (MongoDB)

MongoDB is used as the database for the application. It stores tasks and their relevant information. The application communicates with the database using Mongoose, an Object Data Modeling (ODM) library.

## 7. Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the `backend` folder and install dependencies: `cd backend && npm install`
3. Start the backend server: `npm start`
4. Open a new terminal window, navigate to the `frontend` folder, and install dependencies: `cd frontend && npm install`
5. Start the frontend development server: `npm run dev`

## 8. Features

- User registration and authentication
- Create, read, update, and delete tasks
- Mark tasks as complete
- Filter and sort tasks based on different criteria
- Responsive and user-friendly UI

## 9. Deployment

You can deploy the MERN stack Task Management Web Application using platforms like Heroku, Vercel, or AWS. Make sure to update environment variables, configure your database connection, and follow the deployment guides provided by the chosen platform.

## 10. Conclusion

Congratulations! You now have a working MERN stack Task Management Web Application. Feel free to customize and extend the application based on your requirements.


Remember to keep your application's security and performance in mind while building and deploying it. Good luck!

SCREENSHOTS:

![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/9484f00f-5d93-41d4-aa11-24ed24b18041)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/47dd8966-f117-4c16-a698-f22ae8c8d64b)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/be2350a1-45a7-41b7-9555-a4c1ead5eda4)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/a045a023-e76f-4232-9b58-77f19fecb0bb)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/ab0e613b-e558-42af-9330-7c432f68e3ce)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/305dddfb-4caf-4fd4-bf47-5882df9a028a)
![image](https://github.com/surendarjaisankar/Task_Management_Application/assets/125639407/ddfcaedf-2a6b-4546-9f63-2500a8bb166e)






