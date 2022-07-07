import { gql } from 'apollo-server';

export const typeTracks = gql`
  "This Tracks type is supported to fields for parameters."
  type Tracks {
    items: [Track!]
  }

  "This Track type defines the queryable fields for every track in our data source."
  type Track {
    "This is unique ID for the track."
    id: ID!
    "This is the name of the track."
    title: String!
    "This is affiliation of the album."
    album: Album
    "This is the name artist."
    artists: [Artist]
    "This is affiliation of the band."
    bands: [Band]
    "This is duration of the track."
    duration: Int
    "This is the year of release when the track was recorded."
    released: Int
    "This is affiliation of the genre."
    genres: [Genre]
  }

  extend type Query {
    "You can GET a list of tracks."
    tracks(limit: Int, offset: Int): Tracks
    "You can GET a track by ID."
    track(id: ID!): Track
  }

  extend type Mutation {
    "You can create a new Track. Attention! title is required field."
    createTrack(title: String!, albumIds: [ID], bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    "You can update your track by ID in your database."
    updateTrack(id: ID!, title: String!, albumIds: [ID], bandsIds: [ID], duration: Int, released: Int, genresIds: [ID]): Track
    "You can remove your track by ID from your database."
    deleteTrack(id: ID!): Delete
  }
`;
