import { gql } from 'apollo-server';

export const typeArtists = gql`
  scalar Date

  input ArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: Date
    birthPlace: String
    country: String!
    bands: [BandInput]
    instruments: String
  }

  type Artist {
    id: ID!
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: Date
    birthPlace: String
    country: String!
    bands: [Band]
    instruments: [String]
  }

  extend type Query {
    artists(limit: Int, offset: Int): [Artist]
    artist(id: ID!): Artist
  }

  extend type Mutation {
    createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: Date, birthPlace: String, country: String!, bands: [BandInput], instruments: [String]): Artist
    updateArtist(id: ID!, firstName: String!, secondName: String!, middleName: String, birthDate: Date, birthPlace: String, country: String!, bands: [BandInput], instruments: [String]): Artist
    deleteArtist(id: ID!): Delete
  }
`;
