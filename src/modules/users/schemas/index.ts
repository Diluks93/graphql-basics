import { gql } from 'apollo-server';

export const typeUsers = gql`
  "This jwt type is used to authenticate."
  type JWT {
    jwt: String!
  }

  "This User type is used to register a new user."
  type User {
    id: ID!
    "is a string for the first name."
    firstName: String 
    "is a string for the last name."
    lastName: String
    "is a string for the password in format like [numbers][symbols]."
    password: String!
    "is a string for the email in format like test@test.ru."
    email: String! 
  }

  "This special type is used to indicate deletion in mutations."
  type Delete {
    acknowledge: Boolean
    deleteCount: Int
  }

  "This query type is contain of available queries."
  type Query {
    "You can GET user by ID."
    user(id: ID!): User
    "You can GET user by email and password."
    jwt(email: String!, password: String!): JWT
  }

  "This mutation type is contain of available mutations."
  type Mutation {
    "You can register a new user. Attention!!! All fields are required."
    register(firstName: String!, lastName: String!, password: String!, email: String!): User
  }
`;
