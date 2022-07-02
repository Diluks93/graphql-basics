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

  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  extend type Query {
    tracks(limit: Int, offset: Int): [Track]
    track(id: ID!): Track
  }

  extend type Mutation {
    createTrack(title: String!, album: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    updateTrack(id: ID!, title: String!, album: [AlbumInput], bands: [BandInput], duration: Int, released: Int, genres: [GenreInput]): Track
    deleteTrack(id: ID!): Delete
  }
`;
