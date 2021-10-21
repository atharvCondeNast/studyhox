1. Install node modules with command `npm install`
2. Run code with command `npm start`
3. Check if server is running on 8080
4. Hit Health status API http://localhost:8080/ it should return `{"message":"Welcome to profcyma application."}`
3. SignUp `POST` Api `http://localhost:8080/api/auth/signup` with json data 
`{
    "username": "atharv1",
    "email": "String1@gmail.com",
    "password": "String@123",
    "roles": [
        "user"
    ],
    "stream": "ECE",
    "class": "2nd year"
}`
4. SignIn `POST` Api http://localhost:8080/api/auth/signin with json data 
`{
    "username": "atharv1",
    "password": "String@123"
}`