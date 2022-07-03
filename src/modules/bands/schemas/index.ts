import { gql } from 'apollo-server';

export const typeBands = gql`
  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: String
  }

  "This Band type defines the queryable fields for every band in our data source."
  type Band {
    "This is unique ID for the band."
    id: ID!
    "This is the name of the band."
    name: String
    "This is origin name for the band."
    origin: String
    "This is list of members."
    members: [Member]
    "This is website in format like string."
    website: String
    "This is list of genres."
    genres: [Genre]
  }

  input MemberInput {
    artist: String
    instruments: String
    years: String
  }

  "This Member type contains the name artist, instruments and released years."
  type Member {
    "This is the name artist."
    artist: String
    "This is instruments."
    instruments: String
    "This is released years in format like string."
    years: String
  }

  extend type Query {
    "You can GET a list of bands."
    bands(limit: Int, offset: Int): [Band]
    "You can GET a band by ID."
    band(id: ID!): Band
  }

  extend type Mutation {
    "You can create a new band."
    createBand(name: String, origin: String, members: [MemberInput], website: String, genres: [GenreInput] ): Band
    "You can update a band by ID in your database."
    updateBand(id: ID!, name: String, origin: String, members: [MemberInput], website: String, genres: [GenreInput]): Genre
    "You can remove a band by ID from your database."
    deleteBand(id: ID!): Delete
  }
`;
