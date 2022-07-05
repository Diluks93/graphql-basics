import { gql } from 'apollo-server';

export const typeArtists = gql`
  "This Artists type is supported to fields for parameters."
  type Artists {
    "List of items by type"
    items: [Artist!]
  }

  "This Artist type defines the queryable fields for every artist in our data source."
  type Artist {
    "This is unique ID for the artist."
    id: ID!
    "This is the name of the artist."
    firstName: String!
    "This is the second name of the artist."
    secondName: String!
    "This is pseudo-name of the artist."
    middleName: String
    "This is a birth date of the artist in format string like MM/DD/YYYY, includes zeros."
    birthDate: String
    "This is a birth place of the artist."
    birthPlace: String
    "This is a country of the artist."
    country: String!
    "This is list of bands."
    bands: [Band]
    "This is list of instruments."
    instruments: [String]
  }

  extend type Query {
    "You can GET a list of artists."
    artists(limit: Int, offset: Int): Artists
    "You can GET an artist by id."
    artist(id: ID!): Artist
  }

  extend type Mutation {
    "You can create a new artist. Attention! firstName, secondName, country is required fields."
    createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: String, birthPlace: String, country: String!, bandsIds: [ID!], instruments: [String]): Artist
    "You can update an artist by ID in your database. Attention! firstName, secondName, country is required fields."
    updateArtist(id: ID!, firstName: String!, secondName: String!, middleName: String, birthDate: String, birthPlace: String, country: String!, bandsIds: [ID!], instruments: [String]): Artist
    "You can remove an artist by ID from your database."
    deleteArtist(id: ID!): Delete
  }
`;
