# Backend

## Overview

The backend of the Health Tracking App is built using Node.js and Express.js. It provides RESTful APIs to handle user authentication, health records management, and data retrieval.

## Technologies

- **Node.js**: JavaScript runtime used to build the server-side application.
- **Express.js**: Web framework for Node.js to handle HTTP requests and routing.
- **MongoDB**: NoSQL database used to store health records and user information.
- **Axios**: For making HTTP requests to external APIs.
- **bcryptjs**: Library for hashing passwords.

## Installation

### Prerequisites

- Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Bhavani-Bojedla/Hospital-Backend.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### User Authentication

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/signin**: Authenticate a user and password.

### Health Records

- **GET /api/record/:userId**: Retrieve all records for a specific user.
- **GET /api/record/:recordId**: Retrieve all records for a specific user.
- **POST /api/createrecord**: Add a new health record.
- **PUT /api/updaterecord/:recordId**: Update an existing health record.
- **DELETE /api/deleterecord/:recordId**: Delete a specific health record.

## Error Handling

- **400 Bad Request**: Invalid request parameters or data.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Server-side errors.


## Contact

- **Email:** bhavanibojadla8@gmail.com
- **GitHub:** [Bhavani-Bojedla](https://github.com/Bhavani-Bojedla)

## Contributing

If you'd like to contribute to this project, please follow the guidelines outlined in the [CONTRIBUTING](CONTRIBUTING.md) file.
