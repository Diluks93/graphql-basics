import { gql } from 'apollo-server';

export const typeFavourites = gql`
  union Favorite = Artist | Band | Genre | Track | Album

  type Favourites {
    id: ID!
    userId: ID!
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  extend type Query {
    favourites(id: ID!): [Favorite]
  }
`;
