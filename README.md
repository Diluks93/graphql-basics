# GraphQL-basics

## Instructions

  1. check node version `node -v` (should be >= 16.x)
  2. you should use repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)
  3. detail instruction how to launch it you can find in microservice *readme.md.*
  4. turn on your microservices `npm run run:all:prod`
  5. git clone https://github.com/Diluks93/graphql-basics.git
  6. git checkout develop
  7. cd graphql-basics
  8. npm install
  9. rename the *.env.example* file to *.env*

## Usage

  1. `npm run dev` - to run in development mode or `npm start` - to run in production mode
  2. you should see the following message on your terminal:

    🚀 Server ready at http://localhost:3000/
    🔉  Listening on port 3000
    📭  Query at https://studio.apollographql.com/dev

  3. go to http://localhost:3000/  in your browser and use my server
  4. sign in **Musicify**

  Operation | `⏵Mutation`
  --- | --- 
  ```graphql
  mutation Mutation($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    register(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
      id
      firstName
      lastName
      password
      email
    }
  }
  ```
  `Variables` | Headers
  --- | --- 
  ```json
  {  
    "firstName": "Diluks",
    "lastName": "Rsschool",  
    "password": "123456qwe",
    "email": "test@test.ru"
  }
  ```
  Response | STATUS **200** | 158ms| 196B
  --- | --- | --- | ---
  ```json
  {
    "data": {
      "register": {
        "id": "62c13ebc74406b611ff0bdd7",
        "firstName": "Diluks",
        "lastName": "Rsschool",
        "password": "$2b$10$bM6rI67/KCzyky9Spp/GHuUnytDPoEXhLtpIjIWrukOuPx.MYBkSm",
        "email": "test@test.ru"
      }
    }
  }
  ```
  5. check your JWT token (EXAMPLE)

  Operation | `⏵Query`
  --- | --- 
  ```graphql
  query Query($email: String!, $password: String!) {
    jwt(email: $email, password: $password) {
      jwt
    }
  }
  ```
  `Variables` | Headers
  --- | --- 
  ```json
  {  
    "email": "test@test.ru",
    "password": "$2b$10$bM6rI67/KCzyky9Spp/GHuUnytDPoEXhLtpIjIWrukOuPx.MYBkSm"
  }
  ```
  Response | STATUS **200** | 55,6ms| 261B
  --- | --- | --- | ---
  ```json
  {
    "data": {
      "jwt": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMwMTAwMDVkN2QyZDVjY2Q3NDNlZDgiLCJmaXJzdE5hbWUiOiJEaW1rYSIsImxhc3ROYW1lIjoiRGlsdWtzIiwiZW1haWwiOiJ0ZXN0QHRlc3QucnUiLCJpYXQiOjE2NTY4NTgxNzh9.LK9P0ajWAyTcIq9k9UhIMZyj8mqiGh4RDVVfPm5IzOc"
      }
    }
  }
  ```
  P.S. 
  Remember that each mutation must contain

  Variables | `Headers`
  --- | --- 

  [v] | Authorization | Bearer `{{your jwt token}}`
  | --- | --- | --- |

  6. Detail information about queries and mutations contains to documentation https://studio.apollographql.com/dev

## Linting

  1. You can check my code on errors or warnings the script `npm run lint`