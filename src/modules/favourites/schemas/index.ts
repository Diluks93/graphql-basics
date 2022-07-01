import { gql } from 'apollo-server';

export const typeFavourites = gql`
  union Favorite = Artist | Band | Genre | Track | Album

  type Favourites {
    id: ID!
    userId: ID!
    bands: [ID]
    genres: [ID]
    artists: [ID]
    tracks: [ID]
  }

  extend type Query {
    favourites(id: ID!): [Favorite]
  }
`;
