import { gql } from 'apollo-server';

export const typeGenres = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
    subGenres: [Genre]
  }

  type Query {
    genres(limit: Int, offset: Int): [Genre]
    genre(id: ID!): Genre
  }

  type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
  }
`;
