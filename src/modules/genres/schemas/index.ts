import { gql } from 'apollo-server';

export const typeGenres = gql`
  input GenreInput {
    name: String
    description: String
    country: String
    year: Int
  }
  
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Delete {
    acknowledge: Boolean
    deleteCount: Int
  }

  extend type Query {
    genres(limit: Int, offset: Int): [Genre]
    genre(id: ID!): Genre
  }

  extend type Mutation {
    createGenre(name: String!, description: String, country: String, year: Int): Genre
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: ID!): Delete
  }
`;
