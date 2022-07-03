import { gql } from 'apollo-server';

export const typeTracks = gql`
  input TrackInput {
    title: String!
    albums: [AlbumInput]
    bands: [BandInput]
    duration: Int
    released: Int
    genres: [GenreInput]
  }

  "This Track type defines the queryable fields for every track in our data source."
  type Track {
    "This is unique ID for the track."
    id: ID!
    "This is the name of the track."
    title: String!
    "This is affiliation of the album."
    albums: [Album]
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
    tracks(limit: Int, offset: Int): [Track]
    "You can GET a track by ID."
    track(id: ID!): Track
  }

  extend type Mutation {
    "You can create a new Track. Attention! title is required field."
    createTrack(title: String!, album: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    "You can update your track by ID in your database."
    updateTrack(id: ID!, title: String!, album: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    "You can remove your track by ID from your database."
    deleteTrack(id: ID!): Delete
  }
`;
