# SecretBox. (Secrets Posting Application)

This repository houses the codebase for our Secrets Posting Application. This system is designed to share secrets anonymously. In addition to this, it also include a feature of secure authentication mechanism.

## Features

- Authentication: Enables user registration and login.
- Secrets: Allows user to share one secret.
- Anonymous Secrets: Provides secrets of all users without specifying particular user.
- JWT : JSON Web Token is used for Authentication and Authorization. They are often used as tokens to authenticate users and maintain sessions.


## Technologies Used

- React.js: The frontend of our Secrets Posting Application is built using React.js, with powerfull use of Context API for global states or state management.

- Express.js: Our backend is constructed with Express.js, a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- MongoDB: We use MongoDB as our primary database to store all transactional and user data. MongoDB is a source-available cross-platform document-oriented database program, known for its high scalability and flexibility.

- TailwindCSS: This is the Utility-first CSS framework for creating frontend components.


## Getting Started

Here's how you can use this repository:

Install and run locally SecretBox with npm

```bash
  Installation for Frontend
  > cd client
  > npm i 
  > npm run dev
```

```bash
  Installation for Backend
  > cd server
  > create a .env file 
   - Add MONGO_URL varaibale (For example: MONGO_URL="mongodb+srv://username:password@cluster0.6u2l6tl.mongodb.net/database_name")
   - Add JWT_SECRET varaibale 
  > npm i
  > npm run start
```
