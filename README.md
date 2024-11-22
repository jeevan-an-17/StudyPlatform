# SkillShareU - Study Platform

SkillShareU is an open platform designed to facilitate learning through workshops for everyone. The platform hosts various workshops where students can learn new skills, engage in interactive sessions, and improve their knowledge in different fields. The project is built using modern web technologies including the MERN stack, React, Node.js, MongoDB, HTML5, CSS, and JavaScript.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

SkillShareU is designed as an educational platform where users can participate in workshops, track progress, and connect with instructors. It is built to provide a seamless experience using interactive UI and backend integration with React for the frontend and Node.js/MongoDB for the backend.

## Features

- **User Authentication**: Sign up and login for users to access personalized features.
- **Workshop Management**: Users can browse and join workshops.
- **Progress Tracking**: Keep track of progress in workshops and mark sessions as completed.
- **Interactive UI**: Built using React for dynamic and responsive interfaces.
- **Admin Panel**: Admins can manage workshops, user information, and session data.
- **Search & Filter**: Easily search and filter workshops based on categories and other criteria.

## Technologies Used

- **Frontend**: React, HTML5, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **APIs**: RESTful APIs
- **Version Control**: Git, GitHub

## Installation

To set up the project locally, follow the steps below:

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community)
- **Git**: [Download and install Git](https://git-scm.com/)

### Steps to Run the Project Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/Nithinks07/SkillShareU.git
    cd SkillShareU
    ```

2. Install the required dependencies for both frontend and backend:

   - For **frontend**:
     ```bash
     npm install
     ```

   - For **backend**:
     ```bash
     cd backend
     npm install
     ```

3. Set up environment variables. Create a `.env` file in the root of the `server` directory and add your MongoDB connection string:
    ```bash
    MONGODB_URI=<Your MongoDB URI>
    ```

4. Start both the **frontend** and **backend** servers:

   - In one terminal window, run the backend server:
     ```bash
     cd backend
     node server.js
     ```

   - In another terminal window, run the frontend server:
     ```bash
     cd src
     npm start
     ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

Once the application is up and running, you can:
- Sign up and log in as a user or admin.
- Browse and join available workshops.
- Track progress and mark workshops as completed.
- Access the admin panel to manage workshops.

## Contributing

We welcome contributions to improve the platform. Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
