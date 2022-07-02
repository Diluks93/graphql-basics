import { gql } from 'apollo-server';

export const typeUsers = gql`
  type JWT {
    jwt: String!
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): JWT
  }

  type Mutation {
    register(firstName: String!, lastName: String!, password: String!, email: String!): User
  }
`;
