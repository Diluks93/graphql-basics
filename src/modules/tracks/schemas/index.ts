import { gql } from 'apollo-server';

export const typeTracks = gql`
  type Track {
    id: ID!
    title: String!
    bands: [Band]
    artists: [Artist]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks(limit: Int, offset: Int): [Track]
    track(id: ID!): Track
  }
`;