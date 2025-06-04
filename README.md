This is from the IBM Generative AI course. This project was sololy created by using prompts in an LLM.


# User Service

Handles user registration, login, and profile management.

## Setup

1. Create a `.env` file with:
MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret PORT=5000


2. Install dependencies:
npm install


3. Run development server:
npm run dev


## API Endpoints

- POST `/api/users/register` - Register new user
- POST `/api/users/login` - Login user and get JWT token
*/
/*
Additional notes:
- Make sure your MongoDB instance allows connections from your service host.
- If you want to connect to a different database, change `userdb` in the URI.
- Keep the .env file out of version control to protect secrets.
*/
