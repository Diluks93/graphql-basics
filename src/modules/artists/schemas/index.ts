import { gql } from 'apollo-server';

export const typeArtists = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
  }

  extend type Query {
    artists(limit: Int, offset: Int): [Artist]
    artist(id: ID!): Artist
  }

  extend type Mutation {
    createArtist(firstName: String, secondName: String, middleName: String, birthDate: String, birthPlace: String, country: String, bands: [ID], instruments: String): Artist
  }
`;
