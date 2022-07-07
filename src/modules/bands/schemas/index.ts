import { gql } from 'apollo-server';

export const typeBands = gql`
  "This Bands type is supported to fields for parameters."
  type Bands {
    "List of items by type"
    items: [Band!]
  }

  "This Band type defines the queryable fields for every band in our data source."
  type Band {
    "This is unique ID for the band."
    id: ID!
    "This is the name of the band."
    name: String!
    "This is origin name for the band."
    origin: String
    "This is list of members."
    members: [Member]
    "This is website in format like string."
    website: String
    "This is list of genres."
    genres: [Genre!]
  }

  input MemberInput {
    artist: String
    instruments: String
    years: [String]
  }

  "This Member type contains the name artist, instruments and released years."
  type Member {
    "This is the name artist."
    artist: String
    "This is instruments."
    instruments: String
    "This is years in format like array of string."
    years: [String]
  }

  extend type Query {
    "You can GET a list of bands."
    bands(limit: Int, offset: Int): Bands
    "You can GET a band by ID."
    band(id: ID!): Band
  }

  extend type Mutation {
    "You can create a new band."
    createBand(name: String, origin: String, members: [MemberInput], website: String, genresIds: [ID] ): Band
    "You can update a band by ID in your database."
    updateBand(id: ID!, name: String, origin: String, members: [MemberInput], website: String, genresIds: [ID]): Band
    "You can remove a band by ID from your database."
    deleteBand(id: ID!): Delete
  }
`;
