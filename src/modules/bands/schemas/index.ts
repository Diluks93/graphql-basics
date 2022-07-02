import { gql } from 'apollo-server';

export const typeBands = gql`
  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: String
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }

  input MemberInput {
    artist: String
    instruments: String
    years: String
  }

  type Member {
    artist: String
    instruments: String
    years: String
  }

  extend type Query {
    bands(limit: Int, offset: Int): [Band]
    band(id: ID!): Band
  }

  extend type Mutation {
    createBand(name: String, origin: String, members: [MemberInput], website: String, genres: String ): Band
    updateBand(id: ID!, name: String, origin: String, members: [MemberInput], website: String, genres: String): Genre
    deleteBand(id: ID!): Delete
  }
`;
