import { gql } from 'apollo-server';

export const typeTracks = gql`
  type Track {
    id: ID!
    title: String
    albums: String
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  extend type Query {
    tracks(limit: Int, offset: Int): [Track]
    track(id: ID!): Track
  }
`;
