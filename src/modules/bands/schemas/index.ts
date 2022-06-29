import { gql } from 'apollo-server';

export const typeBands = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }

  type Member {
    artist: String
    instruments: String
    years: String
  }

  type Query {
    bands(limit: Int, offset: Int): [Band]
    band(id: ID!): Band
  }
`;
